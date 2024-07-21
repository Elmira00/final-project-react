import React, { useRef } from "react";
import "./FilterSection.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCars } from "../features/CarSlice";

export default function FilterSection({setCurrentCars}) {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const [vendors, setVendors] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const filter= useRef("all"); 
  const filterPriceMin = useRef(0);
  const filterPriceMax = useRef(1000000);
  const filterYearMin=useRef("2000");
  const filterYearMax=useRef("2024");

  useEffect(() => {
    if (cars.length > 0) {
      const uniqueVendors = [...new Set(cars.map((car) => car.vendor))];
      setVendors(uniqueVendors);
    }
  }, []);

  useEffect(() => {
    if (selectedVendor) {
      const filteredModels = cars
        .filter((car) => car.vendor === selectedVendor)
        .map((car) => car.model);
      setModels([...new Set(filteredModels)]);
    } else {
      setModels([]);
    }
  }, [selectedVendor, cars]);

  const handleVendorChange = (e) => {
    setSelectedVendor(e.target.value);
    setSelectedModel(""); 
  };
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };
  const handleFilterChange = (newFilter) => {
    filter.current=(newFilter);
  };
   const handleFilterPriceMaxChange = (e) => {
    filterPriceMax.current=(Number(e.target.value));
  };

  const handleFilterPriceMinChange = (e) => {
    filterPriceMin.current=(Number(e.target.value));
  };

  const handleFilterYearMinChange = (e) => {
    filterYearMin.current=((e.target.value));
  };

  const handleFilterYearMaxChange = (e) => {
    filterYearMax.current=((e.target.value));
  };


  

const handleSubmit=(e)=>{
    e.preventDefault();
    const filteredCars = cars.filter((car) => {
        if (selectedVendor && car.vendor !== selectedVendor) return false;
        if (selectedModel && car.model !== selectedModel) return false;
        if (filter.current === "new" && !car.new) return false;
        if (filter.current === "driven" && car.new) return false;
        if (new Date(car.year).getFullYear() < filterYearMin.current || new Date(car.year).getFullYear() > filterYearMax.current) return false;
        if (Number(car.price) < filterPriceMin.current|| Number(car.price)  > filterPriceMax.current) return false;
        return true;
      });
    setCurrentCars(filteredCars);
}
  return (
    <form onSubmit={handleSubmit}>
      <select
        name="vendors"
        id="vendors"
        value={selectedVendor}
        onChange={handleVendorChange}
      >
        <option value="">vendor</option>
        {vendors.map((vendor) => (
          <option key={vendor} value={vendor}>
            {vendor}
          </option>
        ))}
      </select>
      <select
        name="models"
        id="models"
        value={selectedModel}
        onChange={handleModelChange}
      >
        <option value="">Select a model</option>
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
      <button
        onClick={() => handleFilterChange("all")}
        className="type-all-new-drive"
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange("new")}
        className="type-all-new-drive"
      >
        New
      </button>
      <button
        onClick={() => handleFilterChange("driven")}
        className="type-all-new-drive"
      >
        Driven
      </button>
      <div className="price-div">
        <input
          type="number"
          min="0"
          name="minPrice"
          placeholder="Price,min"
          onChange={handleFilterPriceMinChange}
        ></input>
        <input
          type="number"
          min="0"
          name="maxPrice"
          placeholder="max"
          onChange={handleFilterPriceMaxChange}
        ></input>
      </div>
      <div className="year-div">
        <input
          name="minYear"
          placeholder="Year,min"
          onChange={handleFilterYearMinChange}
        ></input>
        <input
          name="maxYear"
          placeholder="max"
          onChange={handleFilterYearMaxChange}
        ></input>
      </div>
      <button id="submit-btn"  type="submit" >Search</button>
    </form>
  );
}
