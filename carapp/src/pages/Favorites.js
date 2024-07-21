import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import "./Favorites.css";

export default function Favorites() {
  const allCars = useSelector((state) => state.cars.cars);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [currentCars, setCurrentCars] = useState(allCars);
  useEffect(() => {
    const favoriteCars = Cookies.get('favoriteCars');
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
  useEffect(() => {
    const favoriteCarsIds = Cookies.get("favoriteCars");
    if (favoriteCarsIds) {
      const favoriteIds = JSON.parse(favoriteCarsIds);

      const favorites = allCars.filter((car) => favoriteIds.includes(car.id));
      setFavoriteCars(favorites);
    }
  }, [allCars]);

  const handleFavoriteClick = (carId) => {
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
  return (
    <div className="favorites-container">
      <h2>Favorite Cars</h2>
      {favoriteCars.length > 0 ? (
        <ul className="favorites-list">
          {favoriteCars.map((car) => (
            <li className="favorite-car" key={car.id}>
              <img className="car-img" src={car.images[0]} alt={car.model} />
              <div className="car-details">
                <p className="car-price">{car.price} AZN</p>
                <p className="car-vendor">
                  {car.vendor} <span>{car.model}</span>
                </p>
                <p className="car-year">
                  {car.year}, {car.engine}
                </p>
                <p className="car-city">{car.city}</p>
                <button
                  className={`favorite-btn ${car.isFavorite ? "active" : ""}`}
                  onClick={() => handleFavoriteClick(car.id)}
                >
                  {car.isFavorite ? (
                    <i class="fa-solid fa-heart-circle-minus"></i>
                  ) : (
                    <i class="fa-regular fa-heart"></i>
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite cars found.</p>
      )}
    </div>
  );
}
