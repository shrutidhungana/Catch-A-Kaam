import styled from "styled-components";

export const Image = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  object-fit: cover;
`;

export const Testimonial = styled.div`
  background-color: #92a1cf;
  color: #fff;
  border-radius: 15px;
  padding: 70px 60px;
  max-width: 768px;
  position: relative;
  margin: 20px;
`;

export const Message = styled.p`
  line-height: 28px;
  text-align: justify;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const UserDetails = styled.div`
  margin-left: 10px;
`;

export const UserName = styled.p`
  margin: 0;
`;
export const Role = styled.p`
  font-weight: normal;
  margin: 10px 0;
`;

export const Id = styled.p`
  text-align: center;
`;
export const Location = styled.p`
  font-weight: normal;
  margin: 10px 0;
`;
export const Rating = styled.p`
  font-weight: normal;
  margin: 10px 0;
`;
