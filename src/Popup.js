import React, { useContext, useReducer ,useState} from 'react'
import done from './done.png'
import './popupCSS.css'

let arrTitle=[];
let arrContent=[];
let arrNotes=[];
let arrDate=[];

function Popup(props) {
  const [title,setTitle]=useState()
  const [content,setContent]=useState()

  const handleTitleChange=(e)=>{
    setTitle(e.target.value);
  }
  const handleContentChange=(e)=>{
    setContent(e.target.value);
  }
  const handleDone=()=>{
    props.set(false)
    // props.setColor(false)
    arrTitle.push(title)
    arrContent.push(content)
    arrDate.push(`${new Date().toLocaleString("en-UK", { day : '2-digit', month: "long"})} ${new Date().getFullYear()}`)
    arrNotes.push([title,content,props.col,arrDate[arrDate.length-1]])
    props.ch3(arrNotes)
    props.shown(true)
  }
return (
    <div >
      <div className='popup-grid-container' style={{borderRightColor: props.col ,borderRightWidth:`8px`}} >
        <div className='popup-title'><input type='text' placeholder='Add Title' onChange={handleTitleChange}/></div>
        <div className='popup-date'>{new Date().toLocaleString("en-UK", { day : '2-digit', month: "long"})} {new Date().getFullYear()}</div>
        <div className='popup-content'><textarea placeholder='Add Note'  onChange={handleContentChange}/></div>
        <img src={done} className='popup-done-button' alt='Done Note' onClick={handleDone}/>
      </div>
    </div>
  ) 
}

export default Popup
