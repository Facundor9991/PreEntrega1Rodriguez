import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
//-------------enviar productos de la base de datos a itemlist




export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {category} = useParams()



    /*
  useEffect(() => {
    const promesa = (condicional) => new Promise((resolve, reject) => {
      if (condicional) {
        resolve(BDD)
      }
      reject("No posee los permisos necesarios")
    })
    promesa(true)
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setProductos(productosFiltrados)  
        //const items = <ItemList productos={productosFiltrados} />
        //setProductos(items)
      })
      .catch(error => console.error(error))
  }, [])*/




  useEffect(() => {
    if (category) { //consulta si ingreso una url
      fetch('../json/productos.json')
      .then(response => response.json())
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
        setProductos(productosFiltrados)

      })
    }
    else{
      fetch('./json/productos.json')
      .then(response => response.json())
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setProductos(productosFiltrados)

      })
    }
    
  }, [category])



  return (
    <div className="row">
      {<ItemList productos={productos} />}
    </div>
  )
}

