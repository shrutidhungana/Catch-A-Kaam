import styled from "styled-components";

export const Container = styled.div`
  background-color: #006400;
  width: 500px;
  height: 550px;
  margin-left: 60%;
  border: 1px solid #006400;
  box-sizing: border-box;
  border-radius: 50px;
  color: white;
  @media(max-width: 768px){
      width: 490px;
      margin-left: 10px;
     
  }
`;
export const Heading = styled.h1`
  text-align: center;
`;
export const FormControl = styled.div`
  position: relative;
  margin: 30px 0 0 20px;
  width: 300px;
`;

export const Form = styled.form`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: #ff8c00;
  color: white;
  border: 2px solid #ff8c00;
  border-radius: 50px;
  margin-left: 180px;
  padding: 7px 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const Render = styled.div`
      background-color: blue;
      margin-top: -10px;
      font-size: 16px;
      border-radius: 50px;
`;

export const Renders = styled.p`
text-align: center;
`;