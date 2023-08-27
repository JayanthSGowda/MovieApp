import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    cursor: pointer;
    &:hover {
        color: #ff9090;
        animation: hue-rotate 2s infinite forwards;
    }

`;


const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: ${(props)=>(props.color)};
    visibility: ${(props)=>(props.show ? 'visible' : 'hidden')};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
`;

export default class Navbar extends React.Component {
    render() {
        return (
            <Nav>
                <Title>Movie-App</Title>
                <CartIconContainer>
                    <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/833/833314.png"/>
                    <CartCount color="yellow" show={true}>0</CartCount>
                </CartIconContainer>
            </Nav>
        )
    }
}
// const styles = {
//     nav:{
//         display:"flex",
//         position: "relative",
//     },
//     title:{
//         width:"100%",
//         textAlign:"center",
//         fontSize:30,
//         fontWeight:600,
//         color:"white",
//         padding:10,
//         backgroundColor:"black"
//     },
//     cart:{
//         position:"absolute",
//         justifyContent:"center",
//         right:10,
//         top:5,
//         backgroundColor:"white",
//         borderRadius:10,
//         height:45
//     },
//     cartIcon:{
//         height:30,
//         width:30,
//         padding:5,
//         "margin-top":5,
    
//     },
//     cartCount:{
//         backgroundColor:"red",
//         textAlign:"center",
//         fontSize:12,
//         width:15,
//         height:15,
//         borderRadius:50,
//         position: "absolute",
//         right:3,
//         top:7,
//     }
// }