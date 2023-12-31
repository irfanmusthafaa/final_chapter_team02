import icon_play from "../../images/icon/play.svg";
import React from 'react'

export const ButtonPlay = () => {
  return (
    <button className="animate-ping absolute w-16 h-16 bg-purple-500 rounded-full border-[0.3rem] border-white cursor-pointer transition-transform duration-500 ease-in-out">
      <img src={icon_play} alt="Icon"/>
      <style>{`
        @keyframes scale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-ping {
          animation: scale 2s infinite;
        }
      `}</style>
    </button>
    
  )
}
