
import { useRef } from 'react'
import { useCarritoContext } from '../../context/CartContext'
import { Link, useNavigate} from 'react-router-dom'
import { createOrdenCompra, deleteOrdenCompra, getProduct, updateProduct } from '../../firebase/firebase'
import { toast } from 'react-toastify'
export const CheckOut= () => {


    const datForm = useRef()
    const {carrito, totalPrice, emptyCart} = useCarritoContext()

let navigate = useNavigate()
    const consultarForm = (e) => {
        //consultar formulario
        e.preventDefault()

        const datosFormulario = new FormData(datForm.current)
        const cliente = Object.fromEntries(datosFormulario)
        console.log(cliente)


        const aux = [...carrito]
        //recorrer carrito y descontar stock
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodbbd => {
                if(prodbbd.stock >= prodCarrito.quantity) {
                    prodbbd.stock -= prodCarrito.quantity
                    updateProduct(prodbbd.id, prodbbd)
                } else{
                    
                }
            })
        })
        
        
        const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio}));

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-AR', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone})).then(ordenCompra => {
            toast.success( `Gracias por tu compra! 🛒🥳 su total es de $:${totalPrice()} con su id de compra ${ordenCompra.id} en breves nos contactaremos para el envio🧾 `, {
                
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            //deleteOrdenCompra("fR3PjxB2cuP8M0UDGwwF")
            emptyCart()
            e.target.reset() //resetar formulario
            navigate("/")

        })
        .catch(error => {
            console.error(error)
        })

          
}
    
  return (
    <>
    {
        carrito.length === 0 ?
            <>
                <h2>Para finalizar compra debe tener productos en el carrito</h2>
                <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
            </>
            :
            <div className="container divForm" >
                <form onSubmit={consultarForm} ref={datForm}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Repetir Email</label>
                        <input type="email" className="form-control" name="emailRepetido" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">DNI</label>
                        <input type="number" className="form-control" name="dni" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Numero telefonico</label>
                        <input type="number" className="form-control" name="celular" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Direccion</label>
                        <input type="text" className="form-control" name="direccion" />
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </form>
            </div>

    }

</>
  )
 }
