import React from 'react'

export const CustomButtonSatu = ({button_text, iconPath, onClick}) => {
  return (
    <button
        size="large"
<<<<<<< HEAD
        className={`felx items-center bg-purple-400 px-4 py-1 mt-2 cursor-pointer text-white text-sm font-bold rounded-full hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none `}
=======
        className={`flex items-center bg-purple-400 px-4 py-1 mt-2 cursor-pointer text-white text-sm font-bold rounded-full hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none `}
>>>>>>> 5c2901dbf65c3b29efe5b43ea79108ae6348b9be
        onClick={onClick}
    >
          {/* <FontAwesomeIcon icon={faGem} className='me-1'/> */}
          {iconPath && <img src={iconPath} alt="Icon" className="me-1 h-5 w-5 color-white" />}
        {button_text}
    </button>
  )
}
