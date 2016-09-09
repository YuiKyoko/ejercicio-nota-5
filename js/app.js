window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {

    	var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var genero = document.getElementById("genero").value;

		function Persona(nombre, edad, orientacion) {
		  this.nombre = nombre;
		  this.edad = edad;
		  this.genero = genero;
		  this.saludar = function() {
		  	if (edad>=18) {
		  		return "hola mi nombre es " + this.nombre  + " , tengo " + this.edad + " años " + " y soy mayor de edad. ";

		  	}
		  	else{
		  		return "hola mi nombre es " + this.nombre  + " , tengo " + this.edad + " años " + " y soy menor de edad. ";

		  	}
		  }	
	};
		var Persona1 =new Persona(nombre,edad,genero)
		var resultado =document.getElementById("resultado");
			resultado.innerHTML=Persona1.saludar();

  });
});
