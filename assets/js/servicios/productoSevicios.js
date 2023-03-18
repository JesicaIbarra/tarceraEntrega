const listProductos=()=>fetch("http://localhost:3000/producto").then(respuesta=>respuesta.json());

const crearProducto=(nombre, image, descripcion, precio, alt)=>{
    return fetch("http://localhost:3000/producto", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre, image, descripcion, precio, alt}),
        });
}

const actualizarProducto = (nombre, image, descripcion, precio, alt)=>{
    return fetch('http://localhost:3000/producto',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({nombre, image, descripcion, precio, alt}),
    }).then((respueta)=>respueta).catch((error)=>console.log(error))
};

export const productosServicios={
    listProductos,
    crearProducto,
    actualizarProducto
}