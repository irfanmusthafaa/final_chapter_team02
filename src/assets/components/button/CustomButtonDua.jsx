import React from 'react'

export const CustomButtonDua = ({ button_text, iconPath, onClick }) => {
  return (
    <button
      size="large"
      className={`flex items-center bg-purple-400 px-4 py-1 mt-2 cursor-pointer text-white text-sm font-bold rounded-full hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none `}
      onClick={onClick}
    >
      {button_text}
      {iconPath && <img src={iconPath} alt="Icon" className="ms-1 h-4 color-white" />}
    </button>
  )
}
