let numero = parseInt(prompt("Ingrese un número"));

while(numero){
    for(let i = 0; i < 11; i++){
        let resultado = i * numero;
        let mensaje = `${numero} * ${i} = ${resultado}`
    alert(mensaje) 
    }break;
}