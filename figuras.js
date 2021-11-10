//Codigo del cuadrado
console.group("Cuadrados")
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
*/
function perimetroCuadrado(lado){
     return lado*4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){ 
    return lado*lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
*/

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Circulos
console.group("Circulos");
/*const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
*/
function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = radio*2;
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();


//Interaccion con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    var input = document.getElementById("InputTriangulo_1");
    const value_1 = Number(input.value);
    input = document.getElementById("InputTriangulo_2");
    const value_2 = Number(input.value);
    input = document.getElementById("InputTriangulo_3");
    const value_3 = Number(input.value);
    const perimetro = perimetroTriangulo(value_1, value_2, value_3);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    var input = document.getElementById("InputTriangulo_3");
    const value_1 = Number(input.value);
    input = document.getElementById("InputTriangulo_height");
    const value_2 = Number(input.value);
    const area = areaTriangulo(value_1, value_2);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);
    const area = areaCirculo(value);
    alert(area);
}

function is_Isosceles(lado1, lado2, base){
    if(lado1 == lado2 || lado1 == base || lado2 == base){
        return true;
    }
    else{
        return false;
    }
}

function calcularAlturaTrianguloIsosceles(){
    var input = document.getElementById("InputTriangulo_1");
    const lado1 = Number(input.value);
    input = document.getElementById("InputTriangulo_2");
    const lado2 = Number(input.value);
    input = document.getElementById("InputTriangulo_3");
    const base = Number(input.value);
    if(is_Isosceles(lado1, lado2, base) == true){
        var a, b;
        if(lado1 == lado2){
            a = lado1;
            b = base;
        }
        else if(lado1 == base){
            a = lado1;
            b = lado2;
        }
        else{
            a = lado2;
            b = lado1;
        }
        alert(Math.sqrt((a*a)-((b*b)/4)));
    }
    else{
        alert("No es un triangulo isosceles");
        return 0;
    }
}
//calcularAlturaTrianguloIsosceles(25,25,30);