import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Checkbox } from "antd";

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
      formatKategori = Kategori.join("-");
    } else {
      formatKategori = Kategori;
    }

    if (Array.isArray(Level)) {
      formatLevel = Level.join("-");
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
    <div className="md:w-[17rem] md:h-[39.5rem] bg-[#ffff] md:p-5 rounded-lg shadow-sm">
      <div className="pt-0 mt-0">
        <h1 className="md:hidden mb-1 text-purple-700">Filter</h1>
        <h3 className="mx-0 my-2 mt-0 hidden md:flex">Filter</h3>
        <ul className="list-none m-0 p-0">
          <li>
            <Checkbox onChange={handleCheckboxLatest} checked={Latest}>
              <label className="text-lg font-semibold">Paling Baru</label>
            </Checkbox>
            {/* {console.log(Filter, "ini filter ")} */}
          </li>
          <li>
            <Checkbox onChange={handleCheckboxPopular} checked={Popular}>
              <label className="text-lg font-semibold">Paling Populer</label>
            </Checkbox>
          </li>
          <li>
            <Checkbox onChange={handleCheckboxPromo} checked={Promo}>
              <label className="text-lg font-semibold">Promo</label>
            </Checkbox>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="md:hidden mb-1 text-purple-700">Kategori</h1>
        <h3 className="md:flex mx-0 my-2 hidden">Kategori</h3>
        <ul className="list-none m-0 p-0">
          {Array.isArray(props.category) ? (
            props.category.map((item) => (
              <li key={item.id}>
                <Checkbox value={item.id} onChange={handleCheckboxKategori} checked={Kategori.includes(item.id)}>
                  <label className="text-lg font-semibold">{item.categoryName}</label>
                </Checkbox>
              </li>
            ))
          ) : (
            <p className="text-sm">loading...</p>
          )}
        </ul>
      </div>
      <div>
        <h1 className="md:hidden mb-1 text-purple-700">Level Kesulitan</h1>
        <h3 className="mx-0 my-2 hidden md:flex">Level Kesulitan</h3>
        <ul className="list-none m-0 p-0">
          <li>
            <Checkbox value="" onChange={() => setLevel("")} checked={Level === ""}>
              <label className="text-lg font-semibold">Semua Level</label>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="Beginner" onChange={handleCheckboxLevel} checked={Level.includes("Beginner")}>
              <label className="text-lg font-semibold">Beginner Level</label>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="Intermediate" onChange={handleCheckboxLevel} checked={Level.includes("Intermediate")}>
              <label className="text-lg font-semibold">Intermediate Level</label>
            </Checkbox>
          </li>
          <li>
            <Checkbox value="Advanced" onChange={handleCheckboxLevel} checked={Level.includes("Advanced")}>
              <label className="text-lg font-semibold">Advanced Level</label>
            </Checkbox>
          </li>
        </ul>
      </div>
      <Button className="mt-3 bg-purple-700 text-white font-bold text-xl h-fit hover:bg-red-600" type="danger" onClick={handleResetFilters}>
        Hapus Filter
      </Button>
    </div>
  );
};
