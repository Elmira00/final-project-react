import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CarList.css";
import FilterSection from "./FilterSection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarDetails from "../pages/CarDetails";
import Cookies from "js-cookie";

export default function CarList() {
  const cars = useSelector((state) => state.cars.cars);
  const navigate = useNavigate();
  const [currentCars, setCurrentCars] = useState(cars);

  useEffect(() => {
    const favoriteCars = Cookies.get("favoriteCars");
    if (favoriteCars) {
      const favoriteIds = JSON.parse(favoriteCars);
      setCurrentCars((prevCars) =>
        prevCars.map((car) => ({
          ...car,
          isFavorite: favoriteIds.includes(car.id),
        }))
      );
    }
  }, []);

  const handleFavoriteClick = (e, carId) => {
    e.stopPropagation();
    let favoriteIds = Cookies.get("favoriteCars");
    favoriteIds = favoriteIds ? JSON.parse(favoriteIds) : [];

    if (favoriteIds.includes(carId)) {
      favoriteIds = favoriteIds.filter((id) => id !== carId);
    } else {
      favoriteIds.push(carId);
    }

    Cookies.set("favoriteCars", JSON.stringify(favoriteIds), { expires: 1 });

    setCurrentCars((prevCars) =>
      prevCars.map((car) =>
        car.id === carId ? { ...car, isFavorite: !car.isFavorite } : car
      )
    );
  };

  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const handleCarClick = (id) => {
    navigate(`/cars/${id}`);

    <CarDetails></CarDetails>;
    console.log("navigate");
  };
  return (
    <ul className="car-ul">
      <FilterSection setCurrentCars={setCurrentCars}></FilterSection>
      <h2 style={{ margin: "0px 0px 0px 2%" }}>Premium Ads</h2>
      {currentCars.map((car) => (
        <li
          className="car-card"
          key={car.id}
          onClick={() => handleCarClick(car.id)}
        >
          <img className="car-img" src={car.images[0]} alt="carImg"></img>
          <p className="car-price">{car.price} AZN</p>
          <button
            className={`favorite-btn ${car.isFavorite ? "active" : ""}`}
            onClick={(event) => handleFavoriteClick(event, car.id)}
          >
            {car.isFavorite ? (
              <i class="fa-solid fa-heart-circle-minus"></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </button>
          <p className="car-vendor">
            {capitalize(car.vendor)} <span>{capitalize(car.model)}</span>
          </p>
          <p className="car-year">
            {car.year},{car.engine}
          </p>
          <p className="car-city">{car.city},today 9:00</p>
        </li>
      ))}
    </ul>
  );
}
