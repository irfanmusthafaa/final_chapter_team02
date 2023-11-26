import React from 'react'

export const NavPrimaryButton = ({ button_text, px }) => {
  console.log(px, "tes ini ")
  return (
    <button
      size="large"
      className={`bg-white py-2 px-[${px}] cursor-pointer text-purple-700 font-bold rounded-full hover:bg-purple-900 hover:text-white border-0 shadow-sm`}
    >
      {button_text}
    </button>
  );
};