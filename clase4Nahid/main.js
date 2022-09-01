const controlStock = (cantCelulares, cantTablets, cantPC, opcion) => {
 
    cantCelulares = parseInt(prompt("Ingrese la cantidad de Celulares"));
    cantTablets = parseInt(prompt("Ingrese la cantidad de Tablets"));
    cantPC = parseInt(prompt("Ingrese la cantidad de PC"));

    opcion = prompt("Ingrese 1 para ver el Stock de Celulares \nIngrese 2 para ver el Stock de Tablets \nIngrese 3 para ver el Stock de PC");


    switch (opcion) {
        case "1":
            if(cantCelulares > 0){
                return `Hay ${cantCelulares} unidades en Stock`;
            }
            else{
                return "No hay unidades disponibles en Stock"
            }
        break;
    
        case "2":
            if(cantTablets > 0){
                return `Hay ${cantTablets} unidades en Stock`;
            }
            else{
                return "No hay unidades disponibles en Stock"
            }
        break;
    
        case "3":
            if(cantPC > 0){
                return `Hay ${cantPC} unidades en Stock`;
            }
            else{
                return "No hay unidades disponibles en Stock"
            }
        break;
    
        default:
            return "Producto no disponible";
        break;
        }

} 

alert(controlStock())