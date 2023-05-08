
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBcu-CQkUXpEyvH97aoVISwNAiSVNMW-gU",
  authDomain: "missbanana-e42f0.firebaseapp.com",
  projectId: "missbanana-e42f0",
  storageBucket: "missbanana-e42f0.appspot.com",
  messagingSenderId: "1092705001706",
  appId: "1:1092705001706:web:599337e7c9acfeb9207793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//CONSULTAR BASE DE DATOS

const bdd = getFirestore ()

/* 
CREATE --> POST
READ --> GET
UPDATE --> PUT
DELETE --> DELETE
*/

//CRUD PRODUCTOS

export const createProducts = async () => {
  const promise = await fetch ('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod) => {

    await addDoc(collection(bdd, "productos"),{
         nombre: prod.nombre,
         marca: prod.marca,
         modelo: prod.modelo,
         idCategoria: prod.idCategoria,
         stock: prod.stock,
         precio: prod.precio,
         img: prod.img 
    })
  })
} 


export const getProducts = async() => {
  const prods = await getDocs (collection(bdd, "productos"))

const items = prods.docs.map(prod => {
  return{...prod.data(), id: prod.id}
})

return items

}

export const getProduct = async(id) => {
  const prod = await getDoc(doc(bdd, "productos", id))
  const item = {...prod.data(), id: prod.id}
  return item 
}

export const updateProduct = async(id, info) => {
   await updateDoc(doc(bdd, "productos", id), info)


}

export const deleteProduct = async (id) =>{
  await deleteDoc(doc(bdd, "productos", id))
  
}



// CREATE Y READ ORDEN-DE-COMPRA

export const createOrdenCompra = async(cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(bdd, "ordenCompra"),{
      cliente: cliente,
      items: carrito,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id }
  return item

}

export const deleteOrdenCompra = async (id) => {
  await deleteDoc(doc(bdd, "ordenCompra", id))
}

