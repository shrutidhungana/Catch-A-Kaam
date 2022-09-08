import styled from "styled-components";

export const TextArea = styled.textarea`
  padding: 20px;
  margin-bottom: 20px;
  display: block;
  font-size: 18px;
  border-radius: 50px;
  border: 4px solid white;
  resize: none;
  ::placeholder {
    text-align: center;
    color: #ff8c00;
  }
`;

export const TextAreas = styled.div`
  margin-left: 100px;
`;
