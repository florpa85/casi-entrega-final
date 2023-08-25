import {useContext,useState} from 'react'
import{Menu, MenuButton, MenuList, Button, MenuItem, Flex, Box, Spacer, Heading, HStack, Container} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount=({p, qty}) => {

  const {cart, setCart}= useContext(CartContext)

  const sumar =()=>{
    const productDuplicado =cart.find((item)=> item.id === p.id)
    productDuplicado.qty !==1 &&
      setCart(cart.map((item)=> (item.id === p.id ? {...p, qty : productDuplicado.qty+ 1}: item)))
    
}
  const restar =()=>{
    const productDuplicado =cart.find((item)=> item.id === p.id)
    productDuplicado.qty !==1 &&
      setCart(cart.map((item)=> (item.id === p.id ? {...p, qty : productDuplicado.qty- 1}: item)))
      }

    

   
  
   
  
  return (
    <Flex>
          <HStack maxW='400px'>
                                <Button onClick={sumar}>+</Button>
                                <Spacer/>
                                <Box>{p.qty}</Box>
                                <Spacer/>
                                <Button onClick={restar}>-</Button>
                            </HStack>
     
    </Flex>
  )
}

export default ItemCount