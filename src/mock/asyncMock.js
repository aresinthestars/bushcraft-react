const products = [
  {
    id: 1,
    name: "Cuchillo Bushcraft",
    price: 45000,
    category: "cuchillos",
    img: "https://placehold.co/300x200?text=Cuchillo+Bushcraft",
    stock: 8,
    description: "Cuchillo resistente para actividades de bushcraft y supervivencia."
  },
  {
    id: 2,
    name: "Tarp impermeable",
    price: 32000,
    category: "refugio",
    img: "https://placehold.co/300x200?text=Tarp+impermeable",
    stock: 12,
    description: "Tarp liviano para refugios de emergencia y campamento."
  },
  {
    id: 3,
    name: "Kit de cocina",
    price: 28000,
    category: "cocina",
    img: "https://placehold.co/300x200?text=Kit+de+cocina",
    stock: 6,
    description: "Kit compacto de cocina para actividades al aire libre."
  },
  {
    id: 4,
    name: "Linterna LED",
    price: 18000,
    category: "iluminacion",
    img: "https://placehold.co/300x200?text=Linterna+LED",
    stock: 15,
    description: "Linterna LED compacta para camping y supervivencia."
  },
  {
    id: 5,
    name: "Botiquín outdoor",
    price: 24000,
    category: "primeros-auxilios",
    img: "https://placehold.co/300x200?text=Botiquin+outdoor",
    stock: 10,
    description: "Botiquín compacto para emergencias durante actividades outdoor."
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === productId)

      if (product) {
        resolve(product)
      } else {
        reject(new Error("Producto no encontrado"))
      }
    }, 2000)
  })
}