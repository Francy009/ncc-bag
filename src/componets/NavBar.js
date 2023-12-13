
import React from "react";
import {Link} from "react-router-dom";

export function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-black bg-black"  >
            <div className="container-fluid">
                    <img src="https://i.pinimg.com/564x/70/38/13/703813498273ee6b873790a497037519.jpg" alt="" width="100" height="75" className="d-inline-block align-text-top" style={{ backgroundColor: 'white' }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <Link to="/" className="nav-link active text-white" aria-current="page" href="#"  style={{ fontFamily:  "fantasy"}}  >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" style={{ fontFamily:  "fantasy"}} >CHI SIAMO</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/parco-auto" className="nav-link text-white" href="#" style={{ fontFamily:  "fantasy"}}>PARCO AUTO</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" style={{ fontFamily:  "fantasy"}}>CONTATTACI</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
