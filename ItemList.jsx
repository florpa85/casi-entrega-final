import React from 'react'
import Item from './Item'



const ItemList = ({productos, titulo}) => {
  console.log(productos)

  return (
    <>
      <h2 className='titulo'>{titulo} </h2>
      <div>
      {productos.map((p) =>
          
          <Item   
                producto ={p}
                key={p.id} />
                
                
          
      )
      
      }
      </div>
   
    
    </>
  )
}

export default React.memo(ItemList);