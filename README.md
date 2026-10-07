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

## Detalle de producto

Se incorporó una vista de detalle individual mediante `ItemDetailContainer` e `ItemDetail`.

La función `getProductById` busca un producto por su identificador y simula una consulta asincrónica mediante una Promise y `setTimeout`.

`ItemDetailContainer` administra la carga y el estado del producto, mientras que `ItemDetail` se encarga de mostrar su información completa.

También se incorporó `ItemCount`, que permite seleccionar una cantidad respetando el stock disponible y evitando valores negativos.

## Navegación con React Router

Se incorporó `react-router-dom` para gestionar la navegación del e-commerce como una SPA.

Las rutas principales son:

- `/` muestra el catálogo completo.
- `/category/:id` filtra los productos según la categoría seleccionada.
- `/item/:id` muestra el detalle dinámico de un producto.
- `*` muestra una página 404 para rutas inexistentes.

El proyecto utiliza `NavLink` y `Link` para navegar sin recargar la página.

También se incorporó un `Layout` compartido con `NavBar`, `CartWidget`, `Footer` y `Outlet`, permitiendo mantener la estructura principal visible entre rutas.