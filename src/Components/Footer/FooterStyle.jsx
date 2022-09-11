import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #d6cadd;
  padding: 30px 20px;
  width: 98vw;
  @media (max-width: 650px) {
    padding: 10px 20px;

  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 10px 330px;
  @media(max-width: 650px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 10px 30px
    
  }
`;

export const Row = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 50px;
  @media(max-width: 650px){
      display: grid;
      grid-template-columns: 2;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

`

export const Heading = styled.h2`
color: white;
font-size: 20px;
`

