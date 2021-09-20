//alert("primer javascrip pero en el .js");

var nombre="Pepito Perez";
var edad = 15;
var peso=74.5;
var masculino =true;
var materias;

/*var numero1= prompt("Ingresar numero 1");
var numero2= prompt("Ingresar numero 2");
var resultado = parseInt(numero1) + parseInt(numero2);
alert("el resultado de la suma es "+resultado);

document.write("<center>");
document.write("<h6>el resultado de la suma es "+resultado +"</h6>"); //resultado pequeño al final de la pagina
document.write("<p class='fs-1'>el resultado de la suma es "+resultado+"</p>");// resultado con diseño grande. */

document.write("<center>");
document.write("<h1>Ejemplo Arreglos</h1>");
document.write("<br />");
var materias = ["ingles","frances","matematicas",77458,false];
document.write(materias.join("<br />")); //MOSTRAR LO DE MATERIAS EN UN RENGLON APARTE CADA item
document.write(materias.sort()); //ordenar alfabetica 
document.write("<br />");

materias[materias.length]="fisica";
document.write("<br />");
document.write("la materia en la posicion 5 es "+materias[5]); //fisica
document.write("<br />");
materias.pop(); //el pop borra la ultima posicion del arreglo
document.write("<br />");
document.write("la materia en la posicion 5 es "+materias[5]); //no hay nda
document.write("<br />");
document.write("<br />");

document.write("<h1>Ciclo</h1>");
for(i=1; i<10; i+=3){
    document.write("<br /> la i va en el valor "+i);
}

document.write("<h1>while</h1>");
var j=4
while(j<10){
    document.write("<br /> la i va en el valor "+j);
    j++;
}

document.write("<h1>Do-while</h1>");
var k=4;
do{
    document.write("<br /> la i va en el valor "+k);
    k++;
}while(k<10);

document.write("<br />");
document.write("<br />");
document.write("<br />");

function sumar(){
    alert("Ingreso a funcion");
    var numero_1_formulario = document.getElementById("numero1").value;
    var numero_2_formulario = document.getElementById("numero2").value;
    var sumatoria = parseInt(numero_1_formulario) + parseInt(numero_2_formulario);
    alert("sumatoria "+sumatoria);
}

function sumar1(numero_1, numero_2){
    var sumatoria = parseInt(numero_1)+parseInt(numero_2);
    return sumatoria;
}

var sumatoria_global = sumar1(54,21);
//alert("sumatoria_global "+sumatoria_global);

var nombre= "Pepito perez";
/*alert("nombre originalmente "+nombre);
alert("nombre a mayusculas "+nombre.toUpperCase()); //Pone el nombre en mayusculas
alert("nombre a minusculas "+nombre.toLowerCase()); //Pone el nombre en minusculas
alert("letra en posicion 8 "+nombre.charAt(8)); //busca la posicion (8)
alert("letra i que posicion esta "+nombre.indexOf(" ")); //mira en que posicion esta la letra (x)*/

/*var espacio_nombre = nombre.indexOf(" ");
alert("espacio esta en posicion "+nombre.indexOf(" ")); //busca el espacio
alert("espacio_nombre "+espacio_nombre);
alert("substring "+nombre.substring(0, 6)); //La palabra que está dentro de la posicion 0 hasta la 6
alert("apellido "+nombre.substring(espacio_nombre)); //palabra que está despues del espacio

alert("nombre "+nombre.substring(0, espacio_nombre)); //nombre que va desde 0 hasta antes del espacio.*/

var elementos_tipo_parrafo = document.getElementsByTagName("p");
//alert("mostrar etiqueta 0 "+elementos_tipo_parrafo[7].innerHTML);

var parrafo1 = document.getElementById("parrafo_pruebas1");
parrafo1.innerHTML ="cambiar parrafo"; //cambiar el valor del parrafo

var resultado_resta=4546;
//funcion global
function operaciones_matematicas(){
    var boton_sumar = document.getElementById("boton_sumar");
    boton_sumar.setAttribute("class", "btn btn-success");    

    var numero_1_formulario = document.getElementById("numero1").value;
    var numero_2_formulario = document.getElementById("numero2").value;
    var formulario = document.getElementById("formulario_suma");
    var datos_ingresados_correctamente=  true; 

    if(formulario.numero1.value=="")
    {
        formulario.numero1.setAttribute("class", "form-control is-invalid"); //si no es correcto es invalido en Boostrap
        var parrafo_numero1 = document.getElementById("parrafo_validar_numero1"); //validar
        parrafo_numero1.innerHTML ="Error - Debe ingresar numero 1";
        parrafo_numero1.setAttribute("class", "text-danger"); //cambiar de color como es invalido colocar boton rojo
        datos_ingresados_correctamente = false;
    }
    else 
    {
        formulario.numero1.setAttribute("class", "form-control is-valid");
        var parrafo_numero1 = document.getElementById("parrafo_validar_numero1");
        parrafo_numero1.innerHTML ="Numero 1 se ingreso correctamente";
        parrafo_numero1.setAttribute("class", "text-success"); //si esta bien success
    }

    if(formulario.numero2.value=="")
    {        
        formulario.numero2.setAttribute("class", "form-control is-invalid");
        var parrafo_numero2 = document.getElementById("parrafo_validar_numero2");
        parrafo_numero2.innerHTML ="Error - Debe ingresar numero 2";
        parrafo_numero2.setAttribute("class", "text-danger");
        datos_ingresados_correctamente= false;
    }
    else 
    {
        formulario.numero2.setAttribute("class", "form-control is-valid");
        var parrafo_numero2 = document.getElementById("parrafo_validar_numero2");
        parrafo_numero2.innerHTML ="Numero 2 se ingreso correctamente";
        parrafo_numero2.setAttribute("class", "text-success");
    }
    
    if(datos_ingresados_correctamente== true){
        suma1();
        resta();
        multiplicacion();
        boton_sumar.setAttribute("class", "btn btn-success");        
    }

    //funcion locales
    function suma1(){
        var sumatoria = parseInt(numero_1_formulario) + parseInt(numero_2_formulario);
        var div_suma = document.getElementById("resultado_suma");
        div_suma.innerHTML ="el resultado de la Suma es "+sumatoria;
    }
    function resta(){
        var sumatoria = parseInt(numero_1_formulario) - parseInt(numero_2_formulario);
        var div_resta = document.getElementById("resultado_resta");
        div_resta.innerHTML ="el resultado de la Resta es "+sumatoria;
    }
    function multiplicacion(){
        var sumatoria = parseInt(numero_1_formulario) * parseInt(numero_2_formulario);
        var div_multiplicacion = document.getElementById("resultado_multiplicacion");
        div_multiplicacion.innerHTML ="el resultado de la multiplicacion es "+sumatoria;
    }
}

var etiqueta_nueva = document.createElement("h1"); //crear una etiqueta
var contenido_titulo_nuevo = document.createTextNode("Titulo dinamico"); //crear un texto nuevo
etiqueta_nueva.appendChild(contenido_titulo_nuevo); //a la etiqueta le agrego el contenido (157 en 156)
document.getElementById("caja_dinamica").appendChild(etiqueta_nueva); //en donde se va a colocar la etiqueta. (se refleja 158)

document.write("<br />");
document.write("<br />");
document.write("<br />");
document.write("<br />");

