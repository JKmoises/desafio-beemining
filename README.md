# Grilla Paginada con filtros

Esta app consiste en una grilla paginada que muestra información dependiendo de unos filtros de operaciones de conjuntos, estas operaciones son la __unión agrupada__, la __intesección__ y la __diferencia__.


### _URL de App Web:_ [https://desafio-beemining.vercel.app/](https://desafio-beemining.vercel.app/)
---


## Tecnologías utilizadas:

- __NextJS:__ Framework de _React_ que se ejecuta tanto en el cliente como en el servidor para realizar _Server Side Rendering(SSR)_ y _Static Site Generator(SSG)_

- __React:__ Librería para crear interfaces de usuario usando componentes.

- __Typescript__: Lenguaje de programación que es un superset de _Javascript_ para agregar tipado y detectar errores en tiempo real.

- __ES6+__: Estándar para escribir código moderno de _Javascript_.

- __Bootstrap__: Framework de _CSS_ que contiene utilidades y componentes para estilizar una interfaz de usuario.

- __React Bootstrap__: _Fork_ de _Bootstrap_ que permite utilizar componentes de _React_.

---

## Estructura de carpetas:

- __/components__: Carpeta que contiene los componentes de filtros por operación de conjunto, la grilla, los registros y la paginación.
- __/interfaces__: _Interfaces_ globales para aplicar tipado con _Typescript_.
- __/layout__: Esta carpeta contiene el _layout (Diseño)_ base para las páginas de la app.
- __/pages__: Esta carpeta contiene todas las páginas de la app.
- __/reducers__: Carpeta con _reducer_ con sus _actions_ que contiene la lógica para realizar una _unión agrupada, intersección y diferencia_ de los dos conjuntos de datos consumidos.
- __/utils__: Esta carpeta contiene un archivo _helper_ con funciones útiles y reutilizables.