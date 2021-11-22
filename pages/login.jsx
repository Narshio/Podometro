import Navbar from "../components/navbar"
import { useState } from "react"
import { login } from "../utils/login"

export default () => {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const handleLogin = () => {
    login(user, password).then(_=> window.location = "/")
  }



  return <>
    <Navbar />

    <div className="row" style={{ paddingLop: '1%', paddingLeft: '18%' }}>
      <div className="col s10 s-1">
        <div id="login-div" className="main=div">
          <div className="card" style={{ backgroundColor: '#4240ad' }}>
            <div className="card-content white-text">
              <span className="card-title">LogIn</span>
              <p>...</p>
            </div>

            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder="E-mail" value={user} onChange={(event) => setUser(event.target.value)} type="text" className="validate" />
                    <label htmlFor="email"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 ">
                    <input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="validate" />
                    <label htmlFor="password"></label>
                  </div>
                </div>

              </form>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="input-field col s6">
                  <button className="btn waves-effect waves-light" onClick={handleLogin} >Login
                    <i className="material-icons right">send</i>
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