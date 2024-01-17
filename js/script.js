function validarIngreso(){


let usuarioGuardado = "antopesce";
let claveGuardada = "anto1234";


let nombreUsuario;
let clave;

let credencialesCorrectas = false;

// while para validar el usuario y la contraseña

while (!credencialesCorrectas) {
    nombreUsuario = prompt("Por favor ingrese su usuario");
    console.log(nombreUsuario)
    clave = prompt("Por favor ingrese su clave");
    console.log(clave);

    // condicional para validar el usuario y la contraseña
    if (nombreUsuario === usuarioGuardado && clave === claveGuardada) {

        alert("Hola " + nombreUsuario + ". Bienvenidx a la tienda");

        credencialesCorrectas = true; 
    } else {

        alert("Usuario o contraseña incorrectos. Por favor inténtelo nuevamente.");

    }

}
}


//para llamar a la funcion 
validarIngreso()












