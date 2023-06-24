var albergue_id = localStorage.getItem('albergue');

$.getJSON('http://44.203.242.36:5000/albergues', function(data) {

    function miFuncion() {
        var formulario = document.getElementById("form_albergue");
        formulario.action = "http://44.203.242.36:5000/actualizaralbergue/"+data.albergues[albergue_id].Id.toString();
    }
    setTimeout(miFuncion, 1000);
    
    var input=document.getElementById('1');
    input.value=data.albergues[albergue_id].Nombre.toString();
    var input=document.getElementById('2');
    input.value=data.albergues[albergue_id].Ciudad.toString();
    var input=document.getElementById('3');
    input.value=data.albergues[albergue_id].Direccion.toString();
    var input=document.getElementById('4');
    input.value=data.albergues[albergue_id].Telefono.toString();
    var input=document.getElementById('5');
    input.value=data.albergues[albergue_id].Disponibilidad.toString();
});