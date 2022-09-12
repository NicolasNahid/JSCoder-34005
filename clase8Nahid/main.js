const stockGeneral = [];
class Celulares {
    constructor(id, modelo ,precio, cantidad) {
        this.id = id;
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
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
stockGeneral.push(new Celulares("1", "iPhone 13", "1200", "5"));
stockGeneral.push(new Celulares("2", "iPhone 12", "1100", "3"));
stockGeneral.push(new Celulares("3", "iPhone 11", "1000", "0"));



for (const celular of celularesArray)
    celular.enStock();


class Tablets {
    constructor(id, modelo ,precio, cantidad) {
        this.id = id;
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
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
stockGeneral.push(new Tablets("1", "Samsung A20", "500", "5"));
stockGeneral.push(new Tablets("2", "Samsung A30", "700", "3"));
stockGeneral.push(new Tablets("3", "Samsung A10", "400", "0"));



for (const celular of tabletsArray)
    celular.enStock();



class Pcs {
    constructor(id, modelo ,precio, cantidad) {
        this.id = id;
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
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
stockGeneral.push(new Pcs("1", "i7", "2400", "5"));
stockGeneral.push(new Pcs("2", "i5", "1800", "3"));
stockGeneral.push(new Pcs("3", "i3", "1300", "0"));



for (const celular of pcsArray)
    celular.enStock();



const controlStock = (cantCelulares, cantTablets, cantPC, opcion) => {
 
    cantCelulares = celularesArray.length;
    cantTablets = tabletsArray.length;
    cantPC = pcsArray.length;

    opcion = prompt("Ingrese 1 para ver el Stock de Celulares \nIngrese 2 para ver el Stock de Tablets \nIngrese 3 para ver el Stock de PC");

    while(opcion >=1 || opcion <=3){    
        switch (opcion) {
            case "1":
                if(cantCelulares > 0){
                    for (const cel of celularesArray) {
                        let contenedor = document.createElement("div");

                        contenedor.innerHTML = `<h3> MODELO: ${cel.modelo} </h3>
                                                <p> PRECIO: $${cel.precio} <p>
                                                <b> CANTIDAD: ${cel.cantidad}<b>`

                        document.body.appendChild(contenedor);
                    }
                    // return Swal.fire(`${JSON.stringify(celularesArray)}`);
                }
                else{
                    return alert("No hay unidades disponibles en Stock");
                }
            break;
        
            case "2":
                if(cantTablets > 0){
                    return Swal.fire(`${JSON.stringify(tabletsArray)}`);
                }
                else{
                    return alert("No hay unidades disponibles en Stock");
                }
            break;
        
            case "3":
                if(cantPC > 0){
                    return Swal.fire(`${JSON.stringify(pcsArray)}`);
                }
                else{
                    return alert("No hay unidades disponibles en Stock");
                }
            break;

            default:
                return alert("Producto no disponible");
            break;
        }
    }              
} 




const buscarNombre = () => {

    opcion = prompt("Ingrese el nombre del producto a buscar");
    const resultado = stockGeneral.find(item => {
        return item.modelo == opcion.toUpperCase()
    });
    Swal.fire(`${JSON.stringify(resultado)}`);
        
}



let botonControlStock = document.getElementById("boton1")
        botonControlStock.addEventListener("click", controlStock);

let botonBuscarNombre = document.getElementById("boton2")
        botonBuscarNombre.addEventListener("click", buscarNombre);






