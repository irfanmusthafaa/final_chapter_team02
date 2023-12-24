import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowLeft,

} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";

import { Navbar } from "../assets/components/Navbar";
import img from "../assets/images/kursus.png";
import { Input, Radio, Select } from "antd";
import { useBankDataQuery } from "../services/bank/get-data-bank";
import { usePaymentClassQuery } from "../services/payment/post-payment-user";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const DetailPembayaran = () => {
  const style = { color: "#ffff" };

  const [metode, setMetode] = useState(true);
  const handleRadioChange = (e) => {
    const value = e.target.value === 'transfer';
    setMetode(value);

    setPaymentMethod(value ? 'Transfer' : 'Credit Card');
    
  };

  
  const [open, setOpen] = useState(false);

  const handleBayar = () => {
    window.location.href = "/sukses-pembayaran";
  };

  const handleSimpan = () => {
    //untuk post payment
    setOpen(false);
  };

  const { data: dataBank } = useBankDataQuery();
  const [Bank, setBank] = useState([]);
  const { classCode } = useParams();
   

  const [selectedBank, setSelectedBank] = useState(null);
  const [namaRekening, setNamaRekening] = useState('');
  const [noRekening, setNoRekening] = useState('');
  const handleBankChange = (value) => {
    setSelectedBank(value);

    const selectedBankData = Bank.find((bank) => bank.id === parseInt(value, 10));
    console.log(selectedBankData, "ini valuenya")

  // Jika data bank ditemukan, atur nama rekening sesuai dengan rekeningName
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

  const [paymentMethod, setPaymentMethod] = useState('Transfer');
  const [bankId, setBankId] = useState();
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState('');

  const { mutate: dataPayment, status, isSuccess, isError, error } = usePaymentClassQuery();

  const handleInput = (e) => {
    if (e) {
      
      if (e.target.id === "cardName") {
        setCardName(e.target.value);
      }
    }
  };

  useEffect(() => {
    // handlePaymentClass(classCode);
    if (isError) {
      message.error(error.response.data.message);
    }
    if (isSuccess) {
      toast.success("Anda Berhasil Melakukan Pembelian kelas");
      setTimeout(() => {
        window.location.href = '/sukses-pembayaran';
      }, 1000);
    }
  }, [status]);


  const handlePaymentClass = async () => {
    console.log(classCode, "ini kode nya")
    if (!paymentMethod && !cardName && (!bankId || !cardNumber)) {
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

    const formData = new FormData();

    formData.append("paymentMethod", paymentMethod);
    formData.append("bankId", cardName);
    formData.append("cardName", cardName);

    try {
      dataPayment(classCode, formData);
    } catch (error) {
      return null;
    }
  };


  useEffect(()=>{
        setBank(dataBank);
        
          {console.log("ini yang di ambil : ", paymentMethod)}
          
    }, [dataBank, namaRekening])
  return (
    <div>
      <Navbar />
      {/* Kembali */}
      <div className="pt-[6rem] h-[4rem] md:h-[80px] flex flex-col gap-3 items-center shadow-lg">
        <div className="w-[90%] mt-5 md:mt-7">
          <a
            href="/"
            className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1" />
            Kembali Ke Beranda
          </a>
        </div>
      </div>
      {/* Modals */}
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
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
                      id="namaKartuKredit"
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Jika memilih Bank Transfer diisi (-)"
                      value="tes"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold text-sm">No Kartu Kredit</label>
                    <Input
                      id="noKartuKredit"
                      className="border rounded-lg hover:border-purple-700"
                      type="text"
                      placeholder="Jika memilih Bank Transfer diisi (-)"
                      value="tes"
                      readOnly
                    />
                  </div>
                </>
              )}
            {console.log("ini yang di ambil : ", paymentMethod, cardName, bankId)}
            </div>
          
            <div className="flex gap-2 mt-4">
              <button className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2" onClick={handlePaymentClass}>
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {/* bagian bawah */}
      {/* desktop */}
      <div className="md:flex w-full hidden">
        <div className="px-[10rem] py-[1.5rem] flex flex-row justify-center gap-10 w-full">
          {/* card */}
    

    {/* batas */}
            <div className="flex flex-col w-1/3">
              <button className="border-purple-700 rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent">
                <label className="font-bold text-xl">Pembayaran Kelas</label>
                <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg">
                  <img src={img} placeholder="img" />
                  <div className="px-2 mt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-purple-700 font-bold mb-2">
                        UI/UX Design
                      </p>
                      <p className="text-xs flex justify-center items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                            fill="#F9CC00"
                          />
                        </svg>{" "}
                        4.7
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <label className="text-black font-bold">
                        Belajar Web Designer dengan figma
                      </label>
                      <label className="text-black text-sm font-medium mb-2">
                        by Simon Doe
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col"></div>
                  <div className="flex flex-col"></div>
                  <div className="flex flex-col"></div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div
                    className="bg-[#FF0000] w-full md:w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2.5rem] hover:bg-[#73CA5C]"
                    onClick={() => setOpen(true)}
                  >
                    Bayar dan Ikuti Kelas{" "}
                    <FontAwesomeIcon style={style} icon={faArrowCircleRight} />
                  </div>
                </div>
              </button>
            </div>
          
          {/* collapse */}
          
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden w-full">
        <div className="px-[1.5rem] md:px-[10rem] py-[1.5rem] flex flex-col md:flex-row md:gap-10 gap-2">
          {/* card */}
            <div className="flex flex-col md:w-1/3">
              <button className="border-purple-700 rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent">
                <label className="font-bold text-xl">Pembayaran Kelas</label>
                <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg">
                  <img src={img} placeholder="img" />
                  <div className="px-2 mt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-purple-700 font-bold mb-2">
                        UI/UX Design
                      </p>
                      <p className="text-xs flex justify-center items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                            fill="#F9CC00"
                          />
                        </svg>{" "}
                        4.7
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <label className="text-black font-bold">
                        Belajar Web Designer dengan figma
                      </label>
                      <label className="text-black text-sm font-medium mb-2">
                        by Simon Doe
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col"></div>
                  <div className="flex flex-col"></div>
                  <div className="flex flex-col"></div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div
                    className="bg-[#FF0000] w-full md:w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2.5rem] hover:bg-[#73CA5C]"
                    onClick={() => setOpen(true)}
                  >
                    Bayar dan Ikuti Kelas{" "}
                    <FontAwesomeIcon style={style} icon={faArrowCircleRight} />
                  </div>
                </div>
              </button>
            </div>
              
              {/* collapse */}
          
        </div>
      </div>
    </div>
  );
};
