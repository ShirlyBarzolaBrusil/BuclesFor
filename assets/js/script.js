//Conociendo el ciclo For
function saludar(){
   var nombre=document.getElementById("nombre").value;
var saludo="Hola";
for(var i=1;i<=3;i++){//i++ --> significa que el i se va incrementar en 1
    var mensaje=`${saludo} ${nombre} ${i}`;
    alert(mensaje);
} 
}

function saludar1(){
    var nombre=document.getElementById("nombre").value;
    var mensaje="";
    var saludo=["Buenos días", "Buenas tardes","Buenas noches"];
    for(var i=0;i<saludo.length;i++){//i++ --> significa que el i se va incrementar en 1
    mensaje += `${saludo[i]} ${nombre} <br>`;
    document.getElementById("resultado").innerHTML=mensaje;
    //alert(mensaje);
    }  
}
function bucle2(){
    let number=0;
    while(number<=5){
        console.log(number);
        number++;  //number=number+1 es un incremento en 1
    }
}
function pares(){
    let numero=2;
    while(numero<=100){
        document.getElementById("resultado").innerHTML+=`${numero} - `
        numero=numero+2;
    }
}
function impares(){
    let numero=1;
    while(numero<=100){
        document.getElementById("resultado").innerHTML+=`${numero} - `
        numero=numero+2;
    }
}
function numeros(){
    let numero=1;
    while(numero<=12){
        document.getElementById("resultado").innerHTML+=`${numero} - `
        numero++;
    }
}
function paises(){
    const paises=['Francia','España','Finlandia'];
    let i=0;
    while(paises.length>i){
        console.log(paises[i])
        i=i+1;//i++
    }
}
/*let i=5;
do {
    i=i+1;
    console.log(i);
} while (i<5);

while(i<5){
    i=i+1;
    console.log(i);
}*/
let dato;
const patron= /hola/;
const patron2= /[0-9]+/;
do {
    dato=prompt('ingrese un texto:');
} while (!patron2.test(dato));
alert("tu expresion cumple con la condicion");


