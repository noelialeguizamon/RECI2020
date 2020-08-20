/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let cantidadPersonas;

	do {
		nombre = prompt("ingrese nombre del titular:");
		lugar = prompt("ingrese un lugar: ");
		if (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt("Lugar mal ingresado. Ingrese un lugar: ");
		}

		temporada = prompt("ingrese temporada:");
		if (temporada != "otono" && temporada != "invierno" && temporada != "primavera" && temporada != "verano") {
			temporada = prompt("ERROR. ingrese temporada:");
		}
		cantidadPersonas = parseInt(prompt("ingrese numero de personas:"));
		if (cantidadPersonas < 1 && isNaN(cantidadPersonas)) {
			cantidadPersonas = parseInt(prompt("Ingrese Numero Correcto de personas:"));
		}

		//a)el lugar más elegido
		//b)el nombre de titular que lleva más pasajeros.
		//c)el promedio de personas por viaje,  que viajan en invierno
		
	}

}
