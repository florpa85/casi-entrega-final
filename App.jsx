import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Conctact from './components/Conctact'
import ShoppingCartContext from "./context/ShoppingCartContext"
/* import SentOrder from "./components/SentOrder" */
import CartContent from "./components/CartContent"





const App=() => {
  

  return (
  <>
   
      

 {     <BrowserRouter>
      <ShoppingCartContext>
      
      
      <NavBar/>
      

      
      <Routes>
      
        <Route exact path= "/" element={<Home />}/>
        <Route exact path= "/about" element={<About />}/>
        <Route exact path= "/contact" element={<Conctact />}/>
        <Route exact path= "/cart" element={<CartContent/>}/>
        <Route exact path= "/category/:categoryId" element={<ItemListContainer />}/>
        <Route exact path= "/item/:id" element={<ItemDetailContainer />}/>
        {/* <Route exact path= "/formulario" element={<SentOrder/>}/> */}
        



      </Routes>
    </ShoppingCartContext>
         
    </BrowserRouter> } 
    </>
  )
}

export default App