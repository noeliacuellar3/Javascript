//compras de supermercado
/*let carrito=[   "leche",1,
                "carne",2,
                "papa",3,
                "fideo",1];


console.log("item:"+carrito[0]);
console.log("cantidad:"+carrito[1]);
console.log("item:"+carrito[2]);
console.log("cantidad:"+carrito[3]);
console.log("item:"+carrito[4]);
console.log("cantidad:"+carrito[5]);
console.log("item:"+carrito[6]);
console.log("cantidad:"+carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);

carrito.push("manzana", 4);
console.log(carrito);
*/
/*
let item = {nombre:'Leche', cantidad: 1, precio:7.5};
console.log("Item: "+item.nombre);
console.log("Cantidad: "+item.cantidad);
*/

let carrito = [{nombre:'Leche', cantidad:1, precio:4},
              {nombre:'Carne', cantidad:2, precio:3},
              {nombre:'fideo', cantidad:1, precio:7},
              {nombre:'Leche', cantidad:3, precio:2}
            ];
console.log(carrito);

item={nombre:'arroz', cantidad: 5, precio:8};
carrito.push(item);
console.log(carrito);
/*
console.log("item: "+item.nombre);
console.log("cantidad: "+item.cantidad);
console.log("precio: "+item.precio);
console.log("total: "+item.cantidad*item.precio);

//buscar funciones o procesos para ordenar un array
//ordenar el array del carrito
let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=> a-b);
console.log(numeros);
console.log("IMPRESION ORDENADO POR PRECIO")
carrito.sort((a,b)=>a.precio -b.precio);
console.log(carrito);
console.log("IMPRESION ORDENADO POR PRECIO")
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log (carrito);
console.log("IMPRESION ORDENADO POR PRECIO")
*/
console.log("Impresion ordenada por precio");
let carritoordenadoporprecio = carrito.slice().sort((a,b)=>a.precio -b.precio);
console.log(carritoordenadoporprecio);

console.log("Impresion ordenada por nombre");
let carritoordenadopornombre = carrito.slice().sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carritoordenadopornombre);

