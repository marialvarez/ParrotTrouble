function calcular() {
    var hora = parseInt(document.getElementById("hora").value);
    var talking = document.getElementById("talking");
    var salida = document.getElementById("salida");
    var salida2 = document.getElementById("salida2");
    
	if (0<hora<11 && talking.checked) {
        salida.innerHTML = "1" ;
        salida2.innerHTML = "¡Estamos en problemas!";
        
    } else {
        salida.innerHTML = "0" ;
        salida2.innerHTML = "¡No estamos en problemas!";
    }
}
    
    
    
