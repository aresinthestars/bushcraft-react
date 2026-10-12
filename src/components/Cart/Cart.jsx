import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useAuth } from "../../context/AuthContext"
import { useState } from "react"

function Cart() {
  const { cart, removeItem, clear } = useCart()

  const { user } = useAuth()

  const [buyer, setBuyer] = useState({
    name: "",
    lastname: "",
    phone: "",
    address: "",
    city: ""
  })

  const handleBuyerChange = (event) => {
    const { name, value } = event.target

    setBuyer({
      ...buyer,
      [name]: value
    })
  }

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

    if (
      !buyer.name ||
      !buyer.lastname ||
      !buyer.phone ||
      !buyer.address ||
      !buyer.city
    ) {
      alert("Completá todos los datos de entrega.")
      return
    }

    const order = {
      buyer: {
        ...buyer,
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

      <div className="checkout-form">
        <h3>Datos de entrega</h3>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleBuyerChange}
        />

        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={buyer.lastname}
          onChange={handleBuyerChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleBuyerChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={buyer.address}
          onChange={handleBuyerChange}
        />

        <input
          type="text"
          name="city"
          placeholder="Ciudad"
          value={buyer.city}
          onChange={handleBuyerChange}
        />
      </div>

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
