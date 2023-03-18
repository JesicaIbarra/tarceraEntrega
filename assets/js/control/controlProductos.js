import { productosServicios } from "../servicios/productoSevicios.js";

const nuevoProducto = (name, price, imageUrl) =>{

    const card =  document.createElement("div");
    const contenido = `
        <div>
        <img src=" ${imageUrl}" alt="">
         <h3>${name}</h3>
         <p>${price}</p>   
        </div>
        `
        
    card.innerHTML= contenido;
    card.classList.add("producto");
    return card;
}

const producto = document.querySelector("[data-productos]");

console.log(producto)

const render = async()=>{
    try{
        const listarProducto = await productosServicios.listProductos()
        listarProducto.forEach(element => {
            producto.appendChild(nuevoProducto(element.name, element.price, element.imageUrl))  
        });
    }catch(error){
        console.log("a ocurrido un error");
    }
}

render();
