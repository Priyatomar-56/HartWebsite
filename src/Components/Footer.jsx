import React from 'react'
import styled from 'styled-components';
const Footer = () => {
  return (
    <Container>
      <H1 id='about'>About <span style={{ color: "#23CFA4" }}>Us</span></H1>
      <Container2>
       <Para4 id='about'>
        At Hart, we are on a mission to save you from the dreaded paperwork that comes with managing your healthcare information.
        We know that the struggle is real, especially if you are a cancer patient, diabetes patient, pregnant woman, new mother, or someone living with a chronic disease.</Para4>
        <Para4 id='about'> But fear not, we have a solution that will make your life a whole lot easier!
        Our product is like a personal locker for your medical documents, except without the weird smell and dirty socks.</Para4>
        <Para4> We use the Unified Health Interface (UHI) to automatically upload your medical documents, so you can relax, and not have to worry about a thing.Plus, our product is super secure, so you can keep your private health data private.</Para4>
        </Container2>
        <ContainerLeft2>
        <Para3>Contact</Para3>
        <Para style={{color:"#919191"}}>Email:
        <A target="_blank" href="mailto:eshan@hartit.in">eshan@hartit.in</A> &nbsp; 
        </Para> 
      </ContainerLeft2>
      <Para2 style={{ color: "#919191" }}>Copyright © 2023 </Para2>
    </Container>
    
  )
}

export default Footer
const Container=styled.div`
    display:flex; 
    flex-direction:column;
    flex-wrap:nowrap; 
    @media screen and (max-width: 500px){
      flex-direction:column;
      margin-top:43px;  
    };
`
const Container2=styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
const H1 = styled.h1`
  color: white;
  text-align: center;
  margin-bottom:10px ;
`
const Para4 =styled.p`
  flex-direction: 'column';
  margin-left: 30px ;
  margin-right:30px;
  color: #eceaea;
  font-size:19px;
  padding: 10px;
    font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif; 
 @media screen and (max-width: 500px){
  font-size:14px;
};
  /* text-align: center; */

`
const Para=styled.p`
    color:white;
    margin-left:30px; 
    @media screen and (max-width: 500px){
      margin-left:15px; 
      font-size:12px;
      text-align:center; 
      margin-top:-12px;
    };
`
const ContainerLeft2=styled.div`
     display:flex; 
     flex-direction:column;
     flex-wrap:nowrap;
     margin-top:20px;
     margin-bottom:10px;
     @media screen and (max-width: 500px){
      flex-direction:column; 
      margin-top:5px; 
    };
`
const Para3=styled.p`
    color:#23CFA4;
    margin-left:30px;
    font-weight:900; 
    font-size: 30px;
    @media screen and (max-width: 500px){
      text-align:center;
      margin-left:15px;
    };
`
const A=styled.a`
    color:white;
    margin-left:30px;
    @media screen and (max-width: 500px){
      margin-left:5px;
    };
`
const Para2=styled.p`
    color:white;
    text-align:center;
    margin-top:20px;
    @media screen and (max-width: 500px){
      font-size:12px;
      text-align:center; 
    };
`