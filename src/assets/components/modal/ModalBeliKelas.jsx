import React from 'react'
import { CustomButtonSatu } from '../button/CustomButtonSatu'

export const ModalBeliKelas = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  mt-7">
        <div className="w-full flex flex-col  gap-3">
            <div className="font-bold mb-4 text-center">
                <p>Selangkah Lagi Menuju</p>
                <p className="text-purple-900">Menuju Premium</p>
            </div>
        </div>
        <div className="flex items-center justify-center mt-8">
            <CustomButtonSatu button_text="Beli Sekarang" iconPath={next} onClick={closeModal} />
        </div>
      </div>
    </div>
  )
}
