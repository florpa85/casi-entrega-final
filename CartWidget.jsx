import {useContext} from 'react'
import{Flex, Box, Spacer, Heading, HStack} from "@chakra-ui/react"
import icon from '../assets/icon.png'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  const itemsTotal = cart.reduce((acc,e)=> acc + e.qty,0 )
  

  return (
    <Flex>
      <HStack spacing='5px'>
        <Box size='5px'>
          <img src={icon} alt="icon" /> 
        </Box>
        <Box p="15px">{itemsTotal} </Box>
      </HStack>
    </Flex>
  )
}

export default CartWidget