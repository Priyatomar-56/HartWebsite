import React from 'react'
import styled from 'styled-components';
import Logo from '../Images/pic2.png';
const Footer = () => {
  return (
    <Container>
        <ContainerLeft>
        <Image src={Logo} alt='image1'></Image>
        <Heading>Hart</Heading>
        <Para style={{color:"#919191"}}>Copyright © 2023 </Para>
        </ContainerLeft>
        <ContainerLeft2>
        <Para3>Contact</Para3>
        <Para style={{color:"#919191"}}>Email</Para>
        <Para>eshan@hartit.in</Para>
        <Para>anurag@hartit.in</Para>
        </ContainerLeft2>
        <ContainerLeft3>
        <Para3>Legal</Para3>
        <Para style={{color:"#919191"}}>Terms of Service</Para>
        <Para style={{color:"#919191"}}>Privacy Policy</Para>
        </ContainerLeft3>
    </Container>
  )
}

export default Footer
const Container=styled.div`
    display:flex; 
    flex-direction:row;
    flex-wrap:nowrap; 
    @media screen and (max-width: 500px){
      flex-direction:column;
      margin-top:3px;  
    };
`
const ContainerLeft=styled.div`
     display:flex; 
     flex-direction:column;
`
const Image=styled.img`
  height: 44px;
  width:44px;
  margin-top: 30px; 
  margin-left: 40px;
  @media screen and (max-width: 500px){
    height: 54px;
  width:54px;
  align-self:center;
  margin-left: -10px;
    };
  
`
const Heading=styled.h1`
    color:white;
    margin-left:30px; 
    font-size:30px;
    margin-top:15px;
    font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
    @media screen and (max-width: 500px){
      font-size:30px;
      margin-left:-10px; 
      text-align:center;
    };

`
const Para=styled.p`
    color:white;
    margin-left:30px; 
    @media screen and (max-width: 500px){
      margin-left:15px; 
      text-align:center; 
    };
`
const ContainerLeft2=styled.div`
     display:flex; 
     flex-direction:column;
     flex-wrap:nowrap;
     margin-top:20px;
     @media screen and (max-width: 500px){
      flex-direction:column; 
      margin-top:5px; 
    };
`
const ContainerLeft3=styled.div`
     display:flex; 
     flex-direction:column;
     flex-wrap:nowrap;
     margin-top:20px;
     @media screen and (max-width: 500px){
      flex-direction:column; 
      margin-top:5px; 
    };
`
const Para3=styled.p`
    color:white;
    margin-left:30px;
    font-weight:600; 
    @media screen and (max-width: 500px){
      text-align:center;
      margin-left:15px;
    };
`