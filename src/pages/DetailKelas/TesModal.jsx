import { Modal } from 'antd'
import React from 'react'
import { ModalBeliKelas } from '../../assets/components/modal/ModalBeliKelas'

export const TesModal = () => {

    
  return (
    <div>
        
        <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalBeliKelas />
        </Modal>
    </div>
  )
}
