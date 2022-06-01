// // let i =1;
// // while(i <= 100){
// //     console.log("contando " + i)
// //      i = i + 1
// // }
// // contador i
//  let j = 10030
//  while ( j < 10060){
//      console.log("vamos contando "+ j)
//      j += 1
//  }

// //  Ejercicio de clave secreta
//  let clave = 123456
//  let intento = prompt("ingrese su clave")
//  while (intento != clave){
//     alert("clave incorrecta"), intento = prompt("intentelo nuevamente")
//  };
//  alert("bienvenido a tu cuenta");

// //  ejercicio clase

// const minutos = 5
// const segundos = 60
// let minutero = 1
// let segundero = 0

// while(minutero <= minutos){
//     while(segundero < segundos){
//         console.log(minutero + " minutos, "+ segundero + " segundos.")
//         segundero++;
//     }
//     segundero = 0;
//     minutero++;
// }

// // cafeteria

// alert("bienvenid@ a mi cafe!")

// let numeromesas = 1;
// let totalmesas = 10;

// while (numeromesas <= 10 ){
//     alert("eres el cliente numero " + numeromesas + " pasa a la mesa " +numeromesas+"A" )
//    numeromesas++;
//    totalmesas--
//    alert("nos van quedando " + totalmesas + " mesas" )
// }
// alert("no nos quedan mas mesas, ven mas tarde")

// loop
while(true){
    let cantidad = parseInt(prompt ("elije un numero 0 para salir"))
    if (cantidad == "0"){
        alert("gracias por jugar")
        break
    }
 alert ("yo gano " + (cantidad+1));
 
}