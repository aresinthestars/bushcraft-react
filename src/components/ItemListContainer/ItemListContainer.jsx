import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../../mock/asyncMock"

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setItems(products)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={items} />
    </>
  )
}

export default ItemListContainer