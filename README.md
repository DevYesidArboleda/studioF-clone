This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Studio F - Réplica de Tienda en Línea

Este proyecto es una réplica de la tienda en línea de Studio F, implementada utilizando Next.js, React y Tailwind CSS. La aplicación incluye varias características clave de una tienda en línea moderna, incluyendo un carrusel de productos, páginas de detalles de productos y un formulario de contacto funcional.

## Características Principales

1. **Página Principal**
   - Barra de navegación con logo, barra de búsqueda e iconos de acción
   - Banner promocional a ancho completo
   - Carrusel de productos con navegación, paginación y barra de progreso
   - Filtros y opciones de ordenamiento para productos
   - Sección de pestañas con formulario, video, productos recomendados y carrusel de imágenes

2. **Página de Detalles del Producto**
   - Imagen ampliada del producto
   - Información detallada del producto (nombre, precio, descripción)
   - Selector de talla
   - Botones para añadir al carrito y a favoritos

3. **Formulario de Contacto**
   - Campos para nombre, email y mensaje
   - Envío de correo electrónico funcional utilizando Resend

4. **Componentes Reutilizables**
   - ProductCard: Tarjeta de producto reutilizable
   - ProductCarousel: Carrusel de productos con Swiper.js

## Tecnologías Utilizadas

- Next.js 13 (App Router)
- React 18
- Tailwind CSS
- shadcn/ui para componentes de UI
- Swiper.js para el carrusel de productos
- Resend para el envío de correos electrónicos

## Configuración del Proyecto

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env.local` y añade tu API key de Resend:


