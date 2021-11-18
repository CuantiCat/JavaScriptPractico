function calcularMediaAritmetica(lista1){
    const sumaLista = lista1.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista1.length;
    return promedioLista;
}

function ordenarLista(listaOrdenar){
    let aux;
    for(var i = 0; i < listaOrdenar.length; i++){
        for(var j = 0; j  < listaOrdenar.length; j++){
            if(listaOrdenar[j+1] < listaOrdenar[j]){
                aux = listaOrdenar[j];
                listaOrdenar[j] = listaOrdenar[j+1];
                listaOrdenar[j+1] = aux;
            }
        }
    } 
}

let lista = [];
function add(){
//var element = document.getElementById("list");
var element = document.getElementById("elemento")
var elementValue = element.value;
var list = document.getElementById("list");
lista.push(parseFloat(elementValue));
ordenarLista(lista);
list.innerText = "Lista actual:" + lista;
}

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

function calcularMediana(){
    var pMediana = document.getElementById("mediana");
    var mitadLista = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        //console.log(promedioElemento1y2);
        mediana = promedioElemento1y2;
    }
    else{
        mediana = lista[mitadLista];
    }
    if(lista.length>0){
        pMediana.innerText = "La mediana es: " + mediana;
    }
    else{
        pMediana.innerText = "No hay elementos en la lista";
    }
}
