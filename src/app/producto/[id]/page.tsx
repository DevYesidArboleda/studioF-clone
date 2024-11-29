import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, Heart, ShoppingCart } from 'lucide-react'
import type { Metadata, ResolvingMetadata } from 'next'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Esta función simula la obtención de datos del producto
// En una aplicación real, esto se conectaría a una API o base de datos
function getProductData(id: string) {
    const products = [
      { id: 'rec1', name: "Producto 1", image: "/producto1.jpg", price: 99.99, description: "Descripción detallada del Producto 1" },
      { id: 'rec2', name: "Producto 2", image: "/producto2.jpg", price: 89.99, discount: 0.1, description: "Descripción detallada del Producto 2" },
      { id: "rec3",name: "Producto 3", image: "/producto3.jpg", price: 79.99, description: "Descripción detallada del Producto 3"  },
      { id: "rec4",name: "Producto 4", image: "/producto4.jpg", price: 109.99, discount: 0.15, description: "Descripción detallada del Producto 4"  },
      // Añade más productos aquí si lo deseas
    ]
  return products.find(p => p.id === id)
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).id

  // fetch data
  const product = await getProductData(id)

  if (!product) {
    return {
      title: 'Producto no encontrado',
    }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  }
}

export default async function ProductPage({ params, searchParams }: Props) {
  const id = (await params).id
  const product = await getProductData(id)

  if (!product) {
    notFound()
  }

  const discountedPrice = product.discount ? product.price * (1 - product.discount) : product.price
  const discountPercentage = product.discount ? Math.round(product.discount * 100) : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 mb-4">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Volver a la tienda
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
          {product.discount && (
            <div className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
              -{discountPercentage}%
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-baseline mb-4">
            <p className="text-2xl font-semibold text-gray-900">${discountedPrice.toFixed(2)}</p>
            {product.discount && (
              <p className="ml-2 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</p>
            )}
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="space-y-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una talla" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-4">
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al carrito
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

