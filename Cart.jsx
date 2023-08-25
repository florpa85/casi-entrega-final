import {useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import CartTotal from './CartTotal'
import ItemCount from './ItemCount'

const Cart = () => {
  const {cart, setCart}=
  useContext(CartContext)

   const borrarProducto=(id)=>{
    const foundId = cart.find((e)=> e.id === id)

    const NuevoCart = cart.filter((e)=>{
      return e !== foundId
    })

    setCart(NuevoCart)

  }
  return cart.map((p)=>{
    

    return (
      <>
      <div className='CartContent' key={p.id}>
         <img src={p.img} alt="" srcset="" />
         <h2>{p.name} </h2>
         <ItemCount p={p} qty ={p.qty} />
         <h4>subtotal: {p.price* p.qty} </h4>
         <h3 onClick={()=> borrarProducto(p.id)}>X</h3>
         
      </div>
      
       </> 
    )
    
  })


}
export default Cart