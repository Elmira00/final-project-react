import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../features/CarSlice";
import CarList from "../components/CarList";
import Header from "../components/Header";
import carBackImage from '../assets/download.png';
import FilterSection from "../components/FilterSection";
export default function Home() {
  //const [currentcar, setCurrentcar] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cars.loading);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <>
      <Header></Header>
      <div
        style={{
          "background-image":
            `url(${carBackImage})`,
          "background-repeat": "repeat-y",
          "background-size": "cover",
          "background-attachment": "fixed",
        }}
        >
         {loading ? <p>Loading . . . </p> : <CarList></CarList>}
      </div>
    </>
  );
}
