import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../context/CartContext"

function ItemDetail({ product }) {
  const { addItem } = useCart()

  const handleAdd = (quantity) => {
    if (quantity > 0) {
      addItem(product, quantity)
    }
  }
  return (
    <section className="item-detail">
      <img src={product.img} alt={product.name} />

      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p>{product.description}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      </div>
    </section>
  )
}

export default ItemDetail