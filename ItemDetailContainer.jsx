
import {useEffect, useState} from 'react'
import {doc, getDoc} from "firebase/firestore"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from "../main"

const ItemDetailContainer = () => {
   
const{id}= useParams()

   
const [product, setProduct]= useState([])


    useEffect(()=>{
       

        const oneItem = doc(db, "Platos",`${id}` )
        getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){
                const docs = snapshot.data()
                 setProduct({id: snapshot.id, ...docs})
            }
        })
    }, [id])


    return (
        <>
    
        <ItemDetail productos={product}/>
       
        </>
        
    )
    }

export default ItemDetailContainer