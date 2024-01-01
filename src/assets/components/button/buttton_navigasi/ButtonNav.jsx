import React from 'react'

export const NavButton = ( {button_text, onClick, isActive} ) => {
  // console.log(isActive, "ini activ yang dikirim")
  return (
    <button
      size="large"
      className={`py-3 px-3 md:px-0 md:w-full cursor-pointer text-purple-700 font-bold rounded-xl hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none text-base  ${isActive ? 'bg-purple-900 text-white' : 'bg-white'}`}
      onClick={onClick}
    >
      <div className='px-[2px] md:px-0'>{button_text}</div>
    </button>
  );
};