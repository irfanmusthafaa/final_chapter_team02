import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const BackLink = () => {

  const location = useLocation();
  const [previousPath, setPreviousPath] = useState();
  useEffect(() => {
    const currentPath = location.hash || null;
        
    setPreviousPath(
      currentPath === '#kelasBerjalan'
      ? '/KelasSaya/KelasBerjalan'
      : currentPath === '#topikKelas'
      ? '/KelasSaya/TopikKelas'
      : '/'
    )

  }, [location]);

  return (
    <Link
      to={previousPath}
      className="flex gap-2 no-underline"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="pt-1 pl-2 md:pl-0" />
      <span className="text-black font-bold  hover:underline cursor-pointer pl-1 md:pl-0">
        Lihat Kelas Lainnya
      </span>
    </Link>
  );
};
