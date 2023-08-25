import React from 'react'
import Cart from './Cart'
import CartTotal from './CartTotal'
import {useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

const CartContent = () => {
  const{cart, setCart}= useContext(CartContext)

  const vaciarCarrito =()=>{
    setCart([])
  }
  
  return (
    <>
    <Cart/>
    <CartTotal/>
    <Link to={"/formulario"}>
                <button>finalizar compra</button>
              </Link>
              <h3 onClick={()=> vaciarCarrito()}>vaciar </h3>
    </>
  )
}

export default CartContent