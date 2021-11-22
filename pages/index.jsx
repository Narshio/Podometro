import Navbar from "../components/navbar"

export default () => {
    return <>
        <Navbar />

        <div className="col s12 ">
            <div className="card-panel teal #bdbdbd grey lighten-1">
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Carrera</span>
                                <p>Esto muestra la informacion de las carreras en base a el usuario</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col s12 m5">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Recorrido</span>
                                <p>Informacion:
                                    Aqui se puede revisar los recorridos del usuario que contiene: Distancia, Pasos, Tiempo
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m5">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Registro</span>
                                <p>Puedes registrar un usuario nuevo desde la pagina web.</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col s12 m5">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Crear una carrera</span>
                                <p>Aqui se crea una carrera con los siguientes datos: No. de participantes y Distancia recorrida.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}