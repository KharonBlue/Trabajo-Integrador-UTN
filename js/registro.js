$(document).ready(function() {

    //Validamos los datos
    function validarCuenta(){
        let usuario = $("#usuario").val();
        let email = $("#email").val();
        let contraseña = $("#contraseña").val();
        let confirmarContraseña = $ ("#contraseña1").val();
        if(!email.includes('@') || email.length < 5){
            alert("El email es invalido")
            return true;
        }
        return false;        
    };

    $(".btn btn-primary registrarse").click(function(){
        if(validarCuenta == false){
            alert("Cuenta creada con exito")
        }
    });
  });
  
  