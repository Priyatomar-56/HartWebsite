import React, {useState } from 'react';
import styled from 'styled-components';
import logo from '../Images/pic2.png';
import {RxCross2} from "react-icons/rx";
import {CgMenu} from "react-icons/cg";
import "../styles/humburger.css";
import MenuBar from './Menubar';

function Header() {

  const [disp,setDisp] = useState('none');
  const [ham, setHam] = useState(true);

  const toggleState = ()=>{
    if(disp==='none'){
      setHam(false);
      setDisp('block');
    }
    else{
      setHam(true);
      setDisp('none');
    } 
  }
  
  return (
    <>
    <Container>
    <Left><Logo src={logo} />
    <Heading1>Hart<span style={{color:"#23CFA4"}}>.</span></Heading1>
    </Left>
  
    <Center><Menu>
    <MenuItem>Our Product</MenuItem>
    <MenuItem>About</MenuItem>
        <MenuItem>Blogs</MenuItem>
        <MenuItem>ABDM</MenuItem>
    </Menu>
    </Center>
    {ham && <CgMenu class="humburger" onClick={toggleState}></CgMenu>}
    {!ham && <RxCross2 class="humburger" onClick={toggleState}></RxCross2>}
    </Container>
    <MenuBar disp={disp}/>
  </>
  );
}

export default Header;
const Heading1=styled.h1`
  color:white;
  font-size: 45px;
  margin-left: 160px;
  margin-top:-55px;
  font-weight:600;
 font-family: Inter,Helvetica,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Noto Sans,sans-serif;
 @media screen and (max-width: 500px){
    font-size: 35px;
  margin-left: 10px;
  margin-top:25px;
};
`
const Container =styled.div`
    /* background:radial-gradient(50.76% 50.76% at 50% 50%, rgba(109, 134, 145, 0.24) 0%, rgba(134, 143, 148, 0) 100%); */
    width:1000px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    margin:15px 15px;
    z-index: 1;
    margin-bottom:15px;
    @media only screen and (max-width: 500px) {
    flex-direction: row;
    width:300px;
}
`;
const Logo = styled.img`
margin-left: 50px;
margin-top:30px;
height:70px;
    width:70px;
@media screen and (max-width: 500px){
    margin-left:10px;
    margin-top:20px;
    height:50px;
    width:50px;
    border:2px solid red;
}
`;
const Left=styled.div` 

`;
const Center= styled.div`
    color: #FFFFFF;  
`;
const Menu=styled.ul`
 display:flex;
 list-style:none;
 @media screen and (max-width: 500px){
       display:none;  
    }
 `

const MenuItem=styled.li`
    font-size: 18px;
    margin-right:50px;
    @media screen and (max-width: 500px){
       display:none;  
       margin-right:30px;
    }`;
const U=styled.ul`
    color:white;
`