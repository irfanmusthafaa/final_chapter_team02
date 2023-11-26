import React from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import searchIcon from "../../assets/images/icon-search2.png";
import { Button } from 'antd'
import { Nav } from '../../assets/components/Nav';
import { NavPrimaryButton } from '../../assets/components/button/buttton_navigasi/ButtonNavPrimary';
import img from "../../assets/images/kursus.png";

export const TopikKelas = () => {
  return (
    <div className='bg-purple-100'>
        <Nav />
        {/* content */}
        <div className='flex flex-col h-screens items-center'>
            <div className='flex flex-col h-screens mt-[4%]'>
                <div className='flex items-center h-full'>
                    <div className='font-bold text-2xl'><p>Topik Kelas</p></div>
                    <div className='ms-auto'>
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Cari Kelas..."
                                className="bg-purple-100 border-purple-700 focus:bg-white focus:outline-none rounded-full px-4 w-[200px] h-[32px]"
                            />
                             <button className='absolute bg-transparent border-none -ms-[15%] inset-y-0 items-center'>
                                <div className='flex'>
                                    <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
                                </div>
                            </button>
                            
                        </div>
                         
                      
                    </div>
                    
                </div>
                <div className='flex flex-row h-[100%] gap-10 mt-[2%]'>
                    <div>
                        <FilterKelas/>
                    </div>
                    <div className=''>
                        
                        <div className='flex flex-row gap-5'>
                            <NavPrimaryButton button_text="ALL" className='px-10'/>
                            <NavPrimaryButton button_text="Kelas Premium" className='px-10'/>
                            <NavPrimaryButton button_text="Kelas Gratis"/>
                        
                        </div>
                        <div className='grid mt-[4%] grid-cols-2 gap-4'>
                            {/* content */}
                            <div className="flex flex-col bg-white border-2  rounded-3xl w-full">
                                <img src={img} placeholder="img" className='object-cover h-auto'/>
                                <div className="px-2 mt-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-purple-700 font-bold ">UI/UX Design</p>
                                        <p className="text-xs flex justify-center items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path
                                                d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                                                fill="#F9CC00"
                                            />
                                            </svg>{" "}
                                            4.7
                                        </p>
                                    </div>
                                    <p className="text-black font-bold mt-1">Belajar Web Designer dengan figma</p>
                                    <p className="text-black text-sm mt-1">By Angela Doe</p>
                                    <div className="flex gap-5 text-xs mt-1">
                                        <div className="flex justify-center items-center gap-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path
                                                d="M10.5 5.5C10.5 8.275 8.58 10.87 6 11.5C3.42 10.87 1.5 8.275 1.5 5.5V2.5L6 0.5L10.5 2.5V5.5ZM6 10.5C7.875 10 9.5 7.77 9.5 5.61V3.15L6 1.59L2.5 3.15V5.61C2.5 7.77 4.125 10 6 10.5ZM7.525 8L5.985 7.075L4.45 8L4.855 6.25L3.5 5.08L5.29 4.925L5.985 3.275L6.685 4.92L8.475 5.075L7.115 6.25L7.525 8Z"
                                                fill="#73CA5C"
                                            />
                                            </svg>
                                            <p className="font-semibold text-purple-900">Intermediate Level</p>
                                        </div>
                                        <div className="flex justify-center items-center gap-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clipPath="url(#clip0_76_2206)">
                                                <path d="M3.33337 1.7334H9.33337V2.25007H3.33337V1.7334Z" fill="#73CA5C" />
                                                <path
                                                d="M9.66664 2.66675H3.28664C3.20158 2.66554 3.11764 2.64712 3.03988 2.61259C2.96213 2.57806 2.89218 2.52815 2.83424 2.46585C2.7763 2.40355 2.73159 2.33017 2.70278 2.25012C2.67398 2.17007 2.66168 2.08501 2.66664 2.00008C2.66623 1.83107 2.73003 1.6682 2.84513 1.54444C2.96023 1.42067 3.11804 1.34525 3.28664 1.33341H9.66664C9.75505 1.33341 9.83983 1.2983 9.90235 1.23578C9.96486 1.17327 9.99998 1.08849 9.99998 1.00008C9.99998 0.911676 9.96486 0.826891 9.90235 0.764379C9.83983 0.701867 9.75505 0.666748 9.66664 0.666748H3.28664C2.94117 0.678847 2.6139 0.824646 2.37386 1.0734C2.13382 1.32214 1.99977 1.6544 1.99998 2.00008C1.99675 2.05448 1.99675 2.10902 1.99998 2.16341C1.99677 2.18998 1.99677 2.21684 1.99998 2.24341V10.0001C1.99977 10.3458 2.13382 10.678 2.37386 10.9268C2.6139 11.1755 2.94117 11.3213 3.28664 11.3334H9.66664C9.75505 11.3334 9.83983 11.2983 9.90235 11.2358C9.96486 11.1733 9.99998 11.0885 9.99998 11.0001V3.02341C10.0002 2.93273 9.96581 2.84537 9.90389 2.77912C9.84197 2.71286 9.75714 2.67268 9.66664 2.66675ZM9.33331 10.6667H3.28664C3.11804 10.6549 2.96023 10.5795 2.84513 10.4557C2.73003 10.332 2.66623 10.1691 2.66664 10.0001V3.18341C2.85617 3.28797 3.07028 3.33977 3.28664 3.33341H9.33331V10.6667Z"
                                                fill="#73CA5C"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_76_2206">
                                                <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                            </svg>
                                            <p className="font-semibold">10 Modul</p>
                                        </div>
                                        <div className="flex justify-center items-center gap-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path
                                                d="M6.99996 12.8334C3.77821 12.8334 1.16663 10.2218 1.16663 7.00008C1.16663 3.77833 3.77821 1.16675 6.99996 1.16675C10.2217 1.16675 12.8333 3.77833 12.8333 7.00008C12.8333 10.2218 10.2217 12.8334 6.99996 12.8334ZM7.58329 7.00008V4.08342H6.41663V8.16675H9.91663V7.00008H7.58329Z"
                                                fill="#73CA5C"
                                            />
                                            </svg>
                                            <p className="font-semibold">120 Menit</p>
                                        </div>
                                    </div>
                                    <div>
                                        {/* garis persentasase */}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col bg-white border-2  rounded-3xl w-full">
                                <img src={img} placeholder="img" className='object-cover h-auto'/>
                                <div className="px-2 mt-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-purple-700 font-bold ">UI/UX Design</p>
                                        <p className="text-xs flex justify-center items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path
                                                d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                                                fill="#F9CC00"
                                            />
                                            </svg>{" "}
                                            4.7
                                        </p>
                                    </div>
                                    <p className="text-black font-bold mt-1">Belajar Web Designer dengan figma</p>
                                    <p className="text-black text-sm mt-1">By Angela Doe</p>
                                    <div className="flex gap-5 text-xs mt-1">
                                        <div className="flex justify-center items-center gap-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path
                                                d="M10.5 5.5C10.5 8.275 8.58 10.87 6 11.5C3.42 10.87 1.5 8.275 1.5 5.5V2.5L6 0.5L10.5 2.5V5.5ZM6 10.5C7.875 10 9.5 7.77 9.5 5.61V3.15L6 1.59L2.5 3.15V5.61C2.5 7.77 4.125 10 6 10.5ZM7.525 8L5.985 7.075L4.45 8L4.855 6.25L3.5 5.08L5.29 4.925L5.985 3.275L6.685 4.92L8.475 5.075L7.115 6.25L7.525 8Z"
                                                fill="#73CA5C"
                                            />
                                            </svg>
                                            <p className="font-semibold text-purple-900">Intermediate Level</p>
                                        </div>
                                        <div className="flex justify-center items-center gap-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clipPath="url(#clip0_76_2206)">
                                                <path d="M3.33337 1.7334H9.33337V2.25007H3.33337V1.7334Z" fill="#73CA5C" />
                                                <path
                                                d="M9.66664 2.66675H3.28664C3.20158 2.66554 3.11764 2.64712 3.03988 2.61259C2.96213 2.57806 2.89218 2.52815 2.83424 2.46585C2.7763 2.40355 2.73159 2.33017 2.70278 2.25012C2.67398 2.17007 2.66168 2.08501 2.66664 2.00008C2.66623 1.83107 2.73003 1.6682 2.84513 1.54444C2.96023 1.42067 3.11804 1.34525 3.28664 1.33341H9.66664C9.75505 1.33341 9.83983 1.2983 9.90235 1.23578C9.96486 1.17327 9.99998 1.08849 9.99998 1.00008C9.99998 0.911676 9.96486 0.826891 9.90235 0.764379C9.83983 0.701867 9.75505 0.666748 9.66664 0.666748H3.28664C2.94117 0.678847 2.6139 0.824646 2.37386 1.0734C2.13382 1.32214 1.99977 1.6544 1.99998 2.00008C1.99675 2.05448 1.99675 2.10902 1.99998 2.16341C1.99677 2.18998 1.99677 2.21684 1.99998 2.24341V10.0001C1.99977 10.3458 2.13382 10.678 2.37386 10.9268C2.6139 11.1755 2.94117 11.3213 3.28664 11.3334H9.66664C9.75505 11.3334 9.83983 11.2983 9.90235 11.2358C9.96486 11.1733 9.99998 11.0885 9.99998 11.0001V3.02341C10.0002 2.93273 9.96581 2.84537 9.90389 2.77912C9.84197 2.71286 9.75714 2.67268 9.66664 2.66675ZM9.33331 10.6667H3.28664C3.11804 10.6549 2.96023 10.5795 2.84513 10.4557C2.73003 10.332 2.66623 10.1691 2.66664 10.0001V3.18341C2.85617 3.28797 3.07028 3.33977 3.28664 3.33341H9.33331V10.6667Z"
                                                fill="#73CA5C"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_76_2206">
                                                <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                            </svg>
                                            <p className="font-semibold">10 Modul</p>
                                        </div>
                                        <div className="flex justify-center items-center gap-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path
                                                d="M6.99996 12.8334C3.77821 12.8334 1.16663 10.2218 1.16663 7.00008C1.16663 3.77833 3.77821 1.16675 6.99996 1.16675C10.2217 1.16675 12.8333 3.77833 12.8333 7.00008C12.8333 10.2218 10.2217 12.8334 6.99996 12.8334ZM7.58329 7.00008V4.08342H6.41663V8.16675H9.91663V7.00008H7.58329Z"
                                                fill="#73CA5C"
                                            />
                                            </svg>
                                            <p className="font-semibold">120 Menit</p>
                                        </div>
                                    </div>
                                    <div>
                                        {/* garis persentasase */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
