let nombre = 'areli'
nombre = prompt('¿como te llamas?')
alert('bienvenido ' + nombre + '¡empecemos a programar!')


 // 1 es piedra  2 es papel  3 es tijera

 let jugador = 0;
 let pc = 2;
 jugador = prompt("elige 1 para piedra 2  para papel y 3 para tijera ");
 // alert('elegiste ' + jugador)

 if (jugador == 1) {
   alert("elegiste piedra 🪨");
 } else if (jugador == 2) {
   alert("elegiste papel 🧻");
 } else if (jugador == 3) {
   alert("elegiste tijera ✂️");
 } else {
   alert("elegiste ¡PERDER!😒");
 }

 if (pc == 1) {
   alert("pc elegiste 🪨");
 } else if (pc == 2) {
   alert("pc elegiste papel🧻");
 }else if (pc == 3){
   alert('pc elegiste tijera ✂️')
 }else{
   alert('elegiste perder')
 }

 // COMBATE

 if (pc == jugador)
     alert("empate 🥴");

 