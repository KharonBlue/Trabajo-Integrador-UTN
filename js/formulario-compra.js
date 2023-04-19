$(document).ready(function() {

    //Validamos los datos
    function validarInformaciónPersonal(){
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        if(nombre.length < 3){
            alert("La longitud de nombre no puede ser menor a 3");
            return true;
        }
        if(!email.includes('@') || email.length < 5){
            alert("El email es invalido")
            return true;
        }
        return false;        
    };

    function validarContacto(){
        let telefono = $("#telefono").val();
        let direccion = $("#direccion").val();
        if(telefono.length < 10){
            alert("La longitud del telefono no puede ser menor a 10");
            return true;
        }
        return false;
    }
    
    function validarTarjeta(){
        let tarjeta = $("#tarjeta").val();
        let vencTarjeta = $("#tarjeta-venc").val();
        if(tarjeta.length < 16){
            alert("Número de tarjeta invalido");
            return true;
        };
        return false;

    }

    $(".siguiente").click(function(){
        if(validarInformaciónPersonal == false){
            const actual = $(".seccion.activa");
            const siguiente = actual.next();
            actual.removeClass("activa");
            siguiente.addClass("activa");
            actual.addClass("validada");
        }
        

    });

    $(".anterior").click(function anteriorPaso(){
        const actual = $(".seccion.activa");
        const anterior = actual.prev();

        actual.removeClass("activa");
        anterior.addClass("activa");
    });

    $(".confirmar").click(function(){
        validarDatos();
    });
    

    function imprimirComprobante(){};
  });
  