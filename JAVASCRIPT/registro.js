const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const clave = document.getElementById("contra");
const clave1 = document.getElementById("contra2");
const form = document.getElementById("formulario");
const warnings = document.getElementById("warnings");
const enviado = document.getElementById("enviado");

function redirección(){
    location.href ="SingIn.html"
}

function alerta () { 
    swal({
        title: "Registrado con exito",
    
        icon: "success",
         button: "Continuar",
      }) }



form.addEventListener("submit", e=>{
    e.preventDefault()
   
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    entrar = false
    if (usuario.value.length <6){
        swal({
            title: "Usuario muy corto",
          });
    }
    if(!regexemail.test(email.value)){
    
        swal({
            title: "Email Incorrecto",
          });
      entrar = true
    }


    if (clave.value != clave1.value) {

        swal({
            title: "Las contraseñas no coinciden",
          });
        entrar = true
    }

    
   if(clave.value.length <1 || clave1.value.length <1){
    swal({
  title: "Formulario Incompleto",
       })

    this.submit();
 }

})







