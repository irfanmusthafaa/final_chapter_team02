import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const BackLink = () => {
  return (
    // <div className='flex gap-1'>
    //   <FontAwesomeIcon icon={faArrowLeft} />
    //   <Link to="#" onClick={() => window.history.back()} className="text-black font-bold no-underline hover:underline cursor-pointer">
    //     Lihat Kelas Lainnya
    //   </Link>
    // </div>

    <Link to="#" onClick={() => window.history.back()} className='flex gap-1 no-underline' >
        <FontAwesomeIcon icon={faArrowLeft} />
      
        <span className="text-black font-bold  hover:underline cursor-pointer">
          Lihat Kelas Lainnya
        </span>
        
     </Link>
    
  )
}
