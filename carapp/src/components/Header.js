import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


export default function Header() {

  function addNewCar(){

  }


  return (
    <header>
        <img style={{width:"100%"}} alt="headImg" src="https://servers1.adriver.ru/images/0010789/0010789293/0/s60desc.jpg"></img>
      <nav>
        <div className="left-side-bar">
          <ul className="my-ul">
            <li>
              <a className="header-a"
                target="_blank"
                href="https://tap.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*v3le3o*_ga*MjgwNDU1NDg3LjE3MjEzODk4ODc.*_ga_68B6PJZXYD*MTcyMTQ4NzY5OC41LjEuMTcyMTQ4Nzg4MS42MC4wLjA."
              >
                Tap.az
              </a>
            </li>
            <li>
              <a className="header-a"
                target="_blank"
                href="https://bina.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*1p52y8a*_ga*MjgwNDU1NDg3LjE3MjEzODk4ODc.*_ga_68B6PJZXYD*MTcyMTQ4NzY5OC41LjEuMTcyMTQ4Nzg4MS42MC4wLjA."
              >
                Bina.az
              </a>
            </li>
            <li>
              <a className="header-a"
                target="_blank"
                href="https://bina.az/?utm_source=turboaz&utm_medium=desktop-nav&utm_campaign=only-logo#_gl=1*1p52y8a*_ga*MjgwNDU1NDg3LjE3MjEzODk4ODc.*_ga_68B6PJZXYD*MTcyMTQ4NzY5OC41LjEuMTcyMTQ4Nzg4MS42MC4wLjA."
              >
                Boss.az
              </a>
            </li>
            
          </ul>
        </div>

        <div className="header-bar-right">
          <div>
            <span className="">Dəstək: </span>
            <span className="">
              <span>
                <a 
                  className="tel"
                  data-register-call="true"
                  href="tel:(012) 505-77-55"
                >
                  (012) 505-77-55
                </a>
              </span>
            </span>
          </div>
          <a className="header-a" href="/help">Help</a>
          <Link className="header-a" to="/favorites">
          <i class="fa-solid fa-heart"></i>Favorites
        </Link>
          
          <a className="header-a" href="#">
            <i class="fa-solid fa-circle-user"></i>
            Login
          </a>
        </div>
      </nav>
      <div className="header-top-nav">
       <h3>Turbo.az</h3>
       <a className="header-top-nav-a">All Ads</a>
           <Link className="header-new-btn" to="/autos/new">
          <button><i className="fa-solid fa-circle-plus"></i>New</button>
        </Link>
      </div>
    </header>
  );
}
