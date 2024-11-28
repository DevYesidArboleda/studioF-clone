import Image from 'next/image'
import { Heart } from 'lucide-react'

import { Button } from "@/components/ui/button"
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
}

export function ProductCard({ id, name, image, price, discount }: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount) : price;
  const discountPercentage = discount ? Math.round(discount * 100) : 0;

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={image}
          alt={name}
          width={240}
          height={320}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
          <Heart className="h-5 w-5" />
        </Button>
        {discount && (
          <div className="absolute bottom-20 right-2 bg-[#29a516] text-white px-2 py-1  text-sm font-bold">
            -{discountPercentage}%
          </div>
        )}
      </div>
      <div className="mt-2 space-y-2 flex flex-col items-center mb-6">
        <h3 className="text-sm text-black font-bold">
            <Link href={`/producto/${id}`}>
            <span className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        <div className="flex justify-between items-center gap-2">
          <div className="text-sm font-medium text-[#29a516]">
            ${discountedPrice.toFixed(2)}
          </div>
          {discount && (
            <div className="text-xs text-gray-500 line-through">
              ${price.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

