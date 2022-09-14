//VARIABLES

let totalCompra = 0
let agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
let seguirComprando = true

const productos = []
const carritoDeCompras = []


// PRODUCTOS

class Producto {
    constructor(id, nombre, precio, img, desc = ' ') {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.desc = desc
    }
    desplegarProductos() {
        const card = `
            <div class="card">
                <p>${this.nombre}</p>
                <div>
                    <img class="imgProducto" src=${this.img} alt="foto del producto">
                </div>
                <div>
                    <p>${this.precio}</p>
                </div>
                <div class="btn-container">
                    <button id="001" class="btnAgregar">Agregar al carrito</button>
                </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
}

let camiseta1 = new Producto('01', 'Camiseta estampada', 700, './assets/camiseta01.jpg')
let gorro1 = new Producto('02', 'Gorro con onda', 300, './assets/gorro02.jpg')
let taza1 = new Producto('03', 'Taza a rayas', 200, './assets/taza03.jpg')
let llavero1 = new Producto('04', 'Llavero fantasma', 100, './assets/llavero04.jpg')


productos.push(camiseta1, gorro1, taza1, llavero1)

console.log(productos)
productos.forEach(e => {
e.desplegarProductos()
})

//ORDEN DE COMPRA 

while (seguirComprando === true) {
    if (agregarAlCarrito === 1) {
        totalCompra = totalCompra + camiseta1.precio
    } else if (agregarAlCarrito === 2) {
        totalCompra = totalCompra + gorro1.precio
    } else if (agregarAlCarrito === 3) {
        totalCompra = totalCompra + taza1.precio
    } else if (agregarAlCarrito === 4) {
        totalCompra = totalCompra + llavero1.precio
    } else {
        agregarAlCarrito = parseInt(prompt('Opción incorrecta, vuelve a intentarlo: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
        continue
    }

    decision = parseInt(prompt('¿Quisieras agregar otro producto? 1.si - 2.no'))
    if (decision === 1) {
        agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: 1-Camiseta 2-Gorro 3-Taza 4-Llavero'))
    } else if (decision === 2) {
        seguirComprando = false
    }
    else {
        agregarAlCarrito = parseInt(prompt('Opción incorrecta, vuelve a intentarlo: \n¿Quisieras agregar otro producto? 1.si - 2.no'))
        continue
    }
}

//FACTURACIÓN

alert('El total de su compra es: $' + totalCompra + ' Pero te espera un increible descuento.')

function precioFinal(monto) {
    let descuento = 0
    if (monto <= 500) {
        descuento = 5
    } else if (monto > 500 && monto <= 1500) {
        descuento = 7
    } else if (monto > 1500 && monto <= 2000) {
        descuento = 10
    } else {
        descuento = 12
    }

    let montoDescuento = monto * (descuento / 100)
    monto = monto - montoDescuento
    return monto
}

let precioUltimo = precioFinal(totalCompra)
alert('El precio final de tu compra es: $' + precioUltimo)