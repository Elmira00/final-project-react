import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import CarList from "./components/CarList";
import NewCarForm from "./components/NewCarForm";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div >
      <Provider store={store}>
      <Router>
        
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/help" element={<Home />}></Route>
          <Route exact path="/cars" element={<CarList />}></Route>
          <Route exact path="/cars/:id" element={<CarDetails />}></Route>
          <Route exact path="*" element={<Home />}></Route>
          <Route path="/autos/new" element={<NewCarForm />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
