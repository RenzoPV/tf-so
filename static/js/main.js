function mostrar1() {
    document.getElementById("tabla1").style.display="block";
    document.getElementById("but1").style.display="none";
}
function mostrar2() {
    document.getElementById("tabla2").style.display="block";
    document.getElementById("but2").style.display="none";
}
function cerrar1(){
    document.getElementById("tabla1").style.display="none";
    document.getElementById("but1").style.display="block";
}
function cerrar2(){
    document.getElementById("tabla2").style.display="none";
    document.getElementById("but2").style.display="block";
}

$.getJSON('http://3.208.71.114:5000/albergues', function(data) {
    
    var tbody = $('#albergues');
    for (var i = 0; i < data.albergues.length; i++) {
      var fila = $('<tr></tr>');
      fila.append('<td>' + data.albergues[i].Nombre + '</td>');
      fila.append('<td>' + data.albergues[i].Ciudad + '</td>');
      fila.append('<td>' + data.albergues[i].Direccion + '</td>');
      fila.append('<td>' + data.albergues[i].Telefono + '</td>');
      fila.append('<td>' + data.albergues[i].Disponibilidad + '</td>');
      fila.append('<td><button class="btn btn-success" onclick="editar_albergue('+i+')">Editar</button></td>');
      fila.append('<td><button class="btn btn-danger" onclick="eliminar_albergue('+data.albergues[i].Id+')">Eliminar</button></td>');
      tbody.append(fila);
    }

});

$.getJSON('http://3.208.71.114:5000/desahuciados', function(data) {
    
    var tbody = $('#desahuciados');
    for (var i = 0; i < data.desahuciados.length; i++) {
      var fila = $('<tr></tr>');
      fila.append('<td>' + data.desahuciados[i].Nombre + '</td>');
      fila.append('<td>' + data.desahuciados[i].Ciudad + '</td>');
      fila.append('<td>' + data.desahuciados[i].Telefono + '</td>');
      fila.append('<td>' + data.desahuciados[i].Edad + '</td>');
      fila.append('<td>' + data.desahuciados[i].Distrito + '</td>');
      fila.append('<td>' + data.desahuciados[i].Sexo + '</td>');
      fila.append('<td><button class="btn btn-success" onclick="editar_desahuciado('+i+')">Editar</button></td>');
      fila.append('<td><button class="btn btn-danger" onclick="eliminar_desahuciado('+data.desahuciados[i].Id+')">Eliminar</button></td>');
      tbody.append(fila);
    }

});

function editar_albergue(i){
    localStorage.setItem('albergue', i);
    window.location.href = 'templatess/edit-a.html';
}
function editar_desahuciado(i){
    localStorage.setItem('desahuciado', i);
    window.location.href = 'templatess/edit-d.html';
}

function eliminar_albergue(i){
    $.getJSON('http://3.208.71.114:5000/eliminaralbergue/'+i.toString(), function(data) {});
}
function eliminar_desahuciado(i){
    $.getJSON('http://3.208.71.114:5000/eliminardesahuciado/'+i.toString(), function(data) {});
}