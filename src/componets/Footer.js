import React from "react";
import "./Footer.css"
import {Link} from "react-router-dom";


export function Footer() {
    return (
            <footer className="footer" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                <div className="container">
                    <section>
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link to="/" className="text-white">HOME</Link>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">CHI SIAMO</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link to="/parco-auto" className="text-white">PARCO AUTO</Link>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">CONTATTACI</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-3">
                        © 2020 Copyright
                    </div>
                </div>
            </footer>


    )
}