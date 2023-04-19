import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Componentes

//import { ItemCount } from './ItemCount/ItemCount.jsx'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { CheckOut } from './Checkout/CheckOut'
export const App = () => {
  //Aqui irian los hooks
  //<ItemCount ValInicial={5} stock={15} />
  return (
    <div>
      <>
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/product/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        
      </Routes>
      </BrowserRouter>
      </>
    </div>
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