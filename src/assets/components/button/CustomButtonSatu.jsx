import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond, faGem } from '@fortawesome/free-solid-svg-icons';

export const CustomButtonSatu = ({button_text, iconPath, onClick}) => {
  return (
    <button
        size="large"
        className={`flex content-center items-center bg-purple-400 px-4 py-1 mt-2 cursor-pointer text-white text-sm font-bold rounded-full hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none `}
        onClick={onClick}
    >
          {/* <FontAwesomeIcon icon={faGem} className='me-1'/> */}
          {iconPath && <img src={iconPath} alt="Icon" className="me-1 color-white" />}
        {button_text}
    </button>
  )
}
