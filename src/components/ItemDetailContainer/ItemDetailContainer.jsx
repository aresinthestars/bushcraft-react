
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      setError("")
      setProduct(null)

      try {
        const productRef = doc(db, "products", id)
        const productSnapshot = await getDoc(productRef)

        if (productSnapshot.exists()) {
          setProduct({
            id: productSnapshot.id,
            ...productSnapshot.data()
          })
        } else {
          setError("El producto solicitado no existe.")
        }
      } catch (err) {
        console.error("Error al cargar producto:", err)
        setError("No se pudo cargar el producto.")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <p>Cargando producto...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
