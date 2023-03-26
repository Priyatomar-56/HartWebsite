import React from 'react'
import './Main.css'
import Logo from '../Images/pic2.png';
import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Phone from '../Images/pic3.png';
import CardSection from './CardSection';
const Image=styled.img`
  height: 64px;
  width:64px;
  margin-top: 30px; 
  margin-left: 40px;
  @media screen and (max-width: 500px){
    height: 54px;
  width:54px;
  margin-top: 15px; 
  margin-left: 20px;
};
`
const Heading1=styled.h1`
  color:white;
  font-size: 45px;
  margin-left: 40px;
  margin-top:-10px;
  font-weight:600;
 font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
 @media screen and (max-width: 500px){
    font-size: 35px;
    margin-left: 20px;
  margin-top:-30px;
};
`
const Container1=styled.div`
  padding: 30px 0px;
  display:flex;
  flex-direction:column;
  flex-wrap: nowrap;
  @media screen and (max-width: 500px){
    padding: 15px 0px;
};
`
const Container2=styled.div`
  padding: 30px 0px;
  display:flex;
  flex-direction:row;
  flex-wrap: nowrap;
  @media screen and (max-width: 500px){
    flex-direction:column;
    /* border:2px solid red; */
};
`
const Heading2=styled.div`
   color:white;
  font-size: 51px;
  margin-top:100px;
  font-weight:600;
  height:90px;
  width:550px;
  /* border:2px solid yellow; */
  margin-left:-110px;
 font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif; 
  @media screen and (max-width: 500px){
    height:140px;
  width:250px;
  font-size: 36px;
  font-weight:600;
    /* border:2px solid yellow; */
    margin-left:-85px;
    margin-top:40px;
};
`
const ContainerLeft=styled.div`
margin-top:30px;
  display:flex;
  width:660px; 
  height:545px;
  @media screen and (max-width: 500px){
    width:360px; 
  height:245px;
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
  /* border:2px solid green; */
};
`
const Para=styled.p`
  font-size:19px;
  color:white;
  height: 40px;
  width: 103%;
  margin-top:260px;
  margin-left:-550px;
  /* border:2px solid yellow; */
  @media screen and (max-width: 500px){
  margin-top:300px;
  margin-left:-240px;
  font-size:17px;
  height: 30px;
  width: 85%;
};
`
const Button1=styled.form`
  height:45px; 
  width:255px; 
 background-color:#23CFA4;
  margin-top:390px;
  margin-left:-670px;
  border-radius:25px;
  padding:2px -12px;
  border:none;
  color:black;
  font-weight:550;
  @media screen and (max-width: 500px){
    font-size: 25px;
    height:30px; 
  width:215px;
  margin-left:-300px; 
  margin-top:420px;
};
`
const Image1=styled.img`
  height:418px; 
  width:398px;
  margin-top:15px;
margin-left:87px;
  @media screen and (max-width: 500px){
    height:326px; 
  width:284px;
  margin-top:95px;
  margin-left:22px;
};
`
const Input1=styled.input`
   color:black;
  font-weight:550;
  background-color:#23CFA4;
  font-size:17px;
  margin-left:25px;
  border:none; 
  margin-top:10px;
  @media screen and (max-width: 500px){
    margin-left:15px;
    font-size:15px;
    margin-top:3px;
  }
`
const Main = () => {
  return (
    <Container1>
    
      <Image src={Logo} alt='image1'></Image>
      <Container2>
      <ContainerLeft>
      <Heading1>Hart<span style={{color:"#23CFA4"}}>.</span></Heading1>
      <Heading2>Store All Your <span style={{color:"#23CFA4"}}>Medical    Documents</span> Online<span style={{color:"#23CFA4"}}>.</span></Heading2>
      <Para>Also track your <span style={{color:"#23CFA4"}}>family's medical history </span>and share your prescriptions and test reports with doctors <span style={{color:"#23CFA4"}}>securely in one-click.</span></Para>
      {/* <Button1 action=''style={{fontSize:'17px'}}>Register for early access</Button1> */}
      <Button1 action="https://docs.google.com/forms/d/e/1FAIpQLSfMp7EwAKtKYbvzCsNgXdwqGk-PHm1hPhpuZuvwWj-s81rQqg/viewform" style={{fontSize:'17px'}}>   
        <Input1 type="submit" value="Register for early access"/>
        </Button1>
      <AiOutlineArrowRight className='arrow' style={{color:"#080808"}}></AiOutlineArrowRight>
      </ContainerLeft>
      <ContainerRight>
        <Image1 src={Phone} alt='Image2'></Image1>
      </ContainerRight>
      </Container2>
      <CardSection></CardSection>
    </Container1>
    
  )
}

export default Main