import { useState } from "react"

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="item-count">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount