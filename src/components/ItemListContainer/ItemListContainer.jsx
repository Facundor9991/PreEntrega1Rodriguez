import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Item } from "../Item/Item"
import { getProduct, getProducts } from "../../firebase/firebase"
//-------------enviar productos de la base de datos a itemlist


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {category} = useParams()


  useEffect(() => {
    if (category) { //consulta si ingreso una url
     getProducts()
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
        setProductos(productosFiltrados)

      })
    }
    else{
      getProducts()
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

