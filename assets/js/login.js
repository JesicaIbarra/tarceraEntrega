const emailUsuario=document.getElementById('email');
const passwordUsuario=document.getElementById('password');
const boton = document.getElementById('boton');
const botonCerrar = document.getElementById('botonLogin');
const ingreso = document.getElementById('login');
let arrayUsuarios=[];



boton.addEventListener("click", (event)=>{
    event.preventDefault();
    let entro=false;
   
    if(emailUsuario.value ==="administrador@admi.com" && passwordUsuario.value==="Admi1234"){
        window.location.href="../../index.html"
    }
    
    if(repetido( "email", emailUsuario.value)!=true || emailUsuario.value===""){
        emailUsuario.parentElement.classList.add("input-container--invalid");
        emailUsuario.parentElement.querySelector(".input-message-error").innerHTML ="El correo ingresado no corresponde a un usuario registrado";
        entro=true;
    }else{
        quitarAlerta(emailUsuario);
        console.log("ingreso")
    }
    if(repetido("pass", passwordUsuario.value)!=true || passwordUsuario.value===""){
        passwordUsuario.parentElement.classList.add("input-container--invalid");
        passwordUsuario.parentElement.querySelector(".input-message-error").innerHTML ="La contraseña ingresada es incorecta";
        entro=true;
    }else{
        quitarAlerta(passwordUsuario);
        console.log("ingreso")
    }
    if(entro===false){
        botonCerrar.style.display="none";
        ingreso.style.display="none";
        // window.location.href="../../home.html"
    }
})

const quitarAlerta= (input)=>{
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =" ";
}

let usuariosRegistrados=[];

let usuariEnLS=JSON.parse(localStorage.getItem('usuario'))
if(usuariEnLS){
    usuariosRegistrados=usuariEnLS;
}


const repetido = (dato, input)=>{
    let resultado=false
    for (const usuarios of usuariosRegistrados) {
        resultado=usuarios[dato].includes(input)
        if(resultado==true)
        break;
    }
    return (resultado)
}










    