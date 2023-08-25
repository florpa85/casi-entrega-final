
import { useEffect, useState } from 'react'
import {collection, getDocs, query, where} from "firebase/firestore"
import ItemList from './ItemList'
import {db} from "../main"
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'




const ItemListContainer = () => {

    const[products, setProducts] =useState([])

    const [titulo, setTitulo] = useState("Producto")

    const category = useParams().categoryId
    
   

    useEffect(()=>{
        

        const itemsCollection = collection(db, "Platos");
        const q = category ? query(itemsCollection, where("categoryId", "==", category)) : itemsCollection;
        

        getDocs(q).then((snapshot)=>{
           
            setTitulo(category)
            setProducts (snapshot.docs.map((doc)=> ({...doc.data(), 
                id: doc.id,
            })
             ))
        
        
    })}, [category])

    
    return (

   <div>
    <ItemList productos={products} titulo={titulo} /> 
    
   </div>
        
    
    )
}

export default ItemListContainer