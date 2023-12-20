import React, { useState } from "react";
import { CustomButtonSatu } from "../button/CustomButtonSatu";
import next from "../../images/icon/carbon_next-filled.svg";
import { Divider } from "antd";
import img from "../../images/kursus.png";
import { CardModal } from "../../components/card/CardModal";

const ModalSatu = ({ isOpen, onClose, children }) => {
  const overlayClasses = isOpen ? "fixed inset-0 bg-black opacity-50" : "hidden";
  const modalClasses = isOpen ? "fixed inset-1/2 w-[500px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl" : "hidden";

  return (
    <div>
      <div className={overlayClasses} onClick={onClose}></div>
      <div className={modalClasses}>{children}</div>
    </div>
  );
};

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };


//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Open Modal
//       </button>

//       <ModalSatu isOpen={isModalOpen} onClose={closeModal}>
//         <div className="">
//           <div className="font-bold mb-4 text-center">
//             <p>Selangkah Lagi Menuju</p>
//             <p className="text-purple-900">Menuju Premium</p>
//           </div>

//           <CardModal {...contentData} />
//           <div className="flex items-center justify-center mt-8">
//             <CustomButtonSatu button_text="Beli Sekarang" iconPath={next} onClick={closeModal} />
//           </div>
//         </div>
//       </ModalSatu>
//     </div>
//   );
// };

// export default App;
