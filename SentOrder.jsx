import {useContext, useState } from 'react'
import { useForm } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import {  collection, addDoc} from "firebase/firestore";
import {db} from "../main"

const SentOrder = () => {

  const [pedidoId, SetPedidoId] = useState("")

  const {cart, total, vaciarCarrito} = useContext(CartContext)

  const { register, handleSubmit} = useForm()

  const comprar = (datos) => {
    const pedido = {
      cliente : datos,
      productos : cart,
      total: total()
    }
    const pedidoN = collection(db, "pedidos")

    addDoc(pedidoN, pedido). then ((doc) => {
      SetPedidoId(doc.id)
      vaciarCarrito
    })

  }  
    if(pedidoId){
      return(
        <div>
          <h2>Gracias por tu compra!</h2>
          <p>Tu numero de pedido es : {pedidoId} </p>
        </div>
      )
    }

  return (
    <div>
      <h1>Finalizar Compra</h1>
      <form className='form' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Nombre'{...register("nombre")} />
        <input type="text" placeholder='E-mail'{...register("email")} />
        <input type="text" placeholder='Teléfono'{...register("telefono")} />

        <button type="submit">Comprar</button>

      </form>
    </div>
  )
}

export default SentOrder