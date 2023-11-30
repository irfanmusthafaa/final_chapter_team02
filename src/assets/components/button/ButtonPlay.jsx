import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ButtonPlay = ({onClick, active, index}) => {
  return (
    <button  onClick={() => onClick(index)}>
        <FontAwesomeIcon icon={faCirclePlay} className={`absolute right-0 mr-8 h-5 w-5 transition-transform transform hover:scale-105`} style={{ color: active ? '#4C1D95' : '#73CA5C' }}/>
        
    </button>
    
  )
}
