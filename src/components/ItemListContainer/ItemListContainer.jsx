import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../../mock/asyncMock"
import { useParams } from "react-router-dom"

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const { id } = useParams()

useEffect(() => {
  const fetchProducts = async () => {
    const products = await getProducts()

    if (id) {
      const filteredProducts = products.filter(
        (product) => product.category === id
      )

      setItems(filteredProducts)
    } else {
      setItems(products)
    }
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