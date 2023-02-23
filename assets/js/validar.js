export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  }

  const tipoDeErrores =["valueMissing","typeMismatch","patternMismatch","customError"];

  const mensajesDeErrores = {
    nombre: {
        valueMissing: "Esté campo NOMBRE no puede estar vacio"
        },//valueMissing determina si el input esta vacio o no
    apellido: {
        valueMissing: "Esté campo APELLIDO no puede estar vacio"
        },
    nacimiento: {
        valueMissing: "Esté campo FECHA DE NACIMIENTO no puede estar vacio",
        customError:"Para registrarse debe tener almenos 18 años de edad"//verifica que se cumpla las condiciones de verificacion de edad ya creadas
        },
    email: {
        valueMissing: "Esté campo E-MAIL no puede estar vacio",
        typeMismatch: "El correo no es valido"//verifica que el correo electronico este escrito correctamente es decir con @ y .com
        },
    password: {
        valueMissing: "Esté campo PASSWORD no puede estar vacio",
        patternMismatch: "Debe contener al menos una mayuscula, una minuscula, un numero del 0 al 9, minimo 6 caracteres maximo 12 y no puede contener caracteres especiales"//verifica que las contraseñas se coloquen correctamente con las expresiones regulares
        },  
  }

  function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = " ";
    tipoDeErrores.forEach((error) =>{
        if(input.validity[error]){
            console.log(error);
            console.log(input.validity[error])
            mensaje = mensajesDeErrores[tipoDeInput][error];
        }
    });
    return mensaje;
  }

  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };

const validarNacimiento = (input)=>{
    const fechaCliente = new Date (input.value);
    let mensaje ="";
    if (!validacionMayorDeEdad(fechaCliente)){
        mensaje ="Para registrarse debe tener almenos 18 años de edad"
    }

    input.setCustomValidity(mensaje);
}

const validacionMayorDeEdad = (fecha)=>{
    const fechaActual = new Date();
    const diferenciaDeFechas = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
    return(diferenciaDeFechas<= fechaActual);
}

//import { valida } from "./validar.js";


// const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//   input.addEventListener("blur", (input) => {
//     valida(input.target);
//   });
// });


// 