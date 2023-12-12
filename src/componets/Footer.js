import React from "react";
import "./Footer.css"

export function Footer() {
    return (
            <footer className="footer" style={{backgroundColor: "black"}}>
                <div className="container">
                    <section>
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">HOME</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">CHI SIAMO</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">PARCO AUTO</a>
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
                        className="text-center p-3"
                        style={{background: "rgba(0, 0, 0, 0.2)"}}>
                        © 2020 Copyright
                    </div>
                </div>
            </footer>


    )
}