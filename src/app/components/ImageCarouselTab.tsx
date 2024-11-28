import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ImageCarouselTab() {
  const carouselItems = [
    { image: "/hues-of-paradise-tesoro-banner.jpg", link: "/", text: "Sección 1" },
    { image: "/hues-of-paradise-tesoro-fondo.jpg", link: "/", text: "Sección 2" },
    { image: "/hues-of-paradise-tesoro-3.jpg", link: "/", text: "Sección 3" },
  ]

  return (
    <div className="relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory">
        {carouselItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-center">
            <Link href={item.link} className="relative block">
              <Image src={item.image} alt={item.text} width={600} height={400} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <span className="text-white text-2xl font-bold">{item.text}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Button variant="ghost" size="icon" className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white">
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white">
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

