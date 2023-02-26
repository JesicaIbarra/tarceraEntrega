const emailUsuario=document.getElementById('email');
const passwordUsuario=document.getElementById('password');
const boton = document.querySelector('button');
let arrayUsuarios=[];
let  arrayPass=[]

boton.addEventListener("click", (event)=>{
    event.preventDefault();
    let entro=false;
   
    if(emailUsuario ==="administrador@admi.com" && passwordUsuario==="Admi1234"){
        window.location.href="../../index.html"
    }
    
    if(!usuarioRepetido(emailUsuario.value)){
        emailUsuario.parentElement.classList.add("input-container--invalid");
        emailUsuario.parentElement.querySelector(".input-message-error").innerHTML ="El correo ingresado no corresponde a un usuario registrado";
        entro=true;
    }else{
        quitarAlerta(emailUsuario);
        console.log("ingreso")
    }
    if(!passRepetido(passwordUsuario.value)){
        passwordUsuario.parentElement.classList.add("input-container--invalid");
        passwordUsuario.parentElement.querySelector(".input-message-error").innerHTML ="La contraseña ingresada es incorecta";
        entro=true;
    }else{
        quitarAlerta(passwordUsuario);
        console.log("ingreso")
    }
    if(entro===false){
        window.location.href="../../home.html"
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

const usuarioRepetido = (input)=>{
    for (let i=0; i<usuariosRegistrados.length; i++) {
        arrayUsuarios.push(usuariosRegistrados[i].email); 
    }
    return arrayUsuarios.includes(input);
}

const passRepetido = (input)=>{
    for (let i=0; i<usuariosRegistrados.length; i++) {
        arrayPass.push(usuariosRegistrados[i].pass); 
    }
    return arrayPass.includes(input);
}







    