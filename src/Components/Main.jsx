import React from 'react'
import './Main.css'
import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Phone from '../Images/pic3.png';
import CardSection from './CardSection';
import Header from '../Components/Header';
const Container1=styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap: nowrap;
  @media screen and (max-width: 500px){
    flex-direction:column;
};
`
const Container2=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: nowrap;
  margin-top:5px;
  @media screen and (max-width: 500px){
    flex-direction:column;
};
`
const Heading2=styled.div`
   color:white;
  font-size: 51px;
  margin-top:20px;
  margin-left:30px;
 font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif; 
  @media screen and (max-width: 500px){
  font-size: 30px;
  font-weight:600;
  text-align:left;
    margin-top:10px;
};
`
const ContainerLeft=styled.div`
margin-top:30px;
  display:flex;
  flex-direction:column;
  width:660px; 
  height:545px;
  margin-left:30px;
  @media screen and (max-width: 500px){
    width:360px; 
  height:200px;
  margin-left:0px;
};
`
const ContainerRight=styled.div`
   width:550px; 
  height:545px;
  @media screen and (max-width: 500px){
    width:250px; 
  height:245px;
  margin-top:150px;
  margin-left:30px;
};
`
const Para=styled.p`
  font-size:19px;
  color:white;
  margin-top:50px;
  margin-left:30px;
  @media screen and (max-width: 500px){
  margin-top:30px;
  height:231px;
  font-size:14px;
};
`
const Button1=styled.a`
  height:45px; 
  width:255px; 
 background-color:#23CFA4;
  margin-top:20px;
  margin-left:30px;
  border-radius:25px;
  padding:10px 1px;
  text-align: center;
  text-decoration: none;
  color:black;
  font-weight:400;
  @media screen and (max-width: 500px){
  border-radius:20px;
  align-self:center;
  text-align: center;
  margin-left:-17px;
  margin-top:30px;
  margin-bottom:20px;
  padding:5px 5px;
};
`
const Image1=styled.img`
  height:418px; 
  width:398px;
  margin-top:15px;
margin-left:87px;
  @media screen and (max-width: 500px){
    height:316px; 
  width:284px;
  margin-top:45px;
  margin-left:32px;
};
`
const Main = () => {
  return (
    <Container1>
      <Header/>
        <Container2>
          <ContainerLeft>
            <Heading2>Store All Your <span style={{color:"#23CFA4"}}>Medical    Documents</span> Online<span style={{color:"#23CFA4"}}>.</span></Heading2>
            <Para>Also track your <span style={{color:"#23CFA4"}}>family's medical history </span>and share your prescriptions and test reports with doctors <span style={{color:"#23CFA4"}}>securely in one-click.</span></Para>
            <Button1 target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfMp7EwAKtKYbvzCsNgXdwqGk-PHm1hPhpuZuvwWj-s81rQqg/viewform" style={{fontSize:'17px'}}>Register for early access </Button1>
            <AiOutlineArrowRight className='arrow' style={{color:"#151514"}}/>
          </ContainerLeft> 
          <ContainerRight>
            <Image1 src={Phone} alt='Image2'></Image1>
          </ContainerRight>
        </Container2>
      <CardSection/>
    </Container1>
    
  )
}

export default Main