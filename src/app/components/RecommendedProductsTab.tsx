import { ProductCard } from "./ProductCard"

export function RecommendedProductsTab() {
  const recommendedProducts = [
    { id: "rec1", name: "Producto Recomendado 1", image: "/producto1.jpg", price: 79.99 },
    { id: "rec2", name: "Producto Recomendado 2", image: "/producto2.jpg", price: 89.99, discount: 0.1 },
    { id: "rec3", name: "Producto Recomendado 3", image: "/producto3.jpg", price: 99.99 },
    { id: "rec4", name: "Producto Recomendado 4", image: "/producto4.jpg", price: 109.99, discount: 0.15 },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {recommendedProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}

