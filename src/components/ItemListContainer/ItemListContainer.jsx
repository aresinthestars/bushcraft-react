import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useParams } from "react-router-dom"

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const { id } = useParams()

useEffect(() => {
  const fetchProducts = async () => {
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
  }

  fetchProducts()
}, [id])

  return (
    <>
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={items} />
    </>
  )
}

export default ItemListContainer
