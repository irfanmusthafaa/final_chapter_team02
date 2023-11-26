import React from 'react'
import { useState } from 'react';
import { Button, Checkbox } from 'antd';


export const FilterKelas = () => {

      const [filterStatus, setFilterStatus] = useState({
    palingBaru: false,
    palingPopular: false,
    promo: false,
    uiUxDesign: false,
    webDevelopment: false,
    androidDevelopment: false,
    dataScience: false,
    businessIntelligence: false,
    semuaLevel: false,
    beginnerLevel: false,
    intermediateLevel: false,
    advancedLevel: false,
  });

  const handleCheckboxChange = (filter) => {
    setFilterStatus((prevStatus) => ({
      ...prevStatus,
      [filter]: !prevStatus[filter],
    }));
  };

  const handleClearFilters = () => {
    setFilterStatus({
      palingBaru: false,
      palingPopular: false,
      promo: false,
      uiUxDesign: false,
      webDevelopment: false,
      androidDevelopment: false,
      dataScience: false,
      businessIntelligence: false,
      semuaLevel: false,
      beginnerLevel: false,
      intermediateLevel: false,
      advancedLevel: false,
    });
  };

  
//     const onChange = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };




  return (
    <div className='w-[17rem] h-[39.5rem] bg-[#ffff] p-5 rounded-lg shadow-sm'>

          <div className='pt-0 mt-0'>
            <h4 className="mx-0 my-2 mt-0">Filter</h4>
            <ul className="list-none m-0 p-0">
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('palingBaru')} checked={filterStatus.palingBaru}>
                    Paling Baru
                    </Checkbox>
                </li>
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('palingPopular')} checked={filterStatus.palingPopular}>
                    Paling Popular
                    </Checkbox>
                </li>
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('promo')} checked={filterStatus.promo}>
                    Promo
                    </Checkbox>
                </li>
                
            </ul>
          </div>
          <div>
            <h4 className="mx-0 my-2">Kategori</h4>
            <ul className="list-none m-0 p-0">
              <li>
                <Checkbox onChange={() => handleCheckboxChange('uiUXDesain')} checked={filterStatus.uiUXDesain}>UI/UX Design</Checkbox>
              </li>
              <li>
                <Checkbox onChange={() => handleCheckboxChange('webDevelopment')} checked={filterStatus.webDevelopment}>WEB Development</Checkbox>
              </li>
              <li>
                <Checkbox onChange={() => handleCheckboxChange('androidDevelopment')} checked={filterStatus.androidDevelopment} >Android Development</Checkbox>
              </li>
              <li>
                <Checkbox onChange={() => handleCheckboxChange('dataScience')} checked={filterStatus.dataScience}>Data Science</Checkbox>
              </li>
              <li>
                <Checkbox onChange={() => handleCheckboxChange('businesIntelligence')} checked={filterStatus.businesIntelligence}>Business Intelligence</Checkbox>
              </li>
              
            </ul>
          </div>
          <div>
            <h4 className="mx-0 my-2">Level Kesulitan</h4>
            <ul className="list-none m-0 p-0">
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('semuaLevel')} checked={filterStatus.semuaLevel} >Semua Level</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('beginderLevel')} checked={filterStatus.beginderLevel} >Beginder Level</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('intermediateLevel')} checked={filterStatus.intermediateLevel} >Intermediate Level</Checkbox>
                </li>
                <li>
                    <Checkbox onChange={() => handleCheckboxChange('advanceLevel')} checked={filterStatus.advanceLevel} >Advanced Level</Checkbox>
                </li>
              
            </ul>

        </div>

        <Button className='mt-8 text-red-600' type="danger"  onClick={handleClearFilters}>
          Hapus Filter
        </Button>
    </div>
  )
}

