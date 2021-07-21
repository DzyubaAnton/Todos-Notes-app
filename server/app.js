require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./database/models/user');

// Создаем приложение express.
const app = express();

// Импортируем созданный в отдельный файлах рутеры.
const mainRouter = require('./routes/main');
const todosRouter = require('./routes/todos');
const notesRouter = require('./routes/notes');

// Определяем порт.
const port = (process.env.PORT ?? 3001);

// Политика cors.
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
}));

/* Подключаем middleware, которое позволяет читать содержимое
body из HTTP-запросов типа POST, PUT и DELETE. */
app.use(express.urlencoded({ extended: true }));

/* Подключаем middleware, которое позволяет читать переменные JavaScript,
сохранённые в формате JSON в body HTTP-запроса. */
app.use(express.json());

// Подключаем middleware, которое задает прамметры сесии пользователей.
app.use(session({
  store: new FileStore(),
  key: 'sid',
  secret: 'TodoList',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 24,
    sameSite: true,
  },
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy({
    // options for google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://todos-and-notes.herokuapp.com/google/redirect',
  }, (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our own db
    User.findOne({ 'tokens.googleId': profile.id }).then((currentUser) => {
      if (currentUser) {
        // already have this user
        done(null, currentUser);
      } else {
        // if not, create user in our db
        new User({
          'tokens.googleId': profile.id,
          login: profile.displayName,
          img: profile.photos[0].value,
          email: profile.emails[0].value,
        }).save().then((newUser) => {
          done(null, newUser);
        });
      }
    });
  }),
);

/* Подключаем middleware, которое сообщает epxress,
что в папке "ПапкаПроекта/public" будут находится статические файлы,
т.е. файлы доступные для скачивания из других приложений. */
app.use(express.static(path.join(process.env.PWD, 'public')));

// Переход на ручки.
app.use('/', mainRouter);
app.use('/todos', todosRouter);
app.use('/notes', notesRouter);

const root = path.join('build');
app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

// Запуск сервера и подключение к бд.
app.listen(port, async () => {
  console.log(`Server online on port ${port}!`);
  await connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log('Database online!');
});
