//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDeSCuento(precio, descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDeSCuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}

//cupones

const cupones = {
    codigo: ["CUPONBONITO#13%", "CUPONlocO", "Qponsito129"],
    descuentoDelCupon: [13, 99, 5],
}

function verificarCupones(cupon){
    for(var i in cupones.codigo){
        if(cupones.codigo[i] == cupon){
            return i;
        }
    }
    return -1;
}

function onClickButtonCuponDiscount(){
    const price = document.getElementById("cuponPrice");
    const priceValue = price.value;
    const cupon = document.getElementById("cuponCode");
    const cuponValue = cupon.value;
    const valido = verificarCupones(cuponValue);
    const resultP = document.getElementById("resultPrice");
    if(valido == -1){
        resultP.innerText = "El cupon no es valido";
    }
    else{
        const precioConDescuento = calcularPrecioConDeSCuento(priceValue, cupones.descuentoDelCupon[valido]);
        resultP.innerText = "El cupon es valido por un total de: " + cupones.descuentoDelCupon[valido] + "% por lo que el precio total sera: " + precioConDescuento;
    }
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/