// Módulo para ver productos nuevos del localStorage en tabla

const verProductos = () => { 
    let tbody = document.querySelector('#tblProductos tbody');
    
    tbody.innerHTML = '';

    let aID = JSON.parse(localStorage.getItem("id_productos"));
    let aModelo = JSON.parse(localStorage.getItem("modelo_productos"));
    let aPrecio = JSON.parse(localStorage.getItem("precio_productos"));
    let aCantidad = JSON.parse(localStorage.getItem("cantidad_productos"));
    
    let nCantidadProductos = aID.length;

    for (let i = 0; i < nCantidadProductos; i++){
        
        let fila = document.createElement('tr');

        let celdaID = document.createElement('td');
        let celdaModelo = document.createElement('td');
        let celdaPrecio = document.createElement('td');
        let celdaCantidad = document.createElement('td');

        let nodoID = document.createTextNode(aID[i]);
        let nodoModelo = document.createTextNode(aModelo[i]);
        let nodoPrecio = document.createTextNode(aPrecio[i]);
        let nodoCantidad = document.createTextNode(aCantidad[i]);

        celdaID.appendChild(nodoID);
        celdaModelo.appendChild(nodoModelo);
        celdaPrecio.appendChild(nodoPrecio);
        celdaCantidad.appendChild(nodoCantidad);

        fila.appendChild(celdaID);
        fila.appendChild(celdaModelo);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaCantidad);


        tbody.appendChild(fila);
    }
};

// verProductos();