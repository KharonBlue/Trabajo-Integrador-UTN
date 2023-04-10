const url='https://jsonplaceholder.typicode.com/users';

function guardarUsuarios(data, status){
    let usuarios = data.map(user => `<li>${user.name}</li>`);
    $("#usuarios").html(usuarios);
}

console.log("antes");

$.get(url, guardarUsuarios);

console.log("despues");

