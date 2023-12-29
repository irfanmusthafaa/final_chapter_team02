import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

export const BackLink = (props) => {

  //  const history = useHistory();
  // const previousPath = history.length > 1 ? history.location.pathname : '';
  return (
    <Link
      to={props.to}
      className="flex gap-2 no-underline"
    >
      {/* {console.log(previousPath, "ini halaman sebelumnya")} */}
      <FontAwesomeIcon icon={faArrowLeft} className="pt-1 pl-2 md:pl-0" />
      <span className="text-black font-bold  hover:underline cursor-pointer pl-1 md:pl-0">
        Lihat Kelas Lainnya
      </span>
    </Link>
  );
};
