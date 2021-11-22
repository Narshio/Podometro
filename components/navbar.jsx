import Link from 'next/link'
import { AuthContext } from "../context/authProvider"
import { useContext } from "react"
import {Logout} from "../utils/login"

export default () => {
  const context = useContext(AuthContext);


  const buttonStyle = {
    color: '#c6ff00'
  }
  return <nav>
    <div className="nav-wrapper black">
      <a className="brand-logo right">Rapp</a>

      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <a className="large material-icons" style={buttonStyle}>account_circle</a>
        </li>
        <li>
          <Link href="/">
            <a style={buttonStyle}>Home</a>
          </Link>
        </li>
        {
          context.user ? <>
            <li>
              <Link href="/carrera">
                <a style={buttonStyle}>Carrera</a>
              </Link>
            </li>
            <li>
              <Link href="/recorrido">
                <a style={buttonStyle}>Recorrido</a>
              </Link>
            </li>
            <li>
              <Link href="/createCarrera">
                <a style={buttonStyle}>Crear Carrera</a>
              </Link>
            </li>
            <li>
              <Link href="/userHistory">
                <a style={buttonStyle}>Historial Usuario</a>
              </Link>
            </li>
            <li>
                <a style={buttonStyle} onClick = {()=>Logout().then(_=>window.location = "/")}>Logout</a>
            </li>
          </> : <>
            <li>
              <Link href="/register">
                <a style={buttonStyle}>Register</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a style={buttonStyle}>Login</a>
              </Link>
            </li>
          </>
        }
      </ul>
    </div>
  </nav>
}