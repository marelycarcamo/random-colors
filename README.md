# Programa Random Color

Este proyecto genera 150 cuadrados de colores aleatorios cuando se hace clic en un botón. Los colores se generan completamente al azar sin el uso de arreglos.

https://marelycarcamo.github.io/random-colors/


## Funcionalidad

Al hacer clic en el botón con el ID "btn-color", se crean 150 cuadrados con colores de fondo aleatorios. Cada cuadrado tiene una altura y ancho de 100 píxeles.

## Descripción de las Funciones

### `random_color(inferior, superior)`

Esta función genera un valor de color aleatorio dentro del rango especificado. Los parámetros `inferior` y `superior` determinan los límites para los componentes de color (rojo, verde o azul). Los valores generados se utilizan para crear colores RGB aleatorios.

### `create_square()`

Esta función crea los cuadrados con colores aleatorios. Utiliza la función `random_color` para generar los valores RGB y luego los aplica como colores de fondo a los cuadrados.

## Destacando la Aleatoriedad

Es importante mencionar que los colores de los cuadrados se generan completamente al azar, lo que garantiza una variedad única en cada ejecución del programa.

¡Diviértete explorando los colores aleatorios! 🎨✨
