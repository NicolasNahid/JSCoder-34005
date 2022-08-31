// let cantCelulares = 0;
// let cantTablets = 0;
// let cantPC = 0;

let cantCelulares = parseInt(prompt("Ingrese la cantidad de Celulares")) 
let cantTablets = parseInt(prompt("Ingrese la cantidad de Tablets"))
let cantPC = parseInt(prompt("Ingrese la cantidad de PC"))

// const controlStock = () => {
//     opcion = parseInt(prompt("Ingrese 1 para ver el Stock de Celulares \n Ingrese 2 para ver el Stock de Tablets \n Ingrese 3 para ver el Stock de PC"))
//     switch
// }

const controlStock = (cantCelulares, cantTablets, cantPC, opcion = prompt("Ingrese 1 para ver el Stock de Celulares \n Ingrese 2 para ver el Stock de Tablets \n Ingrese 3 para ver el Stock de PC")) => {
 switch (opcion) {
    case "1":
      return cantCelulares;
      break;

    case "2":
      return cantTablets;
      break;

    case "3":
      return cantPC;
      break;

    default:
      return "No se encuentra en Stock";
      break;
 }
} 

alert(controlStock())