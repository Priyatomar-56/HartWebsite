import React from 'react'
import styled from 'styled-components';
const Footer = () => {
  return (
    <Container>
        <ContainerLeft2>
        <Para3>Contact</Para3>
        <Para style={{color:"#919191"}}>Email:
        <A target="_blank" href="mailto:eshan@hartit.in">eshan@hartit.in</A> &nbsp;, 
        <A target="_blank" href='mailto:anurag@hartit.in'>anurag@hartit.in</A></Para>
        </ContainerLeft2>
        <Para2 style={{color:"#919191"}}>Copyright © 2023 </Para2>
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