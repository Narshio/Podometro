import { useState } from "react";
import Navbar from "../components/navbar"



export default () => {

    const [apellido_materno, setApellido_materno] = useState()
    const [apellido_paterno, setApellido_paterno] = useState()
    const [fecha_Nacimiento, setFecha_Nacimiento] = useState()
    const [nombre, setNombre] = useState()
    const [numero, setNumero] = useState()
    const [resultado, setResultado] = useState()
    const [direccion, setDireccion] = useState()
    const [edad, setEdad] = useState()
    const [plantel, setPlantel] = useState()
    const [talla, setTalla] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleCreate = (event) => {
        event.preventDefault();

        const data = {
            apellido_materno: apellido_materno,
            apellido_paterno: apellido_paterno,
            fecha_Nacimiento: fecha_Nacimiento,
            nombre: nombre,
            numero: numero,
            resultado: resultado,
            direccion: direccion,
            edad: edad,
            plantel: plantel,
            provider: 'provider',
            talla: talla,
            email: email,
            password: password,
        }

        fetch("/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {
            alert('User Created')

            setApellido_materno('')
            setApellido_paterno('')
            setFecha_Nacimiento('')
            setNombre('')
            setNumero('')
            setResultado('')
            setDireccion('')
            setEdad('')
            setPlantel('')
            setTalla('')
            setEmail('')
            setPassword('')
        }).catch(() => {
            alert('Error')
        })
    }


    return <>

        <Navbar />

        <div className="row" style={{ paddingTop: '1%', paddingLeft: '18%' }}>
            <div className="col s10 s-1">
                <div className="card" style={{ backgroundColor: '#4240ad' }} >
                    <div className="card-content white-text">
                        <span className="card-title">Registro</span>
                        <p>Introduce tus datos</p>
                    </div>
                    <div className="row">
                        <form className="col s12" onSubmit={handleCreate}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Nombre"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 " >
                                    <input placeholder="Apellido Paterno" value={apellido_paterno} onChange={(event) => setApellido_paterno(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Apellido Paterno"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Apellido Materno" value={apellido_materno} onChange={(event) => setApellido_materno(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Apellido Materno"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Fecha de Nacimiento" value={fecha_Nacimiento} onChange={(event) => setFecha_Nacimiento(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Fecha"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Numero" value={numero} onChange={(event) => setNumero(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Numero"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="edad" value={edad} onChange={(event) => setEdad(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="edad"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Plantel" value={plantel} onChange={(event) => setPlantel(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Plantel"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Talla" value={talla} onChange={(event) => setTalla(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Talla"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Sexo" value={resultado} onChange={(event) => setResultado(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="Sexo"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="direccion" value={direccion} onChange={(event) => setDireccion(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="direccion"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="email"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} type="text" className="validate" />
                                    <label htmlFor="password"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6"  >
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Ingresar
                                        <i className="material-icons right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}