const listaTabla = document.getElementById("tablaCuerpo");
let usuariosRegistrados=[];
const nuevoUsuario= (nombre, apellido,edad, email, password)=>{
    const usuario = document.createElement('tr');
    const contenido = `
    <th class="tablaUsuarios">${nombre}</th>
    <th class="tablaUsuarios">${apellido}</th>
    <th class="tablaUsuarios">${edad}</th>
    <th class="tablaUsuarios">${email}</th>
    <th class="tablaUsuarios">${password}</th>`
    usuario.innerHTML=contenido;
    return (usuario);
}

let usuariEnLS=JSON.parse(localStorage.getItem('usuario'))
if(usuariEnLS){
    usuariosRegistrados=usuariEnLS;

}
for (let i=0; i<usuariosRegistrados.length; i++) {
    nuevoUsuario(usuariosRegistrados[i].nombre)
    listaTabla.appendChild(nuevoUsuario(usuariosRegistrados[i].nombre, usuariosRegistrados[i].apellido, usuariosRegistrados[i].birth, usuariosRegistrados[i].email, usuariosRegistrados[i].pass))
    }