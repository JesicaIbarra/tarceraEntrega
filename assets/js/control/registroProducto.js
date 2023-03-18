import { productosServicios } from "../servicios/productoSevicios";


const formulario = document.getElementById("formulario");
const imagen= document.getElementById("image");
const descripcion= document.getElementById("description");
const precio= document.getElementById("precio");
const alt= document.getElementById("alt");
const nombre= document.getElementById("nombre");

    

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    const nombreProducto= nombre.value;
    const imagenProducto = imagen.value;
    const descripcionProducto = descripcion.value;
    const precioProducto = precio.value;
    const altProducto = alt.value;
    
    console.log(nombreProducto, imagenProducto, descripcionProducto, precioProducto, altProducto);
    
   
    productosServicios.crearProducto(nombreProducto, imagenProducto, descripcionProducto, precioProducto, altProducto).then((respuesta)=>{
        console.log("se ha cargado");
    }).catch(()=>{
        console.log("hay un error");
    });

})