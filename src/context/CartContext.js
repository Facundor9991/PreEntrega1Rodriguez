import{ useState, createContext, useContext} from "react";


const CarritoContext = createContext ()


export const useCarritoContext = () => useContext(CarritoContext)


export const CarritoProvider = (props) => { //forma de proveeer el contexto


     const [carrito, setCarrito] = useState ([])
   // agregar prod, quitar, precio, detalle, finalizar etc


   const isInCart = (id) => {

    return carrito.some(prod => prod.id === id) //V o F

   }


const addItem = (item, quantity) => {
    if(isInCart(item.id)) {
const indice = carrito.findIndex(prod => prod.id === item.id)
const aux = [...carrito]
aux[indice].quantity = quantity
setCarrito(aux)

    } else{
       const newItem = {
       ...item,
       quantity: quantity
        }
      /* const aux = carrito
        carrito.push(newItem)
        setCarrito(aux)*/ //una forma de hacerlo!
        setCarrito([...carrito, newItem])
    }
}

const removeItem = (id) => {

  setCarrito(carrito.filter(prod => prod.id !== id))
}
const emptyCart = () => {
  setCarrito ([])
}
const getItemQuantity = () => {
  return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
}
console.log(carrito)


const totalPrice = () => {
  return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
}

return(
  <CarritoContext.Provider value= {{carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity}}>

{props.children}
  </CarritoContext.Provider>


  )
}