import React from 'react'
import styled from 'styled-components'
import Product from './product'
import {products} from './data'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    margin:20px;
`

const Products = () => {
  return (
    <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
        
    </Container>
  )
}

export default Products