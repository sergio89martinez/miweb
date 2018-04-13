function mensaje() {
    alert("hola");
}

function muestra_texto() {
    var elem=document.getElementById('parrafo1');
    elem.innerHTML="texto cambiado <strong>con negrita </strong>"; //innerHTML cambia el contenido de elem, osea del parrafo1
}

function concatenaNombre() {
    var nombre = document.getElementById('nombre').innerHTML;
    var apellidos = document.getElementById('apellido').innerHTML;
    
    document.getElementById('nombrecompleto').innerHTML = nombre + " " + apellidos;
}

function suma() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var sumar = parseInt(n1) + parseInt(n2);
          
  document.getElementById('resultado').value = sumar; //.value lo introduce en un input type... si quieres en un parrafo deberia ser .innerHTML 
    
}

function resta() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var restar = n1-n2;
      
  document.getElementById('resultado').value = restar;  
    
}

function mult() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var multiplica = parseInt(n1) * parseInt(n2);
          
  document.getElementById('resultado').value = multiplica; 
    
}

function div() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var divide = parseInt(n1) / parseInt(n2);          
  document.getElementById('resultado').value = divide;  
    
}

function exp() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var expon = Math.pow(parseInt(n1), parseInt(n2));  //tampuien se puede usar n1 ** n2, o n1^n2     
  document.getElementById('resultado').value = expon;
}

function par() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    if (parseInt(n1)%2 == 0) {
    document.getElementById('parrafo2').innerHTML = n1 + " Es Par";
                            }
    else  {
    document.getElementById('parrafo2').innerHTML = n1 + " Es Impar";
        }
    if (parseInt(n2)%2 == 0) {
    document.getElementById('parrafo3').innerHTML = n2 + " Es Par"; }
    else  {
    document.getElementById('parrafo3').innerHTML = n2 + " Es Impar";;
        }     
}

function muestracoches() {
    var coches = ["renaul", "peugeot", "Citroen", "ford"];
    
    var texto = "<ul>";
    
    for(i=0;i<coches.length;i++) {
        texto += "<li>" + coches[i] + "</li>";
    }
    texto += "</ul>";
    document.getElementById("coches").innerHTML = texto;
    alert(coches.join(" + "));
}

function mas80() {
    var texto ="<ul>";
    var contador = 0;
    var pesos =["80", "100", "73", "67", "93", "89", "81"];
    for(i=0;i<pesos.length;i++) {
        texto += "<li>" + pesos[i] + "</li>";
        if (pesos[i] > 80) {
            contador ++;
        }
        
    }
    texto += "</ul>";
    document.getElementById("mas80").innerHTML = texto+"<br> hay "+ contador +" personas que pesan mas de 80kg";
   
}

function notas() {
    var suspensos=0;
    var aptos=0;
    var bien=0;
    var nt=0;
    var sb=0;
    var mh=0;
    
    var notas = [3, 8, 7, 5, 4.5, 9, 8, 7, 3.8, 6, 10, 7, 7.5];
    for (i=0;i<notas.length;i++) {
        if (notas[i] < 5) {
            suspensos++;
        }
        else if (notas[i] >= 5 && notas[i] < 6) {
            aptos++;
        }
        else if (notas[i] >= 6 && notas[i] < 7) {
            bien++;
        }
        else if (notas[i] >= 7 && notas[i] < 8.5) {
            nt++;
        }
        else if (notas[i] >= 8.5 && notas[i] < 10) {
            sb++;
        }
        else if (notas[i] = 10) {
            mh++;
        }
    }
document.getElementById("notas").innerHTML =
"Notas: <br> <ul><li>Suspensos="+suspensos+
"</li><li>Aptos="+aptos+"</li><li>Bien:"+bien+"</li><li>Notable:"+nt+
"</li><li>Sobresaliente:"+sb+"</li><li>Matricula:"+mh+"<ul>";

}

function emple() {

    var empleados = [
        {nombre:"Marta", sueldo:1000, horas:50},
        {nombre:"Javier", sueldo:3500, horas:100},
        {nombre:"Pepe", sueldo:800, horas:100},
        {nombre:"Sandra", sueldo:950, horas:95},
        {nombre:"Teresa", sueldo:2700, horas:90}];
    
    var possueldomenor=0;

    for (i=0;i<empleados.length;i++) {
        if (empleados[i].sueldo < empleados[possueldomenor].sueldo){  
        possueldomenor=i;
    }
}
    var posmastrabaja=0;
    for (i=0;i<empleados.length;i++) {
        if (empleados[i].horas > empleados[posmastrabaja].horas) {
            posmastrabaja=i;
        }
    }
    var losdos ="";
    for (j=0;j<empleados.length;j++){
        if (empleados[posmastrabaja].horas == empleados[j].horas) {
             losdos += empleados[j].nombre+" y ";  
        }
    }
    losdos = losdos.substring(0, losdos.length - 2); //con esto quuito los dos ultimos caracteres a los dos
   var suma=0;
    for (i=0;i<empleados.length;i++) {
        suma+=empleados[i].sueldo;
    }
    media = suma / empleados.length;
  
   
  document.getElementById("emple").innerHTML = "quien menos cobra es "+empleados[possueldomenor].nombre +
  "<br>quien mas trabaja es "+losdos+"<br>El sueldo medio es "+media;

} 

    var ejemplo =[
      ["Javier",3000,100],
      ["Sergio",8000,150],
      ["Andres",900,80],
      ["Lucas",1500,150],
      ["Fran",400,20],
      ["Ana",2500,120],
      ["Natalia",4000,200],
      ["Pepa",1000,80],
      ["Lorena",2000,90],
      ["Pablo",2000,90]
    ];
