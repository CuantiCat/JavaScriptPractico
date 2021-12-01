var ingresos = 0;
var deudas = 0;
var capacidad = 0;

function capacidadDeEndeudamiento(ingresos, deudas){
    const porcentaje = (deudas/ingresos)*100;
    if(porcentaje > 40){
        return false;
    }
    return true;
}

function calcularCapacidadDeEndeudamiento(){
    const ingresos = document.getElementById("ingresos").value;
    const deudas = document.getElementById("gastos").value;
    const p = document.getElementById("capacidadEndeudamiento");
    const band = capacidadDeEndeudamiento(ingresos, deudas);
    if(band == true){
        const capacidadEndeudamiento = (ingresos-deudas)*0.4;
        p.innerText = "Tu capacidad de endeudamiento es de: " + capacidadEndeudamiento;
    }
    else{
        p.innerText = "No tienes capacidad de endeudamiento";
    }
}

/*function buttonAnimation(name){
    a=document.getElementById(name);
    a.style.background = "black";
    a.style.height= '25vw';
}

function buttonAnimationOut(name){
    a=document.getElementById(name);
    a.style.background = "";
    a.style.height= '20vw';    
}*/