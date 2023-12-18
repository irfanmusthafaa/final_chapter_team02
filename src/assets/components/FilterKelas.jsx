import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Checkbox } from 'antd';


export const FilterKelas = (props) => {

  const [Kategori, setKategori] = useState(props.kategori);
  const [Level, setLevel] = useState(props.level);
  const [Latest, setLatest] = useState(props.latest);
  const [Popular, setPopular] = useState(props.popular);
  const [Promo, setPromo] = useState(props.promo);

  useEffect(() => {
    let formatKategori;
    let formatLevel;
   
    if (Array.isArray(Kategori)) {
      formatKategori = Kategori.join('-');
    } else {
      formatKategori = Kategori;
    }

    if (Array.isArray(Level)) {
      formatLevel = Level.join('-');
    } else {
      formatLevel = Level;
    }

    props.setKategori(formatKategori);
    props.setLevel(formatLevel);
    props.setLatest(Latest);
    props.setPopular(Popular);
    props.setPromo(Promo);
    
  }, [Kategori, Level, Latest, Popular, Promo]);
  

  const handleCheckboxKategori = (event) => {
    const value = event.target.value;
    console.log(Kategori, "ini kategori dari dalam component");
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

  const handleCheckboxLatest = () => {
    setLatest((prevLatest) => !prevLatest);
    if (!Latest) {
      setPopular(null);
    }
  };

  const handleCheckboxPopular = () => {
    setPopular((prevPopular) => !prevPopular);
    if (!Popular) {
      setLatest(null);
    }
  };
  const handleCheckboxPromo = () => {
    setPromo((prevPromo) => (prevPromo ? null : true));
  };
  
  const handleResetFilters = () => {
    setKategori([]);
    setLevel([]);
    setLatest(null);
    setPopular(null);
    setPromo(null);
  };
  

  return (
    <div className='w-[17rem] h-[39.5rem] bg-[#ffff] p-5 rounded-lg shadow-sm'>

          <div className='pt-0 mt-0'>
            <h4 className="mx-0 my-2 mt-0">Filter</h4>
            <ul className="list-none m-0 p-0">
                <li>
                  <Checkbox
                    onChange={handleCheckboxLatest}
                    checked={Latest}
                  >
                    Paling Baru
                  </Checkbox>
                   {/* {console.log(Filter, "ini filter ")} */}
                </li>
                <li>
                    <Checkbox
                      onChange={handleCheckboxPopular}
                      checked={Popular}
                    >
                    Paling Popular
                    </Checkbox>
                </li>
                <li>
                    <Checkbox
                      onChange={handleCheckboxPromo}
                      checked={Promo}
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
                      checked={Kategori.includes(item.id)}
                    >
                      {item.categoryName}
                    </Checkbox>
                  </li>
                ))
              ) : (
                <p className='text-sm'>loading...</p>
              )}
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
            </ul>

        </div>

        <Button className='mt-8 text-red-600' type="danger" onClick={handleResetFilters}>
          Hapus Filter
        </Button>
    </div>
  )
}

