import {useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartTotal = () => {
    const {cart} =useContext(CartContext)

    const total = cart.reduce((acc,e)=> acc + e.price* e.qty, 0)

    
  return (
    <div>
        <h3>Total: {total}$ </h3>
    </div>
  )
}

export default CartTotal