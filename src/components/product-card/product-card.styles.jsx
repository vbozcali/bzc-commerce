import { styled } from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  border: 3px solid #000;
`;

export const ButtonContainer = styled.div`
  opacity: 0.7;
  position: absolute;
  bottom: 50px;
  display: none;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;


export const Price = styled.span`
  width: 10%;
`;

export const ProductCardContainer = styled.div`
  padding: 3px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;
  border: 3px solid #000;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${ButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }
`;