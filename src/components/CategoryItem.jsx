import { Link } from "react-router-dom";
import styled  from "styled-components"


const Cointainer = styled.div`
   flex:1;
   margin:3px;
   height:70vh;
   position:relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media only screen and (max-width:380px){
      height:20vh;
      background-position:center;
    }
`
const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;
const Title = styled.h1`
     color:white;
     margin-bottom:20px;
`;
const Button = styled.button`
     border:none;
     padding:10px;
     color:gray;
     font-weight:500;
     cursor:pointer;
`;

const CategoryItem = ({item}) => {

  return (
    <Cointainer>
      <Link to={`/products`}> 
       <Image src={item.img}/>
       <Info>
       <Title>{item.title}</Title>
       <Button>SHOP NOW</Button>
       </Info>
      </Link>
    </Cointainer>
  )
  
}

export default CategoryItem