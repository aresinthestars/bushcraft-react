import NotFound from "./components/NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Layout from "./components/Layout/Layout"
import Cart from "./components/Cart/Cart"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a Bushcraft is life!" />
            }
          />

          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="Productos por categoría" />
            }
          />

          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App