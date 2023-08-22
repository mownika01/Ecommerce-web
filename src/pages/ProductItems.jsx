import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Products from '../components/products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;
`
const Filter = styled.div`
     margin: 20px;

     @media only screen and (max-width:380px){
       margin:0px 10px;
       display: flex;
       flex-direction: column;
    }
`
const FilterText = styled.span`
   margin-right:20px;
   font-size:20px;
   font-weight: bold;

   @media only screen and (max-width:380px){
       margin:0px;
    }
`
const Select = styled.select`
    margin-right:20px;
    padding:10px;

    @media only screen and (max-width:380px){
       margin:10px 0px;
    
    }
       
`
const Option = styled.option`
   
`



const ProductItems = () => {
    
  return (
    <Container>
        <Offer />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product:</FilterText>
            <Select name='color'>
            <Option selected>Color</Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Pink</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
        </Select>
        <Select name='size'>
            <Option selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
            </Filter>
            <Filter><FilterText>Sort Product:</FilterText>
            <Select>
                <Option>Newest</Option>
                <Option>Price(asc)</Option>
                <Option>Price(desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer />
    </Container>
  )
}

export default ProductItems;