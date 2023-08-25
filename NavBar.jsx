import {React }from 'react'
import{Menu, MenuButton, MenuList, Button, MenuItem, Flex, Box, Spacer, Heading, HStack} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import {doc, getDoc, getDocs, getFirestore} from "firebase/firestore"


function NavBar() {

 

   

  
  return (
    <Flex bg='RGBA(0, 0, 0, 0.10)'>
        
          <Box p='5'>
            <Link to={"/"}>
            <img  src={logo} alt="logo" />
            </Link>
          </Box>

          <Spacer />
          
          <HStack spacing='35px'>
            <Box>
              <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Productos
                  </MenuButton>
                  <MenuList>
                  <MenuItem>
                   <Link to={`/category/pompeii`}>
                      Pompeii
                    </Link>
                  </MenuItem>
                      <MenuItem>
                      <Link to={`/category/limbadi`}>
                      Limbadi
                    </Link>
                      </MenuItem>
                      <MenuItem>
                      <Link to={`/category/mitte`}>
                      Mitte
                    </Link>
                      </MenuItem>
                  </MenuList>
              </Menu>
            </Box>

            <Spacer />

            <Box >
              <Link to={"/cart"}>
                <CartWidget/>
              </Link>
            </Box>
          </HStack>
            
    </Flex>
  )
}

export default NavBar