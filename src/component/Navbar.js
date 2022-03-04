import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container-fluid">
      

      <nav className="navbar navbar-inverse">
        <h1 className='nav-title'>Luckoo</h1>
        <input
          className="search-bar"
          type="search"
          placeholder="Search Luckoo ..."
        />
        <ul className="d-flex nav justify-content-evenly text-secondary">
          <li className="p-2">Luckoo Market</li>
          <li className="p-2">Achievment</li>
          <li className="p-2">Hall of Fame</li>
          <li className="p-2">Luckoo</li>
        </ul>
        <span className="text-white rounded-pill p-2 lko-currency">$1 = 450M LKO</span>
          <ul className="nav d-flex justify-content-evenly">
            <li className="mx-2 rounded-pill button-nav"><img src="https://www.mainewomensnetwork.com/Resources/Pictures/vicki%20aqua%20headshot-smallmwn.jpg" className="rounded-circle" width="40" height="40" alt="avatar" /> 
            <span className="m-2">Hi!</span>
            </li>

            <li className="p-2 mx-2 rounded-circle button-nav"><svg xmlns="http://www.w3.org/2000/svg" className="m-1" width="20" height="20" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg></li>

            <li className="p-2 mx-2 button-nav rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" className="m-1" width="20" height="20" viewBox="0 0 512 512"><path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"/></svg></li>
          </ul>
      </nav>  
    </div>
  );
}
