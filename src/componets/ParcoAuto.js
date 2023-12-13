import veicoliJson from "../veicoli/veicoli.json"
import "./ParcoAuto.css"

export function ParcoAuto() {
    return (
        <div className="container">
            <div className="row">
                {veicoliJson?.map((veicolo) => (
                    <div className="col-md-4" key={veicolo.id}>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={veicolo.immagine} className="img-card" alt={veicolo.nomeVeicolo}/>
                            <div className="card-body">
                                <p className="card-text">{veicolo.nomeVeicolo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}