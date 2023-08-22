import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
    display:flex;
    margin-left:20px;
    @media only screen and (max-width:380px){
       flex-direction:column;
    }
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    margin-right:50px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
   margin:20px 0px;
`
const IconContainer = styled.div`
    display:flex;
`
const Icons = styled.div`
    color:white;
    height:40px;
    border-radius:50%;
    width:40px;
    margin-right:15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:15px;
    background-color:#${props=> props.color};
`
const Center = styled.div`
    flex:1;
    padding-bottom:20px;
   
    @media only screen and (max-width:380px){
       display: none;
    }
`
const Title = styled.h3`
    margin-bottom:30px ;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
    
`
const ListItem = styled.li`
    margin-bottom:10px;
    width:50%;
`
const Right = styled.div`
    flex:1;
    padding:0px 20px;

    @media only screen and (max-width:380px){
      padding:30px 0px;
    }
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`
  

const Footer = ()=>{
    return(
        <Container>
            <Left>
                <Logo>SHOP.</Logo>
                <Desc>The upside of online shopping at TATA CLiQ online store, is that you'll save on time and most importantly
                     money with TataCliq offers. It's as simple as comparing products and prices online before making the right buy.
                </Desc>
                <IconContainer>
                    <Icons color='3B3999'>
                        <Facebook />
                    </Icons>
                    <Icons color='E4405F'> 
                        <Instagram />
                    </Icons>
                    <Icons  color='55acee'>
                        <Twitter />
                    </Icons>
                    <Icons  color='e60023'>
                        <Pinterest />
                    </Icons>
                </IconContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>876,ASD round Tamilnadu</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+91 90876 54345</ContactItem>
                <ContactItem><Email style={{marginRight:"10px"}}/>conatactshop@gmail.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer;