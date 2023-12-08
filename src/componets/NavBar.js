
import React from "react";

 export function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                    <img src="https://i.pinimg.com/564x/70/38/13/703813498273ee6b873790a497037519.jpg" alt="" width="100" height="75" className="d-inline-block align-text-top" style={{ backgroundColor: 'white' }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CHI SIAMO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PARCO AUTO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTATTACI</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}