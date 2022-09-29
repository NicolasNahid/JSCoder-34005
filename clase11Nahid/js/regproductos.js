// Módulo para registrar productos nuevos en localStorage mediante arrays

const aID = [];
const aModelo = [];
const aPrecio = [];
const aCantidad = [];

const elementoBotonRegistrar = document.querySelector('#Enviar');

elementoBotonRegistrar.addEventListener('click', registrarProducto);
    function registrarProducto() {
    let ID = document.querySelector('#idProducto').value;
    let Modelo = document.querySelector('#modeloProducto').value;
    let Precio = document.querySelector('#precioProducto').value;
    let Cantidad = document.querySelector('#cantidadProducto').value;

    aID.push(ID);
    aModelo.push(Modelo);
    aPrecio.push(Precio);
    aCantidad.push(Cantidad);

    localStorage.setItem("id_productos", JSON.stringify(aID));
    localStorage.setItem("modelo_productos", JSON.stringify(aModelo));
    localStorage.setItem("precio_productos", JSON.stringify(aPrecio));
    localStorage.setItem("cantidad_productos", JSON.stringify(aCantidad));

    verProductos();
}

let miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit", validarFormulario);
;


function validarFormulario(e) {
    e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Formulario Enviado',
        showConfirmButton: false,
        timer: 1500
      });
}
    
    