function Item({ product }) {
  return (
    <article className="item-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </article>
  )
}

export default Item