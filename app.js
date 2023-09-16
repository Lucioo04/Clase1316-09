
//console.log("esto es una App")

const productos = {
    id : 1,
    nombre : "Camiseta",
    precio : 20,
    colores : ["Rojo", "Azul", "Verde"],
    especificaciones : {
        material : "Algodon",
        tallas : ["S","M","L"]
    }
};

let {nombre, precio,especificaciones} = productos

const productoActualizado = {
    ...productos,
    precio : 25,
    colores : [...productos.colores, "Negro"], 
    especificaciones:{
        tallas:[...productos.especificaciones.tallas, "XL"]
    }
    

};

//console.log(nombre);
//console.log(precio);
//console.log(especificaciones);
console.log(productos);
console.log(productoActualizado);

