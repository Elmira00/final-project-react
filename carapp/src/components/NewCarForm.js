// NewCarForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../features/CarSlice'; 
import "./NewCarForm.css";
export default function NewCarForm() {
  const [car, setCar] = useState({
    vendor: '',
    model: '',
    price: '',
    year: '',
    engine: '',
    city: '',
    images: [''] 
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar(car)); 
    navigate('/'); 
  };

  return (
    <form className='new-car-form' onSubmit={handleSubmit}>
        <div>
      <input type="text" name="vendor" value={car.vendor} onChange={handleChange} placeholder="Vendor" required />
      <input type="text" name="model" value={car.model} onChange={handleChange} placeholder="Model" required />
      <input type="text" name="price" value={car.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="year" value={car.year} onChange={handleChange} placeholder="Year" required />
      <input type="text" name="engine" value={car.engine} onChange={handleChange} placeholder="Engine" required />
      <input type="text" name="city" value={car.city} onChange={handleChange} placeholder="City" required />
      </div>
      <div>
        <h1 style={{marginLeft:"20px"}}>Images</h1>
      <input type="text" name="images" value={car.images[0]} onChange={handleChange} placeholder="Image front" required />
      <input type="text" name="images" value={car.images[1]} onChange={handleChange} placeholder="Image side" required />
      <input type="text" name="images" value={car.images[2]} onChange={handleChange} placeholder="Image back" required />
      <input type="text" name="images" value={car.images[3]} onChange={handleChange} placeholder="Image salon" required />
      <button type="submit">Add Car</button></div>
    </form>
  );
}
