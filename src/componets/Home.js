import React from "react";
import './Home.css';

export function Home() {
    return (
        <div>
            <section className="services">
                <h2>I nostri Servizi</h2>
                <p>
                    Offriamo un'ampia gamma di servizi di noleggio con conducente per rendere
                    il tuo viaggio comodo e indimenticabile. Dai trasferimenti per aeroporti
                    a tour turistici personalizzati e servizi aziendali, siamo qui per soddisfare
                    ogni tua esigenza di trasporto.
                </p>
                <ul>
                    <li>Trasferimenti per aeroporti con accoglienza personalizzata</li>
                    <li>Tour turistici guidati alla scoperta dei luoghi più affascinanti</li>
                    <li>Servizi aziendali per incontri e trasferimenti esecutivi</li>
                </ul>
            </section>
        </div>
    )
}