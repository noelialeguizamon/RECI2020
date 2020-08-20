/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/

//NOELIA LEGUIZAMON
function mostrar()
{
	
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let acumuladorSexoMasculino=0;
	let acumuladorSexoFemenino=0;
	let acumuladorEdad=0;
	let promedioEdad=0;
	let mujerMayorTemperatura=30;
	let nombreMujerMayorTemperatura;
	
	
	//pedir a 5 personas nombre temperatura sexo y edad y validarlo
	for(let i=0; i<5; i++)
	{
		nombre= prompt("ingresar Nombre:");
		temperatura= parseInt(prompt("ingrese temperatura:"));
		if(temperatura<32 || temperatura>42 || isNaN(temperatura)){
			temperatura= parseInt(prompt("temperatura mal ingresada. Ingrese temperatura:"));
		}
		sexo=prompt("ingrese sexo: f/m");
		if(sexo!="f" && sexo!="m"){
			sexo=prompt("Sexo incorrecto. Ingrese sexo: f/m");
		}
		edad=parseInt(prompt("ingrese edad:"));
		if(edad<0 || edad>110 || isNaN(edad)){
			edad=parseInt(prompt("Edad mal ingresada. Ingrese edad:"));
		}
						//alert("nombre "+ nombre+" temperatura: "+temperatura + " sexo "+sexo+" edad "+edad);

		//necesitamos un contador personas, segun su sexo
		if(sexo=="m"){
			acumuladorSexoMasculino++;
		}else
		{
			acumuladorSexoFemenino++;
		} 
			//acumulo las edades
			acumuladorEdad+=edad;

			//necesito saber cual es la mujer con mayor temperatura
		if(temperatura>mujerMayorTemperatura && sexo=="f"){
			mujerMayorTemperatura=temperatura;
			nombreMujerMayorTemperatura=nombre;

		}
		



	}	
		 //necesito saber el promedio de las edades.
		 promedioEdad = acumuladorEdad/5;
	
	
	//mostrar por console.log o document.write 
	console.log("A) Sexo femenino: " +acumuladorSexoFemenino+ "\nSexo masculino: "+acumuladorSexoMasculino);
	console.log("B) La edad promedio es "+promedioEdad);
	console.log("C) La mujer con mayor temperatura es: "+nombreMujerMayorTemperatura+ " y tiene: "+ mujerMayorTemperatura+"°");


