import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useParams } from "react-router-dom"

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { id } = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError("")

      try {
        const productsRef = collection(db, "products")

        const productsQuery = id
          ? query(productsRef, where("category", "==", id))
          : productsRef

        const snapshot = await getDocs(productsQuery)

        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setItems(products)
      } catch (err) {
        console.error("Error al cargar productos:", err)
        setError("No se pudieron cargar los productos.")
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [id])

  return (
    <>
      <h2 className="greeting">{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : items.length === 0 ? (
        <p>
          {id
            ? "No hay productos en esta categoría."
            : "No hay productos disponibles."}
        </p>
      ) : (
        <ItemList products={items} />
      )}
    </>
  )
}

export default ItemListContainer
