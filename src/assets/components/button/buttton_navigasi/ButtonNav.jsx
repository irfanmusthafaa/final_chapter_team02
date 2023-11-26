import React from 'react'

export const NavButton = ( {button_text, onClick, isActive} ) => {
  console.log(isActive, "ini activ yang dikirim")
  return (
    <button
      size="large"
      className={`bg-white py-3 px-20 cursor-pointer text-purple-700 font-bold rounded-full hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none  ${isActive ? 'bg-purple-900 text-white' : ''}`}
      onClick={onClick}
    >
      {button_text}
    </button>
  );
};