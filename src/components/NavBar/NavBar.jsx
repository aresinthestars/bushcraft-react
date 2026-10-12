
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function NavBar() {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">
        <NavLink to="/">Bushcraft is life!</NavLink>
      </h2>

      <ul className="navbar-categories">
        <li><NavLink to="/category/cuchillos">Cuchillos</NavLink></li>
        <li><NavLink to="/category/refugio">Refugio</NavLink></li>
        <li><NavLink to="/category/cocina">Cocina</NavLink></li>
        <li><NavLink to="/category/iluminacion">Iluminación</NavLink></li>
        <li><NavLink to="/category/primeros-auxilios">Primeros auxilios</NavLink></li>
      </ul>

      <div className="navbar-auth">
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Registro</NavLink>
          </>
        )}
      </div>

      <CartWidget />
    </nav>
  )
}

export default NavBar