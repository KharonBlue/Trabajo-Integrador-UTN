const urlNombre = "https://jsonplaceholder.typicode.com/users";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";

$(document).ready(function () {
  // Obtener la lista de usuarios
  $.get(urlNombre, guardarUsuarios);

  // Colocar el nombre de usuario en el carrousel
  function guardarUsuarios(data, status) {
    let usuarios = data.map((user) => user.name);
    for (i = 0; i <= 3; i++) {
      $(`#slide-${i}`).html(usuarios[i]);
    }
  }
  // Obtener la lista de comentarios
  $.get(urlComentarios, guardarComentario);
  // Colocar el comentario en el carrousel
  function guardarComentario(data, status) {
    let comentarios = data.map((comment) => comment.body);
    for (i = 0; i <= 3; i++) {
      $(`#comentario-${i}`).html(comentarios[i]);
    }
  }

  // Obtengo el archivo filtro.html para cargarlo e inmediatamente lo oculto asignandole la clase d-none
  $.get("filtro.html", function (filtro) {
    $(".filtro").addClass("d-none");
    $(".filtro").html(filtro);
  });
  $(".all-products").click(function () {
    $(".filtro").removeClass("d-none");
    $("#carouselExampleCaptions").addClass("d-none");
    $(".acercade").addClass("d-none");
    $(".cuerpo").addClass("d-none");
    $(".contacto").addClass("d-none");
  });

  $(".inicio").click(function () {
    $(".filtro").addClass("d-none");
    $("#carouselExampleCaptions").removeClass("d-none");
    $(".acercade").addClass("d-none");
    $(".cuerpo").removeClass("d-none");
    $(".contacto").addClass("d-none");
  });

  // Obtengo el archivo acerca-de.html para cargarlo a traves de ajax
  $.get("acerca-de.html", function (acercade) {
    $(".acercade").html(acercade);
    $(".acercade").addClass("d-none");
  });
  $("#acercade").click(function () {
    $(".acercade").removeClass("d-none");
    $("#carouselExampleCaptions").addClass("d-none");
    $(".filtro").addClass("d-none");
    $(".cuerpo").addClass("d-none");
    $(".contacto").addClass("d-none");
  });
    // Obtengo el archivo contacto.html para cargarlo a traves de ajax
    $.get("contacto.html", function (contacto) {
        $(".contacto").html(contacto);
        $(".contacto").addClass("d-none");
      });
      $("#contact").click(function () {
        $(".contacto").removeClass("d-none");
        $("#carouselExampleCaptions").addClass("d-none");
        $(".filtro").addClass("d-none");
        $(".cuerpo").addClass("d-none");
      });

    // Obtengo el archivo comprar.html para cargarlo a traves de ajax
    $.get("comprar.html", function (comprar) {
        $(".comprar").html(compra);
        $(".comprar").addClass("d-none");
      });
      $("#comprar").click(function () {
        $(".compra").removeClass("d-none");
        $("#carouselExampleCaptions").addClass("d-none");
        $(".filtro").addClass("d-none");
        $(".cuerpo").addClass("d-none");
      });
    
});





        
