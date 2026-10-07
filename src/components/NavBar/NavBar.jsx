
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

function NavBar() {
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

      <CartWidget />
    </nav>
  )
}

export default NavBar