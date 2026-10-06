# Bushcraft is life!

E-commerce de productos de bushcraft, supervivencia y actividades al aire libre, desarrollado como proyecto del curso React JS de Coderhouse.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Git
- GitHub

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

Luego abrir en el navegador la dirección local indicada por Vite.

## Componentes

- **NavBar:** barra de navegación principal con el nombre del e-commerce, categorías de productos y acceso al carrito.
- **CartWidget:** componente visual del carrito de compras con una cantidad de productos temporalmente hardcodeada.
- **ItemListContainer:** contenedor principal que recibe y muestra un mensaje de bienvenida mediante props.

## Listado dinámico de productos

El catálogo obtiene los productos desde un mock local que simula una consulta asíncrona.

La función `getProducts` devuelve una Promise que se resuelve luego de 2 segundos utilizando `setTimeout`.

`ItemListContainer` realiza la carga de productos mediante `useEffect` y guarda los resultados en un estado utilizando `useState`.

Luego, `ItemList` recorre los productos con `.map()` y renderiza un componente `Item` por cada producto utilizando su `id` como key única.