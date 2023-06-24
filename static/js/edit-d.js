var desahuciado_id = localStorage.getItem('desahuciado');

$.getJSON('http://44.203.242.36:5000/desahuciados', function(data) {

    function miFuncion() {
        var formulario = document.getElementById('form_desahuciado');
        formulario.action = 'http://44.203.242.36:5000/actualizardesahuciado/'+data.desahuciados[desahuciado_id].Id.toString();
    }
    
    setTimeout(miFuncion, 1000);
    
    var input=document.getElementById('1');
    input.value=data.desahuciados[desahuciado_id].Nombre.toString();
    var input=document.getElementById('2');
    input.value=data.desahuciados[desahuciado_id].Ciudad.toString();
    var input=document.getElementById('3');
    input.value=data.desahuciados[desahuciado_id].Telefono.toString();
    var input=document.getElementById('4');
    input.value=data.desahuciados[desahuciado_id].Edad.toString();
    var input=document.getElementById('5');
    input.value=data.desahuciados[desahuciado_id].Distrito.toString();
    var input=document.getElementById('6');
    input.value=data.desahuciados[desahuciado_id].Sexo.toString();
});