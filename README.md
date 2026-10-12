# Bushcraft is life!

E-commerce de productos de bushcraft, supervivencia y actividades al aire libre, desarrollado como proyecto del curso React JS de Coderhouse.

El proyecto permite navegar por un catálogo, filtrar productos por categoría, acceder al detalle, administrar un carrito, registrar usuarios, iniciar sesión y generar órdenes de compra almacenadas en Firebase.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router
- Context API
- Firebase Authentication
- Cloud Firestore
- Git
- GitHub

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Iniciar el proyecto:

```bash
npm run dev
```

## Variables de entorno

Firebase se configura mediante un archivo `.env` ubicado en la raíz del proyecto.

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

El archivo `.env` está excluido del repositorio mediante `.gitignore`.

La configuración de Firebase se encuentra en:

```text
src/firebase/config.js
```

## Navegación

El proyecto utiliza React Router.

Rutas principales:

- `/` catálogo completo.
- `/category/:id` productos filtrados por categoría.
- `/item/:id` detalle individual de producto.
- `/cart` carrito de compras y checkout.
- `/login` inicio de sesión.
- `/register` registro de usuario.
- `*` página 404.

## Componentes principales

- **NavBar:** navegación, categorías, carrito y estado de autenticación.
- **CartWidget:** muestra la cantidad total de unidades del carrito.
- **ItemListContainer:** obtiene productos desde Firestore y realiza consultas por categoría.
- **ItemList:** renderiza el listado de productos.
- **Item:** representa cada producto del catálogo.
- **ItemDetailContainer:** obtiene un producto desde Firestore mediante su ID.
- **ItemDetail:** muestra la información completa del producto.
- **ItemCount:** permite seleccionar cantidades respetando el stock.
- **Cart:** muestra productos, subtotales, total y formulario de checkout.

## Cloud Firestore

El catálogo obtiene sus datos desde Cloud Firestore.

### Colección `products`

Cada producto contiene campos como:

- `name`
- `description`
- `category`
- `price`
- `stock`
- `img`

El listado completo, el filtrado por categoría y el detalle individual se consultan directamente desde Firestore.

### Colección `orders`

Cada compra genera un nuevo documento en la colección `orders`.

La orden almacena:

- datos del comprador
- email y UID del usuario autenticado
- productos comprados
- cantidades
- precios
- total
- fecha de creación

Firestore genera automáticamente un ID único para cada orden.

## Firebase Authentication

La aplicación utiliza autenticación mediante correo electrónico y contraseña.

Permite:

- registrar usuarios
- iniciar sesión
- cerrar sesión
- mantener el estado de autenticación

El estado del usuario se administra mediante `AuthContext` y `onAuthStateChanged`.

## Carrito de compras

El carrito se administra globalmente utilizando Context API mediante `CartContext`.

Permite:

- agregar productos
- seleccionar cantidades
- acumular unidades sin duplicar productos
- eliminar productos
- vaciar el carrito
- calcular subtotales
- calcular el total
- mostrar la cantidad total de unidades en `CartWidget`

## Checkout

Para finalizar una compra el usuario debe estar autenticado.

El formulario solicita:

- nombre
- apellido
- teléfono
- dirección
- ciudad

Los campos se validan antes de crear la orden.

Cuando la compra se genera correctamente:

1. La orden se guarda en Firestore.
2. Firebase genera un ID único.
3. El ID se muestra al usuario.
4. El carrito se vacía.

## Seguridad de Firestore

Los productos pueden ser consultados desde la aplicación, pero no modificados desde el cliente.

La creación de órdenes requiere que el usuario esté autenticado.

## Estado actual

El proyecto incluye:

- catálogo dinámico desde Firestore
- filtrado por categorías
- detalle dinámico de productos
- React Router
- página 404
- carrito global con Context API
- registro de usuarios
- login y logout
- Firebase Authentication
- formulario de checkout
- validación de datos
- generación de órdenes en Firestore
- ID único de compra

Proyecto realizado como parte del curso React JS de Coderhouse.