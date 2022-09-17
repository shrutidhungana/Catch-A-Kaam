import styled from "styled-components";

export const Register = styled.div`
  background-color: #006400;
  width: 400px;
  height: 500px;
  display: flex;
  border: 2px solid #006400;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: white;
  border-radius: 50px;
`;
export const Heading = styled.h1`
  color: #000080;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #ff8c00;
  color: white;
  border: 2px solid #ff8c00;
  border-radius: 50px;
  margin-left: 65px;
  margin-top: 20px;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
`;

export const Paragraph = styled.p`
  color: white;
  text-align: left;
`;

export const Paragraph1 = styled.p`
  margin-top: -40px;
  margin-left: 210px;
`;

export const Labels = styled.div`
  margin: 20px 0 0 0;
`;
export const Label = styled.label`
  margin: 10px 0 0 50px;
`;

export const Input = styled.input`
  display: block;
  border-radius: 50px;
  padding: 7px 5px;
  margin: 10px;
  border: 4px solid white;
  font-size: 18px;
  ::placeholder {
    text-align: center;
    color: #ff8c00;
  }
`;

export const Inputs = styled.div`
  font-size: 18px;
`;
