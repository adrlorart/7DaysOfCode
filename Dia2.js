let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let leng = prompt("Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${leng}!`);

let like = prompt(`¿Te gusta estudiar ${leng}? Responde con el número 1 para SÍ o 2 para NO.`);
if (like == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}else if (like == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}else{
    alert("Solo puedes seleccionar numero 1 o numero 2");
}