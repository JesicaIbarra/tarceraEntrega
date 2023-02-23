import { valida } from "./validar.js";


const inputs = document.querySelectorAll("input");
const boton = document.querySelector("button");
let control;

 inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    control=valida(input.target);
  });
  
});

if(inputs==" "){
    console.log("ocurrion un error")
}else{
    boton.addEventListener("click", ()=>{
        registrar()
        })
}



const registrar =()=>{

    function Usuario(nombre, apellido, birth, email, pass){
        this.nombre=nombre;
        this.apellido=apellido;
        this.birth=birth;
        this.email=email;
        this.pass=pass;
    }
    const nombreUsuario= document.getElementById('nombre').value;
    const apellidoUsuario= document.getElementById('apellido').value;
    const cumpleUsuario= document.getElementById('birth').value;
    const emailUsuario=document.getElementById('email').value;
    const passwordUsuario=document.getElementById('password').value;

    const nuevoUsuario = new Usuario(nombreUsuario, apellidoUsuario, cumpleUsuario, emailUsuario, passwordUsuario);
    agregarUsuario(nuevoUsuario);
}

let usuariosRegistrados=[];

let usuariEnLS=JSON.parse(localStorage.getItem('usuario'))
if(usuariEnLS){
    usuariosRegistrados=usuariEnLS;

}


const agregarUsuario = (nuevoUsuario) =>{
    usuariosRegistrados.push(nuevoUsuario);
    console.log(usuariosRegistrados);
    const usuarioCarga= JSON.stringify(usuariosRegistrados);
    localStorage.setItem('usuario', usuarioCarga);
}
renderUsuario(usuariosRegistrados);





