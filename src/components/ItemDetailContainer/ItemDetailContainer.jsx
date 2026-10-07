import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../../mock/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getProductById(Number(id))
      .then((product) => setProduct(product))
      .catch((error) => console.error(error))
  }, [id])

  if (!product) {
    return <p>Cargando producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer