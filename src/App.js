import './App.css';
import { useEffect, useReducer, useState } from 'react';
import './styles.css'
import addNote from './addNote.png'
import githubIcon from './github-icon.png'
import linkedInIcon from './linkedIn-icon.png'
import Popup from './Popup';
import Note from './Note.js'
import ColorButton from './ColorButton';
import OutsideClickHandler from 'react-outside-click-handler';

function App() { 
  useEffect(()=>{
    document.title='Notes'
  },[])
  
  const [isOpen, setIsOpen] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [color,setColor]=useState();
  const [showNote,setShowNote]=useState(false);
  const [NotesArray,setNotesArray]=useState([]);

  
  const ch3=(NotesArray)=>{
    setNotesArray(NotesArray)
    console.log(NotesArray)
  }
  

  return (
    <div className="App">
      <OutsideClickHandler onOutsideClick={()=>setIsOpen(false)}>
      {isOpen && (
        <Popup open={isOpen} set={setIsOpen} setColor={setIsColor} col={color}  ch3={ch3} shown={setShowNote}/>
      )}
      </OutsideClickHandler>

      <div className='gridContainerMain'>
        <div className='sidebar'>
          <img src={addNote} alt='Add Note' title='Add Note' className='add' onClick={()=>setIsColor(true)} />
          {isColor && (<ColorButton set={setIsOpen} setc={setColor}/>)}
          
          <div className='socials'>
         <a href='https://github.com/Chdh11/Notes-app-ReactJS' target='blank'><img src={githubIcon} alt='Github' /></a>
          <br />
          <a href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='blank'><img src={linkedInIcon} alt='LinkedIn'/></a>
          </div>
        </div>

        <div className='header'>Notes</div>

        <div className='main-content-grid'>
          {NotesArray.length>0 ? NotesArray.map((item)=><Note notes={item} color={item[2]} date={item[3]}/>): (<p>No notes present at the moment</p>)}
        </div>
      </div>
      
    </div>
  );
}


export default App;
