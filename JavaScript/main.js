//VARIABLES

const articulos = []
let carrito = []
const contenedorCarrito = document.getElementById('carrito-contenedor')

// ARTICULOS

class producto {
    constructor(id, nombre, precio, img, desc = ' ') {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.desc = desc
    }
    desplegarArticulos() {
        const tarjeta = `
            <div class="tarjeta">
                <p>$${this.nombre}</p>
                <div>
                    <img class="imgProducto" src=${this.img} alt="foto del producto">
                </div>
                <div>
                    <p>${this.precio}</p>
                </div>
                <div class="btn-container">
                    <button id=${this.id} class="btnAgregar">¡¡Quiero uno!!</button>
                </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += tarjeta
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const articuloEncontrado = articulos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => agregarAlCarrito(articuloEncontrado))

    }
}

let camiseta1 = new producto('01', 'Camiseta estampada', 700, './assets/camiseta01.jpg')
let gorro1 = new producto('02', 'Gorro con onda', 300, './assets/gorro02.jpg')
let taza1 = new producto('03', 'Taza a rayas', 200, './assets/taza03.jpg')
let llavero1 = new producto('04', 'Llavero fantasma', 100, './assets/llavero04.jpg')


articulos.push(camiseta1, gorro1, taza1, llavero1)

console.log(articulos)

articulos.forEach(e => {
    e.desplegarArticulos()
})

articulos.forEach(e => {
    e.agregarEvento()
})

function agregarAlCarrito(producto){
    console.log(producto)

    let enCarrito = carrito.find(prod => prod.id == producto.id)
    

    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        console.log(carrito)
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado,
        {...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
        
        console.log(carrito)
    }
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

//CARRITO

//const actualizarCarrito


//ORDEN DE COMPRA 

// while (seguirComprando === true) {
//     if (agregarAlCarrito === 1) {
//         totalCompra = totalCompra + camiseta1.precio
//     } else if (agregarAlCarrito === 2) {
//         totalCompra = totalCompra + gorro1.precio
//     } else if (agregarAlCarrito === 3) {
//         totalCompra = totalCompra + taza1.precio
//     } else if (agregarAlCarrito === 4) {
//         totalCompra = totalCompra + llavero1.precio
//     } else {
//         agregarAlCarrito = parseInt(prompt('Opción incorrecta, vuelve a intentarlo: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
//         continue
//     }

//     decision = parseInt(prompt('¿Quisieras agregar otro producto? 1.si - 2.no'))
//     if (decision === 1) {
//         agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: 1-Camiseta 2-Gorro 3-Taza 4-Llavero'))
//     } else if (decision === 2) {
//         seguirComprando = false
//     }
//     else {
//         agregarAlCarrito = parseInt(prompt('Opción incorrecta, vuelve a intentarlo: \n¿Quisieras agregar otro producto? 1.si - 2.no'))
//         continue
//     }
// }

// //FACTURACIÓN

// alert('El total de su compra es: $' + totalCompra + ' Pero te espera un increible descuento.')

// function precioFinal(monto) {
//     let descuento = 0
//     if (monto <= 500) {
//         descuento = 5
//     } else if (monto > 500 && monto <= 1500) {
//         descuento = 7
//     } else if (monto > 1500 && monto <= 2000) {
//         descuento = 10
//     } else {
//         descuento = 12
//     }

//     let montoDescuento = monto * (descuento / 100)
//     monto = monto - montoDescuento
//     return monto
// }

// let precioUltimo = precioFinal(totalCompra)
// alert('El precio final de tu compra es: $' + precioUltimo)