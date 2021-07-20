import Note from './Note';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../redux/actions/notesAction';

import'../css/Notes.css'

function NoteTable() {

  const dispatch = useDispatch();

  const notes = useSelector(state => state.notes);

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])


  return (
    <>
        {
          notes.length ? notes.map((note) =>
          (
            <Note
              note={note}
              key={note._id}
            />
          )) : 
          <p>
            You have no Notes yet!<br/>To plan your new task just fill and submit Todo form. 
          </p>
      }
    </>
  )
}

export default NoteTable;
