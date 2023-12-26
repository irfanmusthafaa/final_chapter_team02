import React from 'react'

export const BarProgres = (props) => {
    // const presentase = 5;

  const style = {
    width: `${props.presentase}%`,
    transition: 'width 300ms ease-in-out',
  };

  return (
    <div className="flex w-full bg-gray-300 h-5 rounded-full overflow-hidden">
       
      <div
        className="flex h-full bg-purple-900"
        style={style}
      >  
    </div>
      <span className="absolute mt-[2px] text-xs text-white pl-2">
            {props.presentase}% complete
      </span>
    </div>
  );
}
