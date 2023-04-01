import React from 'react'
import styled from 'styled-components';
import Phone from '../Images/Phone1.png';
import Couple from '../Images/couple.png'; 
import Face from '../Images/face.png'
import Doggy from '../Images/Doggy.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './Main.css';
// import {AiOutlineArrowRight} from 'react-icons/ai'
import Footer from './Footer';

const CardSection = () => {
  return (
    <Container>
      <Heading>
        Safe 
        <span style={{color:"#23CFA4"}}>&</span> 
        Secure 
        <span style={{color:"#23CFA4"}}>.</span>
      </Heading>
      <Container2>
        <Card>
          <Image src={Phone} class="card-img-top" width={210} height={313} 
          marginleft={"55px"} Resmarginleft={"44px"} alt="Fissure in Sandstone"/>
          <Heading2 class="card-title">Store All Your Medical Documents Online.</Heading2>
          <Para class="card-text" marginleft={"85px"} width={"177px"} Resmarginleft={"59px"}>
            With a single click, store all of your medical documents in an organised manner.
          </Para>
        </Card>
        <Card>
          <Image src={Couple} class="card-img-top" marginleft={"105px"} width={260} height={313} 
          Resmarginleft={"94px"} alt="Fissure in Sandstone"/>
          <Heading2 class="card-title" marginleft={"67px"} Resmarginleft={"37px"}>
            Take Care of Your<br/>Family.
          </Heading2>
          <Para class="card-text" marginleft={"45px"} width={"257px"} Resmarginleft={"17px"}>
            Track the health of your parents and children.<br/>Share your documents with doctors and revoke access anytime.
          </Para>
        </Card>
        <Card>
          <Image src={Face} class="card-img-top" marginleft={"45px"} width={260} height={313} 
          Resmarginleft={"44px"}alt="Fissure in Sandstone"/>
          <Heading2 class="card-title" marginleft={"57px"} Resmarginleft={"8px"}>
            Insights on Your Health.
          </Heading2>
          <Para class="card-text" marginleft={"55px"} width={"257px"} Resmarginleft={"16px"}>
            Get infographics and other interpretations of your medical history to better understand your health!
          </Para>
        </Card>
      </Container2>
      <Container3>
        <Containerleft>
          <Image2 src={Doggy}/>
        </Containerleft>
        <ContainerRight>
        <Heading3>Join Hart Now<span style={{color:"#23CFA4"}}>!</span></Heading3>
        <Para2><span style={{color:"#23CFA4"}}>Find Peace in the Chaos</span><br></br>
         Be a part of the revolution to change healthcare in India!<br></br></Para2>
         <Button1 target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfMp7EwAKtKYbvzCsNgXdwqGk-PHm1hPhpuZuvwWj-s81rQqg/viewform" style={{fontSize:'17px'}}>Register for early access </Button1>
         <AiOutlineArrowRight className='arrow2' style={{color:"#151514"}}></AiOutlineArrowRight>
         </ContainerRight>
        </Container3>
      <Footer/>
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
  @media screen and (max-width: 500px){
      margin-top:35px;
  };
`
const Card=styled.div`
  height:645px; 
  width: 350px;
  background-color:#131415;
  border-radius: 30px;
  @media screen and (max-width: 500px){
    height:577px;
    width: 306px;
    margin-bottom:15px;
    margin-top:24px;
    margin-left:30px;
  };
`
const Para=styled.p`
  color: #8A8F98;
  margin-top:35px;
  padding:5px 5px;
  text-align:center;
  margin-left:${({marginleft})=>marginleft};
  width:${({width})=>width};
  @media screen and (max-width: 500px){
    text-align:center;
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
    margin-top:20px;
    margin-left:${({Resmarginleft})=>Resmarginleft};
  };

`
const Container2=styled.div`
  display:flex; 
  flex-direction:row; 
  flex-wrap:nowrap;
  justify-content:space-evenly;
  margin-bottom:10px;
  @media screen and (max-width: 500px){
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
  font-weight:500;
  margin-left:${({marginleft})=>marginleft};
  text-align:center;
  @media screen and (max-width: 500px){
    font-size: 22px;
    text-align: center;
    margin-top: 25px;
    padding: 10px;
    margin-left:${({Resmarginleft})=>Resmarginleft};
  };
  font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
`
const Container3=styled.div`
  display:flex; 
  flex-direction:row; 
  flex-wrap:nowrap; 
  @media screen and (max-width: 500px){
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
  margin-bottom:30px;
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
  font-weight:500;
  font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
  @media screen and (max-width: 500px){
    font-size: 40px;
    font-weight:500;
    margin-top:12px;
    margin-left:47px;
    margin-bottom:10px;
  };
`
const Para2=styled.p`
  color: #8A8F98;
  margin-top:35px;
  font-size:17px;
  margin-left:97px;
  @media screen and (max-width: 500px){
    margin-left:30px;
    font-size:19px;
    margin-top:25px;
    margin-bottom:0px;
  };
`
const Containerleft=styled.div`
  display:flex;
`
const ContainerRight=styled.div`
  display:flex; 
  flex-direction:column; 
  flex-wrap:nowrap;
  @media screen and (max-width: 500px){
    flex-direction:column; 
    margin-left:30px;
  };
`
const Button1=styled.a`
  height:45px; 
  width:255px; 
  background-color:#23CFA4;
  margin-top:70px;
  border-radius:25px;
  padding:10px 10px;
  text-align: center;
  text-decoration: none;
  color:black;
  font-weight:400;
  margin-left:97px;
  @media screen and (max-width: 500px){
    height:35px; 
  width:250px; 
  border-radius:20px;
  align-self:center;
  text-align: center;
  margin-left:-17px;
  margin-top:30px;
  margin-bottom:20px;
  padding:5px 5px;
};
`

