# ABM CLIENTES

En este ejercicio vamos a crear una APP para visualizar, crear, modificar y eliminar clientes.

Se deberán cumplir los siguientes puntos:
1. La ruta /clientes/cargar mostrar un formulario de carga de un cliente.
2. En la ruta /clientes se verá el listado de todos los clientes. El listado tendrá un botón
en cada fila para modificar el cliente que corresponda y otro para borrar.
3. En la ruta clientes/update/:id modificara los datos. Usar un formulario para mostrar
los datos.
4. Requisitos:
- La ruta clientes/:id mostrará los detalles de dicho cliente.
- Se deben dividir los componentes en lógicos y de presentación.
- Se debe usar el mismo formulario para el alta y la modificación.
- Utilizar React hooks.
- Se debe usar alguna librería o framework de estilos (material, bootstrap, etc).
- El servidor es localhost:3003/clientes:
● get
● post
● put
● delete
5. Extra: La APP cuenta con soporte para varios idiomas

## COMO INICIALIZAR EL PROYECTO

### PARA EL BACKEND.

1. Para usar el servidor hay que tener instalado nodejs y mongoDB.
2. Pasos para iniciar el servidor:
- cd backend
- npm install
- npm start

### PARA EL FRONTEND

2. Pasos para iniciar el frontend:
- cd frontend
- npm install
- npm start