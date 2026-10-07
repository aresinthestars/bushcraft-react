import { useEffect, useState } from "react"
import { getProductById } from "../../mock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(1)
      .then((product) => setProduct(product))
      .catch((error) => console.error(error))
  }, [])

  if (!product) {
    return <p>Cargando producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer