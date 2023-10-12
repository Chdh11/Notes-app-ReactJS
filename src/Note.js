import React, { useContext, useEffect, useReducer, useState } from 'react'
import './styles.css'
import editNote from './note-edit.png'
import deleteNote from './delete.png'


function Note(props) {
  return (
    <React.Fragment>
      <div className='note' style={{background:props.color}}>
            <div className='note-title'>{props.notes[0]}</div>
            <div className='note-content'>{props.notes[1]}</div>
            <div className='note-date'>{props.date}</div>
            <img src={deleteNote} alt='Delete Note' />
            <img src={editNote} alt='Edit Note' />
          </div>
    </React.Fragment>
  )
}

export default Note
