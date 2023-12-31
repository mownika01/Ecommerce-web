import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import { styled } from "styled-components"
import {sliderItems} from "./data"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width:380px){
       display:none;
    }
`;
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    bottom: 0;
    margin:auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor:pointer;
    opacity: 0.5;
    z-index:2;
`;

const Wrapper = styled.div`
    height:100%;
    padding:30px;
    display:flex;
    transition:1.5s;
    transform:translateX(${props=> props.slideIndex * -100}vw);
   
`;
const Slide = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    align-items:center;
    background-color:#${props=> props.bg};
    
`;
const ImgContainer = styled.div`
    flex: 1;
    height:100%;
  
`;
const Image = styled.img`
    height:80%;
    padding-left:80px;
 
`;
const InfoContainer = styled.div`
    flex: 1;
    padding:50px;
`;

const Title = styled.h1`
   font-size:70px;
   font-family:'Verdana, Geneva, Tahoma, sans-serif';
`;
const Desc = styled.p`
    margin:50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing:3px;
`;
const Button = styled.button`
    padding:10px;
    background-color:transparent;
    font-size:20px;
    cursor: pointer;
`;

const Slider = () => {
     
    const [slideIndex,setSlideIndex] = useState(0);
    const handleclick = (direction)=>{
       if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
       }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
       }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleclick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
            <Slide bg={item.bg}>

                <ImgContainer>
                  <Image src={item.img}/>
                </ImgContainer>

                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
           ))}
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleclick("right")}>
           <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider;