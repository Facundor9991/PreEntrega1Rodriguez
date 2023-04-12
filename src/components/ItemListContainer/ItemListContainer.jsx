import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
//Consulto a mis productos de mi Base de datos y se los envio a ItemList
const BDD = [
  {
    "id": 1,
    "idCategoria": 1,
    "nombre": "Notebook",
    "marca": "Lenovo",
    "modelo": "Y510P",
    "precio": 60000,
    "stock": 5,
    "img": ".img/ferrari.jpg"
  },
  {
    "id": 2,
    "idCategoria": 2,
    "nombre": "Celular",
    "marca": "Xiomi",
    "modelo": "Mi-9",
    "precio": 3500,
    "stock": 20,
    "img": "img/xiaomi-mi-9.jpg"
  },
  {
    "id": 3,
    "idCategoria": 3,
    "nombre": "Smart Tv",
    "marca": "Novatech",
    "modelo": "50D1U",
    "precio": 57000,
    "stock": 15,
    "img": "img/smart-tv-novatech.jpg"
  },
  {
    "id": 4,
    "idCategoria": 4,
    "nombre": "Camara ",
    "marca": "iQual",
    "modelo": "C40",
    "precio": 8000,
    "stock": 30,
    "img": "img/camara-iqual.jpg"
  },
]


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])



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
    fetch('./json/productos.json')
      .then(response => response.json())
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setProductos(productosFiltrados)

      })



  }, [])

  return (
    <div className="row">
      {<ItemList productos={productos} />}
    </div>
  )
}

