import { useState } from "react";
import Navbar from "../components/navbar";

export default () => {

  const [integrantes, setIntegrantes] = useState("")
  const [Distancia, setDistancia] = useState("")
  const [correos, setCorreos] = useState("")
  const [nombreC, setNombreC] = useState("")



  const handleCreate = () => {

    const data = {
      Distancia: Distancia,
      Integrantes: integrantes,
      Correos: correos,
      nombreC: nombreC
    }

    fetch("/api/register-run", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      alert('Carrera Created')

      setDistancia('')
      setIntegrantes('')
      setCorreos('')
      setNombreC('')
    }).catch(() => {
      alert('Error')
    })
  }
  return <>
    <Navbar />
    <div className="row" style={{ paddingLop: '1%', paddingLeft: '18%' }}>
      <div className="col s10 s-1">
        <div id="login-div" className="main=div">
          <div className="card" style={{ backgroundColor: '#4240ad' }}>
            <div className="card-content white-text">
              <span className="card-title">Add Run</span>
              <p>...</p>
            </div>

            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder="No. Integrantes" value={integrantes} onChange={(event) => setIntegrantes(event.target.value)} type="text" className="validate" />
                    <label htmlFor="Integrantes"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 ">
                    <input placeholder="Nombre Carrera" value={nombreC} onChange={(event) => setNombreC(event.target.value)} type="text" className="validate" />
                    <label htmlFor="NombreC"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 ">
                    <input placeholder="Distancia" value={Distancia} onChange={(event) => setDistancia(event.target.value)} type="text" className="validate" />
                    <label htmlFor="Distancia"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 ">
                    <input placeholder="Correos" value={correos} onChange={(event) => setCorreos(event.target.value)} type="email" className="validate" />
                    <label htmlFor="Correos"></label>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="input-field col s6">

                  <button className="btn waves-effect waves-light" onClick={handleCreate} >Create
                    <i className="material-icons right" >send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
}