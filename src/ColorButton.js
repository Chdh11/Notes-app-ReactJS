import React, { useState } from 'react'
import Popup from './Popup';
import './styles.css'

export const ColorContext=React.createContext()

function ColorButton(props) {
  const colors=['#ffdd94','#fa9f91','#f2b1d9','#a1edbd','#85c7ed','#b5b1de']
  return (
    <React.Fragment>
      <div className='color-button-container'>
        <button style={{background:colors[0]}} onClick={()=>{props.set(true); props.setc(colors[0]); }}/>
        <button style={{background:colors[1]}} onClick={()=>{props.set(true); props.setc(colors[1]); }}/>
        <button style={{background:colors[2]}} onClick={()=>{props.set(true); props.setc(colors[2]); }}/>
        <button style={{background:colors[3]}} onClick={()=>{props.set(true); props.setc(colors[3]); }}/>
        <button style={{background:colors[4]}} onClick={()=>{props.set(true); props.setc(colors[4]); }}/>
        <button style={{background:colors[5]}} onClick={()=>{props.set(true); props.setc(colors[5]); }}/>
          </div>
    </React.Fragment>
  )
}

export default ColorButton
