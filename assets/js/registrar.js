const nombreUsuario= document.getElementById('nombre');
const apellidoUsuario= document.getElementById('apellido');
const cumpleUsuario= document.getElementById('birth');
const emailUsuario=document.getElementById('email');
const passwordUsuario=document.getElementById('password');
const boton = document.querySelector('button');

boton.addEventListener("click", element =>{
    element.preventDefault();
    let entro=false;
    const fecha = validarNacimiento(cumpleUsuario);
    const mayorDeEdad =validacionMayorDeEdad(fecha);
    let regExEmail =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let regExPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/;
    if(nombreUsuario.value.length <4){
        nombreUsuario.parentElement.classList.add("input-container--invalid");
        nombreUsuario.parentElement.querySelector(".input-message-error").innerHTML ="Esté campo NOMBRE no puede estar vacio";
        entro=true;
    }else{
        quitarAlerta(nombreUsuario);
    }
    if(apellidoUsuario.value.length <3){
        apellidoUsuario.parentElement.classList.add("input-container--invalid");
        apellidoUsuario.parentElement.querySelector(".input-message-error").innerHTML ="Esté campo APELLIDO no puede estar vacio";
        entro=true;
    }else{
        quitarAlerta(apellidoUsuario);
    }
    if(mayorDeEdad== false){
        cumpleUsuario.parentElement.classList.add("input-container--invalid");
        cumpleUsuario.parentElement.querySelector(".input-message-error").innerHTML ="Para registrarse debe tener almenos 18 años de edad";
        entro=true;
    }else{
        quitarAlerta(cumpleUsuario);
    }
    if(!regExEmail.test(emailUsuario.value)){
        emailUsuario.parentElement.classList.add("input-container--invalid");
        emailUsuario.parentElement.querySelector(".input-message-error").innerHTML ="El correo no es valido";
        entro=true;
    }else{
        quitarAlerta(emailUsuario);
    }
    if(!regExPass.test(passwordUsuario.value)){
        entro=true;
        passwordUsuario.parentElement.classList.add("input-container--invalid");
        passwordUsuario.parentElement.querySelector(".input-message-error").innerHTML ="La constraseña debe contener al menos una mayuscula, una minuscula, un numero del 0 al 9, minimo 6 caracteres maximo 12 y no puede contener caracteres especiales";   
    }else{
        quitarAlerta(passwordUsuario);
    }
    if(entro==false){
        registrar();
        window.location.href="../pages/registroConcluido.html"
    }
    
})

const quitarAlerta= (input)=>{
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =" ";
}

const validarNacimiento = (input)=>{
    const fechaCliente = new Date (input.value);
    return fechaCliente;   
}

const validacionMayorDeEdad = (fecha)=>{
    const fechaActual = new Date();
    const diferenciaDeFechas = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
    return(diferenciaDeFechas<= fechaActual);
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

