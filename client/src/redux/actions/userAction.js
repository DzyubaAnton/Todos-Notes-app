import * as TYPES from '../types/types';

//====================session========================
function checkUser(data) {
  return {
    type: TYPES.CHECK_USER_SESSION,
    data,
  }
}

const checkUserSession = () => (dispatch) => {
    fetch(`/login`)
    .then(res => res.status === 200 ? res.json() : null)
    .then(data => {
      dispatch(checkUser(data));
    })
}

// //===================login=========================

function signInUser(data = {}) {
  return {
    type: TYPES.VERIFY_USER,
    data,
  }
}

//==============google auth==============

const loginUserByGoogle = () => async (dispatch) => {
  const res = await fetch(`/google`)
  if(res.status === 200) {
    const data = await res.json()
    dispatch(signInUser(data))
  } else {
    dispatch(signInUser())
  }
}
//========================logout====================

const logoutUser = () => async (dispatch) => {
  const res = await fetch(`/logout`)
  if (res.status === 200) dispatch(removeUser())
}

function removeUser() {
  return {
    type: TYPES.VERIFY_USER,
    data: null
  }
}

//===============================


export {
  checkUser,
  checkUserSession,
  logoutUser,
  removeUser,
  loginUserByGoogle,
  signInUser,
}
