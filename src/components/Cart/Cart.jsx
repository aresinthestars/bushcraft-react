import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

function Cart() {
  const { cart, removeItem, clear } = useCart()

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <h2>Carrito de compras</h2>

      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <h3>{product.name}</h3>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unitario: ${product.price}</p>
          <p>Subtotal: ${product.price * product.quantity}</p>

          <button onClick={() => removeItem(product.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={clear}>
        Vaciar carrito
      </button>

      <button>
        Finalizar compra
      </button>
    </section>
  )
}

export default Cart
