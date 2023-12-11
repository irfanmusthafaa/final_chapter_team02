import React from 'react'
import { useState } from 'react';
import { Button, Checkbox } from 'antd';


export const FilterKelas = (props) => {

     
  const [Filter, setFilter]= useState('');
  const [Kategori, setKategori]= useState('');
  const [Level, setLevel]= useState('belum di check');

  const handleCheckboxKategori = (event) => {
    const value = event.target.value;
    if (Kategori.includes(value)) {
      setKategori(Kategori.filter((item) => item !== value));
    } else {
      setKategori([...Kategori, value]);
    }
  };

  const handleCheckboxLevel = (event) => {
    const value = event.target.value;
    if (Level.includes(value)) {
      setLevel(Level.filter((item) => item !== value));
    } else {
      setLevel([...Level, value]);
    }
  };
  


// console.log(props.category,"ini categori");




  return (
    <div className='w-[17rem] h-[39.5rem] bg-[#ffff] p-5 rounded-lg shadow-sm'>

          <div className='pt-0 mt-0'>
            <h4 className="mx-0 my-2 mt-0">Filter</h4>
            <ul className="list-none m-0 p-0">
                <li>
                 
                  <Checkbox
                    onChange={() =>  setFilter('paling_baru')}
                    checked={Filter === 'paling_baru'}
                  >
                    Paling Baru
                  </Checkbox>
                   {console.log(Filter, "tes state filter ")}
                </li>
                <li>
                    <Checkbox
                      onChange={() =>  setFilter('paling_popular')}
                      checked={Filter === 'paling_popular'}
                    >
                    Paling Popular
                    </Checkbox>
                </li>
                <li>
                    <Checkbox
                      onChange={() =>  setFilter('promo')}
                      checked={Filter === 'promo'}
                    >
                    Promo
                    </Checkbox>
                </li>
                
            </ul>
          </div>
          <div>
            <h4 className="mx-0 my-2">Kategori</h4>
            <ul className="list-none m-0 p-0">
              {Array.isArray(props.category) ? (
                props.category.map(item => (
                  <li key={item.id}>
                    <Checkbox 
                      value={item.id}
                      onChange={handleCheckboxKategori}
                      //  checked={filter.includes('paling_baru')}
                      checked={Kategori.includes(item.id)}
                    >
                      {item.categoryName}
                    </Checkbox>
                  </li>
                ))
              ) : (
                <p className='text-sm'>loading...</p>
              )}
              {console.log(Kategori, "ini kategori ")}
            </ul>
          </div>
          <div>
            <h4 className="mx-0 my-2">Level Kesulitan</h4>
            <ul className="list-none m-0 p-0">
                <li>
                    <Checkbox 
                      value=''
                      onChange={() =>  setLevel('')}
                      checked={Level === ''}
                    >Semua Level</Checkbox>
                </li>
                <li>
                    <Checkbox
                      value='BeginderLevel' 
                      onChange={handleCheckboxLevel}
                      checked={Level.includes('BeginderLevel')}
                    >Beginder Level</Checkbox>
                </li>
                <li>
                    <Checkbox
                      value='IntermediateLevel' 
                      onChange={handleCheckboxLevel}
                      checked={Level.includes('IntermediateLevel')}
                    >Intermediate Level</Checkbox>
                </li>
                <li>
                    <Checkbox 
                      value='AdvancedLevel' 
                      onChange={handleCheckboxLevel}
                      checked={Level.includes('AdvancedLevel')}
                    >Advanced Level</Checkbox>
                </li>
              {console.log(Level, "ini level ")}
            </ul>

        </div>

        <Button className='mt-8 text-red-600' type="danger" >
          Hapus Filter
        </Button>
    </div>
  )
}

