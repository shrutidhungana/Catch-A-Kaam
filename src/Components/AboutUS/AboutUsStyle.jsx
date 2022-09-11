import styled from "styled-components";

export const About = styled.div`
  background-image: linear-gradient(90deg, #c0c0c0, #dcdcdc, #fbab60);
  margin: -21px 0px;
  width: 100vw;
  @media(768px){
    background-image: linear-gradient(90deg, #c0c0c0, #dcdcdc, #fbab60);


  }
`;

export const Heading = styled.h1`
  text-align: center;
  padding-top: 10px;
  color: #353839;
  font-size: 25px;
  text-transform: uppercase;
  opacity: 80%;
`;

export const Image = styled.img`
  height: 150px;
  width: auto;
  object-fit: content;
  margin: auto;
  display: block;
  @media(max-width:768px){
    
    width: 150px;
    height: auto;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin-left: 600px;
  margin-right: 600px;
  @media(max-width: 768px){
    margin-left: 100px;
    margin-right: 100px;
    text-align: justify;
  }
`;

export const Italic = styled.em`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  margin-top: 120px;
  opacity: 50%;
`;

export const Content = styled.div`
  color: #484848;
`;

export const Paragraph1 = styled.p`
  text-align: center;
`;

export const Paragraph2 = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px;
`;
export const Quote = styled.blockquote`
  margin: 0px 500px;
  @media(max-width: 768px){
    margin: 0px 90px
  }
`;

export const Para = styled.p`
  margin-top: -15px;
  text-align: right;
  margin-right: 1055px;
  @media(max-width: 768px){
   display: none;
  }
`;

export const Citation = styled.cite`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -40px;
  margin-right: 180px;
  @media(max-width: 768px){
    margin-right: 9px;
    margin-top: -20px
  }
`;

export const Horizontal = styled.hr`
    margin-left: 500px;
    margin-right: 500px;
    opacity: 60%;
    @media(max-width: 768px){
      margin-left: 100px;
      margin-right: 100px;
    }

`