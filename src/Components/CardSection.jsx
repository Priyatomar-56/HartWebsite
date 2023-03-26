import React from 'react'
import styled from 'styled-components';
import Phone from '../Images/Phone1.png';
import Couple from '../Images/couple.png'; 
import Face from '../Images/face.png'
import Doggy from '../Images/Doggy.png'
import './Main.css';
// import {AiOutlineArrowRight} from 'react-icons/ai'
import Footer from './Footer';
const CardSection = () => {
  return (
    <Container>
     <Heading>Safe <span style={{color:"#23CFA4"}}>&</span> Secure <span style={{color:"#23CFA4"}}>.</span></Heading>
     
     <Container2>
        <Card>
        <Image src={Phone} class="card-img-top" width={210} height={313} marginleft={"55px"} Resmarginleft={"14px"} alt="Fissure in Sandstone"/>
        <Heading2 class="card-title">Store All Your Medical Documents Online.</Heading2>
        <Para class="card-text" marginleft={"85px"} width={"177px"} Resmarginleft={"25px"}>With a single click, store all of your medical documents in an organised manner.</Para>
        </Card>
        <Card>
        <Image src={Couple} class="card-img-top" marginleft={"105px"} width={260} height={313} Resmarginleft={"54px"} alt="Fissure in Sandstone"/>
        <Heading2 class="card-title" marginleft={"67px"} Resmarginleft={"37px"}>Take Care of Your<br/>Family.</Heading2>
        <Para class="card-text" marginleft={"45px"} width={"257px"}  Resmarginleft={"-12px"}>Track the health of your parents and children.<br></br>Share your documents with doctors and revoke access anytime.</Para>
        </Card>
        <Card>
        <Image src={Face} class="card-img-top" marginleft={"45px"} width={260} height={313} Resmarginleft={"14px"}alt="Fissure in Sandstone"/>
        <Heading2 class="card-title" marginleft={"57px"} Resmarginleft={"8px"}>Insights on Your Health.</Heading2>
        <Para class="card-text" marginleft={"55px"} width={"257px"} Resmarginleft={"-9px"}>Get infographics and other interpretations of your medical history to better understand your health!</Para>
        </Card>
        </Container2>
        <Container3>
        <Image2 src={Doggy}></Image2>
        <Heading3>Join Hart Now<span style={{color:"#23CFA4"}}>!</span></Heading3>
        <Container4>
        <Para2><span style={{color:"#23CFA4"}}>Find Peace in the Chaos</span><br></br>
         Be a part of the revolution to change healthcare in India!<br></br></Para2>
        <Button1 action="https://docs.google.com/forms/d/e/1FAIpQLSfMp7EwAKtKYbvzCsNgXdwqGk-PHm1hPhpuZuvwWj-s81rQqg/viewform" style={{fontSize:'17px'}}>   
        <Input1 type="submit" value="Register for early access"/>
        </Button1></Container4>
        </Container3>
        <Footer></Footer>
    </Container>
  )
}

export default CardSection
const Heading=styled.h1`
    justify-content: center; 
    color:white;
    display:flex;
  font-size: 35px;
  margin-bottom:65px;
  font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
  @media screen and (max-width: 500px){
    font-size: 30px;
    margin-top:145px;

};
`
const Container=styled.div`
    /* border:2px solid red; */
    height:977px;
    @media screen and (max-width: 500px){
      height:677px;
       /* border:2px solid red; */
       margin-top:35px;
};
`
const Card=styled.div`
    /* border:2px solid red; */
    height:645px; 
    width: 350px;
    background-color:#131415;
    margin-left:45px;
    border-radius: 30px;
    @media screen and (max-width: 500px){
      height:707px;
      width: 246px;
      margin-left:55px;
      margin-bottom:15px;
      margin-top:24px;
      /* border:2px solid #9cccc7; */
};
`
const Para=styled.p`
    color: #8A8F98;
    margin-top:35px;
    height:115px;
    padding:5px 5px;
    justify-content:'center';
    align-items:center;
    text-align:center;
    margin-left:${({marginleft})=>marginleft};
    width:${({width})=>width};
    @media screen and (max-width: 500px){
      height:77px;
      margin-left:23px;
      margin-top:-3px;
      margin-left:${({Resmarginleft})=>Resmarginleft};
      font-size:16px;
      margin-bottom:10px;

};
`
const Image=styled.img`
    justify-content:center; 
    align-items:center;
    height:${({height})=>height};
    width:${({width})=>width};
    margin-left:${({marginleft})=>marginleft};
    margin-top:55px;
    @media screen and (max-width: 500px){
      width:210px; 
    height:300px;
    margin-top:15px;
    margin-left:${({Resmarginleft})=>Resmarginleft};
};

`
const Container2=styled.div`
    display:flex; 
    flex-direction:row; 
    flex-wrap:nowrap;
    height:657px;
    margin-bottom:10px;
    @media screen and (max-width: 500px){
      height:1707px;
      flex-direction:column;
      flex-wrap:nowrap;
      margin-bottom:45px;
};
`
const Heading2=styled.h1`
    color:white;
    display:flex;
  font-size: 24px;
  margin-top:42px;
  height:55px; 
  margin-left:${({marginleft})=>marginleft};
   text-align:center;
   @media screen and (max-width: 500px){
    font-size: 18px;
  margin-top:32px;
  height:45px; 
  margin-left:${({Resmarginleft})=>Resmarginleft};
};
  font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
`
 const Container3=styled.div`
    /* border:2px solid red; */
    height:545px;
     display:flex; 
    flex-direction:row; 
    flex-wrap:nowrap; 
    @media screen and (max-width: 500px){
      height:437px;
      flex-direction:column; 
      margin-bottom:10px;
};
 `
 const Image2=styled.img`
 width:390px; 
 height:433px;
 justify-content:center; 
 align-items:center;
 margin-top:85px;
 margin-left:105px;
 @media screen and (max-width: 500px){
      height:377px;
      width:260px; 
      margin-top:15px;
 margin-left:55px;
 margin-bottom:30px;
};
`
const Heading3=styled.h1`
    color:white; 
  font-size: 45px;
  margin-top:122px;
  margin-left:97px;
  /* border:2px solid red; */
  height:45px;
  font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
  @media screen and (max-width: 500px){
      height:27px;
      font-size: 35px;
      margin-top:12px;
  margin-left:47px;
  margin-bottom:10px;
};
`
const Para2=styled.p`
   color: #8A8F98;
    margin-top:225px;
    height:65px;
    width:512px;
    font-size:20px;
    margin-left:-320px;
    float:left;
    @media screen and (max-width: 500px){
      height:27px;
      width:212px;
      margin-left:60px;
      margin-top:25px;
      margin-bottom:35px;
};
 
`
 const Container4=styled.div`
  display:flex; 
  flex-direction:column; 
  flex-wrap:nowrap;
  @media screen and (max-width: 500px){
    flex-direction:column; 
    margin-bottom:10px;
};
`
const Button1=styled.form`
  height:45px; 
  width:255px; 
 background-color:#23CFA4;
 margin-top:70px;
  margin-left:-310px;
  border-radius:25px;
  padding:2px -12px;
  border:none;
  color:black;
  font-weight:550;
  @media screen and (max-width: 500px){
    height:35px; 
  width:225px; 
  border-radius:20px;
  align-self:center;
  margin-left:-17px;
  margin-top:110px;
  margin-bottom:20px;
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
    margin-left:10px;
    font-size:15px;
    margin-top:5px;
  }
`
