import * as TYPES from '../types/types';
import url from '../../config/proxy';

//============================================
function setNotes(data) {
  return {
    type: TYPES.SET_NOTES,
    data,
  }
}

const getNotes = () => async (dispatch) => {
  const res = await fetch(`${url}/notes`)
  if (res.status === 200) {
    const data = await res.json()
    dispatch(setNotes(data))
  }
}

function addNote(data) {
  return {
    type: TYPES.ADD_NOTE,
    data,
  }
}

const createNote = (text, id) => async (dispatch) => {
  const res = await fetch(`${url}/notes/${id}/addnote`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      })
    }
  )

  if (res.status === 200) {
    const data = await res.json()
    dispatch(addNote(data))
  }
}

function changeNote(data) {
  return {
    type: TYPES.CHANGE_NOTE,
    data,
  }
}

function removeNote(data) {
  return {
    type: TYPES.REMOVE_NOTE,
    data,
  }
}

const deleteNote = (note, id) => async (dispatch) => {
  const res = await fetch(`${url}/notes/${id}/deletenote`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: note._id
      })
    }
  )

  if (res.status === 200) dispatch(removeNote(note))
}

const patchNote = (note, id) => async (dispatch) => {
  const res = await fetch(`${url}/notes/${id}/patchNote`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note
      })
    }
  )
  if (res.status === 200) dispatch(changeNote({...note, isUpdating: false}))
}

export {
  setNotes,
  getNotes,
  addNote,
  createNote,
  changeNote,
  deleteNote,
  removeNote,
  patchNote,
}
