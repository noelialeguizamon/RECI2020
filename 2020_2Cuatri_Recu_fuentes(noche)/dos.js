/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{//Noelia Leguizamon
  
  let marca;
  let precio;
  let pesoEnKilos;
  let tipo;
  let resp = "si";
  let acumularPeso = 0;
  let marcaMasCaraLiq;
  let pesoMasLivianoSol=1000;
  let marcaMasLivianaSol;
  let precioMasCaraLiq=0;
  let marcaSolidos;
  let marcaLiquidos;



 while(resp=="si") {
    marca = (prompt("ingrese una marca:"));
    precio=parseInt(prompt("ingrese un precio: "));
    if(precio<1 && isNaN(precio)){
      precio=parseInt(prompt("Precio mal ingresado. Ingrese un precio: "));
    }
    pesoEnKilos = parseFloat(prompt("ingrese el peso en kilogramos: "));
    if(pesoEnKilos<1 && isNaN(pesoEnKilos)){
      pesoEnKilos = parseFloat(prompt("Peso mal ingresado. Ingrese el peso en kilogramos: "));
    }
    tipo = prompt("ingrese el tipo: solido/liquido");
    if (tipo != "solido" && tipo != "liquido") {
      tipo = prompt("Tipo Equivocado. Ingrese el tipo: solido/liquido");
    }
    resp = prompt("desea ingresar otro producto?: si/no");

    if(marca=="solido"){
      marcaSolidos=marca;
    }else{
      marcaLiquidos=marca;
    }

    //a)informar el peso total de la compra.
    acumularPeso+=pesoEnKilos;
    
    //b)la marca del más caro de los líquidos
    if(tipo=="liquido" && precio>precioMasCaraLiq){
      precioMasCaraLiq=precio;
      marcaMasCaraLiq=marcaLiquidos;
    }
    //c)la marca del más liviano de los sólidos
    if(tipo=="solido" && pesoEnKilos>pesoMasLivianoSol ){
      pesoMasLivianaSol=pesoEnKilos;
      marcaMasLivianaSol=marcaSolidos;

    }


  }
  
  console.log("A)el peso total: "+acumularPeso);
  console.log("B)Marca mas cara de liquidos: "+marcaMasCaraLiq+" su precio: " + precioMasCaraLiq);
  console.log("C)Marca mas liviana es "+ marcaMasLivianaSol +" Su peso es: "+ pesoMasLivianoSol );
}
