const producto = {
    nombre: 'Camiseta' , 
    precio: 10000 , 
    cantidadDisponible : 4
 } 
console.log (producto)
 let nombre = producto.nombre
let cambioNombre = producto.nombre = 'Zapatillas' 
producto.categoria = 'Calzado'


console.log (producto)

delete producto.cantidadDisponible
console.log (producto)