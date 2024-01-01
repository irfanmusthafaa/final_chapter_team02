import React, { useState } from "react";
import { BarProgres } from "../../BarProgres";
import { Link } from "react-router-dom";
import { ClipboardDocumentListIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
// import img from '{imgPath}';

export const CardKelasBerjalan = (props) => {
  const [from, setFrom] = useState("/KelasSaya/KelasBerjalan");

  return (
    <Link
      className="no-underline w-full mb-2 md:mb-0"
      to={{
        pathname: `/Detailkelas/${props.class.class.classCode}`,
        hash: "kelasBerjalan",
      }}
    >
      <div
        className="flex flex-col bg-white border-2 rounded-3xl overflow-hidden max-h-80 shadow-md mx-5 md:mx-0 md:max-w-md "
        style={{ border: ".5px solid grey" }}
      >
        <img src={props.class.class.thumbnailPicture} alt="img" className="object-cover max-h-[7rem]" />
        <div className="px-4 mb-3 mt-1">
          <div className="flex justify-between items-center">
            <p className="text-purple-700 font-bold ">{props.class.class.categorys?.categoryName}</p>
            <p className="text-xs flex justify-center items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                  fill="#F9CC00"
                />
              </svg>
              {props.class.class.averageRating?.toFixed(1)}
            </p>
          </div>
          <p className="text-black font-bold mt-1">{props.class.class.className}</p>
          <p className="text-black text-sm mt-1">By : {props.class.class.author}</p>
          <div className="flex gap-10 text-xs mt-2">
            <div className="flex flex-row justify-center items-center">
              <ShieldCheckIcon className="w-4" style={{ color: "green" }} />
              <p className="pl-[.1rem] font-semibold">{props.class.class.levelName}</p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ClipboardDocumentListIcon className="w-4" style={{ color: "green" }} />
              <p className="pl-[.1rem] font-semibold">{props.class.class.module} Modul</p>
            </div>
            <div className="flex justify-center items-center gap-1 ">
              <div className="flex flex-row justify-center items-center">
                <ClockIcon className="w-4" style={{ color: "green" }} />
                <p className="pl-[.1rem] font-semibold">{props.class.class.totalDuration} Menit</p>
              </div>
            </div>
          </div>
          <div className="mt-1">
            {/* garis persentasase */}
            <BarProgres presentase={props.class.presentase} />
          </div>
        </div>
      </div>
    </Link>
  );
};
