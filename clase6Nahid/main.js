class Celulares {
    constructor(modelo ,precio, cantidad) {
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
celularesArray.push(new Celulares("iPhone 13", "1200", "5"));
celularesArray.push(new Celulares("iPhone 12", "1100", "3"));
celularesArray.push(new Celulares("iPhone 11", "1000", "0"));



for (const celular of celularesArray)
    celular.enStock();

console.log(celularesArray);