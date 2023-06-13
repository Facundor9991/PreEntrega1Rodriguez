import './App.css'
import 'react-toastify/dist/ReactToastify.css';
//router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// react tostify

import { ToastContainer } from 'react-toastify';





//Componentes

//import { ItemCount } from './ItemCount/ItemCount.jsx'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { CheckOut } from './Checkout/CheckOut'
import { Cart } from './Cart/Cart';
import { Inicio } from './Inicio/Inicio'

import { createProducts,} from '../firebase/firebase'
export const App = () => {
  //Aqui irian los hooks
  //<ItemCount ValInicial={5} stock={15} />
  //-------------ELEMENTOS SACADOS DE ROUTES <Route path='/' element={<ItemListContainer/>} />

  //createProducts()

  return (
    
      <>
      
      <BrowserRouter>

      
      <Navbar />
      <ToastContainer/>
        <Inicio />
      <Routes>
      <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/product/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      

      </BrowserRouter>

      </>
      


  )
}





/*
export const App = () => {
  /*
    HTML      JSX
    class -> className
    <input> -> <input />
    `${valor}` -> {valor}
    style = "nombreProp: valor" -> style= {{"nombreProp": "valor"}}
    mayor parte de las propiedades -> camelCase
  
  const valor = 5
  return (
    <div className='divGeneral' style={{ backgroundColor: "red" }}>
      <h1>Hola!</h1>
      <p>{valor}</p>
      <input type="text" />
    </div>
  )
}*/