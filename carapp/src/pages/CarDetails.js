import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./CarDetails.css";
import ImageSlider from './ImageSlider';
export default function CarDetails() {
  const { id } = useParams();
  const car = useSelector((state) =>
    state.cars.cars.find((car) => car.id === (id))
  );

  if (!car) {
    return <p>Car not found</p>;
  }
  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <div className='main-div'>
    <div className='car-details-div' style={{}}>
      <section>
      <h2>{capitalize(car.vendor)} { capitalize(car.model)}</h2>
      <ImageSlider images={car.images} />
      <section className='sub-sec'>
      <div>
      <p>Price: {car.price} AZN</p>
      <p>Year: {car.year}</p>
      <p>Engine: {car.engine}</p>
      <p>City: {car.city}</p>
      </div>
      <div>
      <p>Mileage: {car.mileage}</p>
      <p>New: {car.new?"yes":"no"}</p>
      <p>Location: </p><p>{car.location}</p>
      </div></section>
      </section>
      <section className='right-side'>
      <h2>{car.price} AZN</h2>
      <span>% Kredit</span>
      <span>Barter</span>
      <p style={{"marginLeft":"5px"}}>{car.city}</p>
      <button>Call:{car.tel}</button>
      
      </section>
    </div>
    </div>
  );
}
