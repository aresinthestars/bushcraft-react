import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link to="/cart">
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{totalItems}</span>
    </div>
    </Link>
  )
}

export default CartWidget