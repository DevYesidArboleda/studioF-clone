import Link from 'next/link'
import Image from 'next/image'
import { Heart, Search, ShoppingBag, ChevronDown, Filter, ArrowUpDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ProductCarousel } from './components/ProductCarousel'
import { FormTab } from './components/FormTab'
import { VideoTab } from './components/VideoTab'
import { RecommendedProductsTab } from './components/RecommendedProductsTab'
import { ImageCarouselTab } from './components/ImageCarouselTab'

export default function Home() {
  const products = [
    { id: "rec1",name: "Producto 1", image: "/producto1.jpg", price: 99.99 },
    { id: "rec2",name: "Producto 2", image: "/producto2.jpg", price: 89.99, discount: 0.1 },
    { id: "rec3",name: "Producto 3", image: "/producto3.jpg", price: 79.99 },
    { id: "rec4",name: "Producto 4", image: "/producto4.jpg", price: 109.99, discount: 0.15 },
    { id: "rec1",name: "Producto 5", image: "/producto1.jpg", price: 119.99 },
    { id: "rec2", name: "Producto 6", image: "/producto2.jpg", price: 69.99, discount: 0.2 },
    { id: "rec3", name: "Producto 7", image: "/producto3.jpg", price: 129.99 },
    { id: "rec4",name: "Producto 8", image: "/producto4.jpg", price: 139.99, discount: 0.1 },
    { id: "rec1",name: "Producto 9", image: "/producto1.jpg", price: 149.99 },
    { id: "rec2",name: "Producto 10", image: "/producto2.jpg", price: 159.99, discount: 0.25 },
    { id: "rec3",name: "Producto 11", image: "/producto3.jpg", price: 169.99 },
    { id: "rec4", name: "Producto 12", image: "/producto4.jpg", price: 179.99, discount: 0.3 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">
            STUDIO F
          </Link>
          <Input className="md:w-64 w-28" placeholder="Buscar..." />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/hues-of-paradise-colores-banner-desk.jpg"
          alt="Banner promocional"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Ofertas Especiales</h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-6">
          <Link href="/" className="text-gray-500 hover:underline">
            Inicio
          </Link>{' '}
          / Madres
        </div>

        {/* Title and Result Count */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Madres</h1>
          <span className="text-gray-500">12 Resultados</span>
        </div>

        {/* Filters and Sort */}
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="tops">Tops</SelectItem>
                <SelectItem value="bottoms">Pantalones</SelectItem>
                <SelectItem value="dresses">Vestidos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Talla" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevancia</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="newest">Más Recientes</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* Product Carousel */}
        <div className='before:content-[""] before:absolute before:w-[95%] before:z-[-1] before:mx-auto before:my-0 before:border-t-[#e6e6e6] before:border-t before:border-solid before:top-2/4 before:bottom-0 before:inset-x-0'>
          <h2 className='text-center uppercase text-3xl mb-4'>quizá te pueda interesar</h2>
        </div>
        <div className="mb-12">
          <ProductCarousel products={products} />
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="form">Formulario</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="recommended">Recomendados</TabsTrigger>
              <TabsTrigger value="carousel">Secciones</TabsTrigger>
            </TabsList>
            <TabsContent value="form" className="mt-6">
              <FormTab />
            </TabsContent>
            <TabsContent value="video" className="mt-6">
              <VideoTab />
            </TabsContent>
            <TabsContent value="recommended" className="mt-6">
              <RecommendedProductsTab />
            </TabsContent>
            <TabsContent value="carousel" className="mt-6">
              <ImageCarouselTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Atención al cliente</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:underline">Contáctanos</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Preguntas frecuentes</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Devoluciones y cambios</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Acerca de Studio F</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:underline">Nuestra historia</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Trabaja con nosotros</a></li>
                <li><a href="#" className="text-gray-600 hover:underline">Responsabilidad social</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2024 Studio F. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

