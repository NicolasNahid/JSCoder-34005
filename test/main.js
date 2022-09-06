class Celulares {
    constructor(id, modelo ,precio, cantidad) {
        this.id = parseInt(id);
        this.modelo = modelo.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.disponible = true;
    }
    enStock() {
        if (this.cantidad > 0) {
            this.disponible = true;
        }else{
            this.disponible = false;
        }
    }
}

const celularesArray = [];
celularesArray.push(new Celulares("1", "iPhone 13", "1200", "5"));
celularesArray.push(new Celulares("2", "iPhone 12", "1100", "3"));
celularesArray.push(new Celulares("3", "iPhone 11", "1000", "0"));



for (const celular of celularesArray)
    celular.enStock();

console.log(celularesArray);

class Tablets {
    constructor(id, modelo ,precio, cantidad) {
        this.id = parseInt(id);
        this.modelo = modelo.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.disponible = true;
    }
    enStock() {
        if (this.cantidad > 0) {
            this.disponible = true;
        }else{
            this.disponible = false;
        }
    }
}

const tabletsArray = [];
tabletsArray.push(new Tablets("1", "Samsung A20", "500", "5"));
tabletsArray.push(new Tablets("2", "Samsung A30", "700", "3"));
tabletsArray.push(new Tablets("3", "Samsung A10", "400", "0"));



for (const celular of tabletsArray)
    celular.enStock();

console.log(tabletsArray);


class Pcs {
    constructor(id, modelo ,precio, cantidad) {
        this.id = parseInt(id);
        this.modelo = modelo.toUpperCase();
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.disponible = true;
    }
    enStock() {
        if (this.cantidad > 0) {
            this.disponible = true;
        }else{
            this.disponible = false;
        }
    }
}

const pcsArray = [];
pcsArray.push(new Pcs("1", "i7", "2400", "5"));
pcsArray.push(new Pcs("2", "i5", "1800", "3"));
pcsArray.push(new Pcs("3", "i3", "1300", "0"));



for (const celular of pcsArray)
    celular.enStock();

console.log(pcsArray);


const controlStock = (cantCelulares, cantTablets, cantPC, opcion) => {
 
    cantCelulares = celularesArray.length;
    cantTablets = tabletsArray.length;
    cantPC = pcsArray.length;

    opcion = prompt("Ingrese 1 para ver el Stock de Celulares \nIngrese 2 para ver el Stock de Tablets \nIngrese 3 para ver el Stock de PC");

    while(opcion >=1 || opcion <=3){    
        switch (opcion) {
            case "1":
                if(cantCelulares > 0){
                    return Swal.fire(`${JSON.stringify(celularesArray)}`);
                }
                else{
                    return "No hay unidades disponibles en Stock"
                }
            break;
        
            case "2":
                if(cantTablets > 0){
                    return Swal.fire(`${JSON.stringify(tabletsArray)}`);
                }
                else{
                    return "No hay unidades disponibles en Stock"
                }
            break;
        
            case "3":
                if(cantPC > 0){
                    return Swal.fire(`${JSON.stringify(pcsArray)}`);
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
} 

controlStock()