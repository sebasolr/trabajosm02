let variable = prompt("ingresa un numero:")
if(variable % 2 == 0){alert("el numero es par")}
else{(alert("el numero es impar"))};
const jubilacionMujer = 60;
const jubilacionHombre = 65;
const hombre = 1;
const mujer = 2;
let nombre = prompt("Hola  cual es tu nombre:");
let sexo = prompt("porfavor indica tu sexo (1) si eres hombre (2)si eres mujer.");
sexo = parseInt(sexo);
let edadjubi = prompt("indica tu edad");
edadjubi = parseint(edadjubi);
let tiempoFaltanteM = (jubilacionMujer - edadjubi);
let tiempoFaltanteH = (jubilacionHombre - edadjubi);
// if(sexos == sexo && jubilacionMujer <= edadjubi){
//     alert("Felicitaciones "+ nombre + " te puedes jubilar")
// }
// else if(sexos !== sexo && jubilacionHombre <= edadjubi){
//     alert("felicidades "+ nombre +" puedes o estas jubilado")
// }
// else{
//     alert("lo siento no puedes jubilarte aun")
// };
// if(sexos == sexo && jubilacionMujer > edadjubi){
//     alert("te faltan "+ tiempoFaltanteM + "anos para jubilarte")
// }
// else if(sexos != sexo && edadjubi < jubilacionHombre){
//     alert("te faltan " + tiempoFaltanteH + "anos para jubilarte")
// }
// else{"nothing"};

if (mujer == sexo && edadjubi >= jubilacionMujer){
    alert("gracias linda  por consultarnos, efectivamente puedes jubilarte")
}
else if(mujer == sexo && edadjubi < jubilacionMujer){
    alert("lo siento linda aun no puedes jubilarte te faltan "+ tiempoFaltanteM + " anos para hacerlo")
}
else if(hombre == sexo && edadjubi >= jubilacionHombre){
    alert("Felicitaciones estimado, puedes jubilarte")
}
else{
    alert("lo siento estimado pero no puedes jubilarte, te faltan "+ tiempoFaltanteH + " anos para hacerlo")
}