
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Bushcraft is life!</h2>

      <ul className="navbar-categories">
        <li>Cuchillos</li>
        <li>Refugio</li>
        <li>Cocina</li>
        <li>Iluminación</li>
        <li>Primeros auxilios</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar