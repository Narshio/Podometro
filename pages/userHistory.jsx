import Navbar from "../components/navbar";
import { useState } from "react";


export default () => {
    const [carreras, setCarreras] = useState([])
    const [correo, setCorreo] = useState("")
    const getHistory = () => {
        fetch("/api/get-history", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: correo })
        }).then(response => response.json())
            .then(json => setCarreras(json.carreras))
    }


    return <>
        <Navbar />

        <div className="col s12 ">
            <div className="card-panel teal #bdbdbd grey lighten-1">
                <div className="row">
                    <div className="col 12">
                        <div className=" input-field col s6">
                            <input value={correo} onChange={(event) => setCorreo(event.target.value)} placeholder="Correo" type="text" className="validate" />
                            <button className="btn waves-effect waves-light" onClick={getHistory} >Buscar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Distancia</th>
                                    <th>Pasos</th>
                                    <th>Tiempo</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    carreras.map((carrera, index) => index < 5 && <tr>
                                        <td>{carrera.N}</td>
                                        <td>{carrera.distancia}<i> Km</i></td>
                                        <td>{carrera.pasos}</td>
                                        <td>{carrera.tiempo}<i>'</i></td>
                                        <td>{carrera.fecha}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </>

}

