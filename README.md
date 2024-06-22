# Hackathon 2: Ecommerce de Tecnología 🛒💻

¡Bienvenidos a la Hackathon 2 del curso Desarrollo Basado en Plataformas! En esta ocasión, construiremos una aplicación web que simula un ecommerce de productos tecnológicos, inspirado en Amazon. 📦🛍️

## Objetivos 🎯

1. 🔐 Implementar un sistema de autenticación con enrutamiento en React.
2. 🚚 Practicar el paso de props de un componente padre a hijo.
3. ♾️ Desarrollar un componente de scroll infinito.
4. 🛒 Crear un carrito de compras con operaciones CRUD.
5. 🔄 Implementar operaciones CRUD para cada producto.
6. 🚀 Desplegar el front-end en Google Firebase utilizando Github Actions.

## Funcionalidades 🔧

### Roles de Usuario 👥

Habrá dos roles de usuario: Administrador y Cliente.

#### Administrador 👨‍💼

- Podrá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos.
- No tendrá acceso al carrito de compras.
- Tendrá una vista separada con una tabla que muestra todos los productos y las opciones CRUD.

#### Cliente 👤

- Podrá ver y agregar productos al carrito de compras.
- No podrá realizar operaciones CRUD sobre los productos.
- Tendrá acceso al carrito de compras en la parte superior derecha de la pantalla.

### Productos 📦

- Los productos se mostrarán en un componente de scroll infinito con paginación.
- Cada producto mostrará su imagen, nombre, precio, puntuación de reseña y un botón para añadir al carrito.
- Al hacer clic en un producto, se abrirá una página con detalles adicionales y la opción de añadir al carrito.

### Carrito de Compras 🛒

- El carrito de compras se mostrará como un icono en la parte superior derecha de la pantalla.
- Al hacer clic, se abrirá un modal que mostrará los productos añadidos al carrito.
- En este modal, el usuario podrá eliminar productos del carrito y realizar la compra.
- Después de realizar la compra, se mostrará un spinner de carga durante 5 segundos y luego un modal de confirmación.

### Autenticación 🔐

- Los usuarios no autenticados tendrán una vista similar a la de los clientes, pero sin acceso al carrito de compras.
- Se mostrará un botón de inicio de sesión y registro.
- Después de iniciar sesión o registrarse, se mostrará un modal de bienvenida y se habilitará el acceso al carrito de compras.

### Despliegue 🚀

- El front-end deberá ser desplegado en Google Firebase utilizando Github Actions, como se ha enseñado en clase.

## Documentación API 📚

Para esta Hackathon, utilizaremos una API RESTful que proporciona información sobre los productos. La documentación de la API se encuentra en el siguiente enlace:

[Documentación API](https://documenter.getpostman.com/view/11671329/TzJx8w8S)

### Endpoints 🛣️

¡Buena suerte y disfruten de esta emocionante Hackathon! 🎉💪