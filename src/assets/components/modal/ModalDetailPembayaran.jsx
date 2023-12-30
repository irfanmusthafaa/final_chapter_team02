import { Input, Modal, Radio, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useBankDataQuery } from '../../../services/bank/get-data-bank';
import { useParams } from 'react-router-dom';
import { paymentClass } from '../../../services/payment/post-payment-user';
import { toast } from 'react-toastify';

export const ModalDetailPembayaran = (props) => {
    
    const [metode, setMetode] = useState(true);
    const handleRadioChange = (e) => {
        const value = e.target.value === 'transfer';
        setMetode(value);

        setPaymentMethod(value ? 'Transfer' : 'Credit Card');
    };

    const { data: dataBank } = useBankDataQuery();
    const [Bank, setBank] = useState([]);
    const { classCode } = useParams();

    const [paymentMethod, setPaymentMethod] = useState('Transfer');
    const [bankId, setBankId] = useState();
    const [cardName, setCardName] = useState("inin lahh");
    const [cardNumber, setCardNumber] = useState(null);

    // const { mutate: dataPayment, status, isSuccess, isError, error } = usePaymentClassQuery();

    const handleInput = (e) => {
        if (e) {
            if (e.target.id === "cardName") {
                setCardName(e.target.value);
            }
            if (e.target.id === "cardNumber") {
                setCardNumber(e.target.value);
            }
            
        }
    };
        
    const [selectedBank, setSelectedBank] = useState(null);
    const [namaRekening, setNamaRekening] = useState('');
    const [noRekening, setNoRekening] = useState('');
    const handleBankChange = (value) => {
        setSelectedBank(value);
        const selectedBankData = Bank.find((bank) => bank.id === parseInt(value, 10));
        // console.log(selectedBankData, "ini valuenya")
        if (selectedBankData) {
            setNamaRekening(selectedBankData.bankName);
            setNoRekening(selectedBankData.bankNumber);
            setBankId(selectedBankData.id)
        } else {
        // Jika data bank tidak ditemukan, atur nama rekening menjadi kosong atau nilai default
            setNamaRekening('');
            setNoRekening('');
        }
    };

    useEffect(()=>{
        setBank(dataBank);
            
    }, [dataBank, namaRekening])


    const handlePaymentClass = async () => {
        if (!paymentMethod && !cardName && (!bankId || !cardNumber)) {
            console.log("Ini kosong woyyy");
            toast.error("Tolong lengkapi form pembayaran!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        try {
            await paymentClass({
              paymentMethod:paymentMethod,
              bankId:bankId,
              cardName:cardName,
              cardNumber:cardNumber
            }, classCode);
            toast.success("Anda Berhasil Melakukan Pembelian kelas");
            setTimeout(() => {
              window.location.href = '/sukses-pembayaran';
            }, 1000);
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    

  return (
    <Modal
        centered
        open={props.open}
        onOk={() => props.setOpen(false)}
        onCancel={() => props.setOpen(false)}
        footer={null}
        width={700}
        className="mt-10"
      >
        <div className="flex flex-col justify-center items-center w-full ">
          <div className="md:w-[60%]  mt-7">
            <h2 className="text-center font-bold text-purple-700 text-lg mb-6">
              Detail Pembayaran
            </h2>
            <div className="w-full flex flex-col  gap-3 ">
              <label className="font-semibold text-sm">
                PIlih Metode Pembayaran
              </label>
              <Radio.Group onChange={handleRadioChange} defaultValue="transfer">
                <Radio value="transfer">Bank Transfer</Radio>
                <Radio value="creditCard">Credit Card</Radio>
              </Radio.Group>

              {metode ? ( // Jika Metode true, tampilkan ini
                <>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">
                      Jenis Bank
                    </label>
                    <Select
                      id="idPembayaran"
                      className="border rounded-lg hover:border-purple-700"
                      placeholder="Pilih Bank"
                      onChange={handleBankChange}
                      value={selectedBank}
                    >
                      {Bank?.map((bank) => (
                        <Select.Option key={bank.id} value={bank.id}>
                          {bank.bankType}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
  
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">Nama Rekening</label>
                    <Input
                      id="namaRekening"
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Akan diisi otomatis"
                      value={namaRekening}
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">No Rekening</label>
                    <Input
                      id="noRekening"
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Akan diisi otomatis"
                      value={noRekening}
                      readOnly
                    />
                  </div>
                   <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">Nama Rekening Kamu</label>
                    <Input
                      id="cardName"
                      onChange={handleInput}
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Masukan nama rekening kamu yang digunakan untuk membayar"
                    />
                  </div>
                </>
              ) : ( // Jika Metode false, tampilkan ini
                <>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">Nama Kartu Kredit</label>
                    <Input
                      id="cardName"
                      onChange={handleInput}
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Isi dengan card name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">No Kartu Kredit</label>
                    <Input
                      id="cardNumber"
                      onChange={handleInput}
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Isi dengan card number"
                    />
                  </div>
                </>
              )}
            {console.log("ini yang di ambil : ", paymentMethod, cardName, bankId, cardNumber)}
            </div>
          
            <div className="flex gap-2 mt-4">
              <button className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2" onClick={handlePaymentClass}>
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </Modal>
  )
}
