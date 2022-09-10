let nombre = "amigo"
nombre = prompt("Ingresa tu nombre");
alert(`Hola ${nombre}, bienvenido a esta CoderApp`);
console.log("Opa, venias a ver el codigo?? Te lo dejo en este link de github, no es necesario que lo mires por aca... Link:")
alert(`Piensa un numero ${nombre}`);
alert(`sumale 4`);
alert(`Multiplica ese resultado por 4`);
alert(`${nombre} restale 8 al resultado`);
alert(`divide ese resultado por 4`);
alert(`ahora restale tu numero ${nombre}`);
alert(`tu numero final es mmmmm ¿2? 🧙🏻‍♂️🕵🏻‍♀️`);

let continuar = prompt("Vamos por otra?? Responde Si o No");

if(continuar == "Si" || continuar == "SI" || continuar == "si"){
  alert(`Piensa un numero ${nombre}`);
  alert(`Multiplicalo por 2`);
  alert(`A su resultado sumale 9`);
  alert(`${nombre} Restale 3`);
  alert(`Dividilo entre 2`);
  alert(`Ahora restale el que pensaste ${nombre}`);
  alert(`El numero que te quedo es... 🧙🏻‍♂️🕵🏻‍♀️`);
  alert(`3`);
}

else if (continuar == "No" || continuar == "NO" || continuar == "no") {
   alert(`Gracias por jugar ${nombre}!! `);
}

else
{
 alert(`No es un dato valido ${nombre}!! 😡 `);
}

document.write(`Gracias por jugar <span class="span">${nombre}</span>`);
  

