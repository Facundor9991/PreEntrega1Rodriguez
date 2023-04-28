import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Item } from "../Item/Item"
//-------------enviar productos de la base de datos a itemlist


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {category} = useParams()


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
      {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
  )
}

