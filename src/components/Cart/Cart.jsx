import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useAuth } from "../../context/AuthContext"

function Cart() {
  const { cart, removeItem, clear } = useCart()

  const { user } = useAuth()

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

  const handleCheckout = async () => {
    if (!user) {
      alert("Tenés que iniciar sesión para finalizar la compra.")
      return
    }

    const order = {
      buyer: {
        email: user.email,
        uid: user.uid
      },
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      })),
      total,
      date: serverTimestamp()
    }

    const orderRef = await addDoc(collection(db, "orders"), order)

    alert(`Compra realizada. ID de orden: ${orderRef.id}`)
    clear()
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

      <button onClick={handleCheckout}>
        Finalizar compra
      </button>
    </section>
  )
}

export default Cart
