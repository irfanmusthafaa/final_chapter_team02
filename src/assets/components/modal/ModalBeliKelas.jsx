import React from 'react'
import { CustomButtonSatu } from '../button/CustomButtonSatu'
import { Modal } from 'antd'
import { CardModal } from '../card/CardModal'
import next from "../../images/icon/circle-arrow-right-solid.svg";

export const ModalBeliKelas = (props) => {

  return (

    <Modal
      centered
      open={props.open}
      onOk={() => props.setOpen(false)}
      onCancel={() => props.setOpen(false)}
      footer={null}
      // width={700}
     
      // className='flex justify-center content-center items-center text-center'
    >
      <div className="bg-white p-8 max-w-md w-full rounded-xl ps-3">
        <div className="font-bold text-xl mb-4 text-center">
          <p>Selangkah Lagi Menuju</p>
          <p className="text-purple-900">Kelas Premium</p>
        </div>

        <CardModal Class={props.Class} />
        <div className="flex items-center justify-center mt-8">
                            {/* <CustomButtonDua button_text="                              Beli Sekarang" iconPath={next} onClick={() => setIsModalOpen(false)} /> */}
            <button
              onClick={() => setOpen(true)}
              size="large"
              className={`flex items-center justify-center bg-purple-400 px-4 py-1 mt-2 cursor-pointer text-white text-sm font-bold rounded-full h-[2.5rem] w-full hover:bg-purple-900 hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none `}
            >
              Beli Sekarang
              <img src={next} alt="Icon" className="ms-2 h-4 color-white" />
            </button>
        </div>
      </div>
    </Modal>
    
  )
}
