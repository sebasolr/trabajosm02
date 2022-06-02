// // ejercicio 1
// let i = 1
// while (i <= 100) {
//   if (!(i %3) && !(i %5)) { 
//     console.log('FizzBuzz')
//   } else if (!(i %3)) { 
//     console.log('Fizz')
//   } else if (!(i %5)) { 
//     console.log('Buzz')
//   } else {
//     console.log('contando: ' + i)
//   }
//   i ++
// }
// // ejercicio 2

//     let opcion = 'si'
//     let us = 0
//     let com = 0
    
//     while (opcion == 'si') {
//       let opcion = parseInt(prompt('piedra = 0, papel = 1 o tijera = 2'))
//       let pc = Math.floor(Math.random() * 3)
//       if (opcion == 2 && pc == 1 || opcion == 1 && pc == 0 || opcion == 0 && pc == 2) {
//         us++
//         console.log('ud gana')
//       } else if (pc == 2 && opcion == 1 || pc == 1 && opcion == 0 || pc == 0 && opcion == 2) {
//         com++
//         console.log('pc gana')
//       } else {
//         console.log('empate')
//       }
//       console.log(pc)
//       opcion = prompt(' le gustaría volver a jugar? si o no ')
//       if (opcion == 'no') {
//         console.log('puntaje pc: ' + com+ ' puntaje us: ' + us)
//         console.log('gracias por jugar')
//         break
//       }
//     }

  let i = 1;

  while(i <= 100)
  {
    if(!(i%15)) {
       console.log("fizzbuzz")
      }
      else if (!(i%5))
      { 
        console.log("Buzz")
      }
      else if (!(i%3)) 
      { 
        console.log("fizz")
      }
        else{console.log(i)}
        i++
      }
    
