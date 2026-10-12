import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id)
      const productSnapshot = await getDoc(productRef)

      if (productSnapshot.exists()) {
        setProduct({
          id: productSnapshot.id,
          ...productSnapshot.data()
        })
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <p>Cargando producto...</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer