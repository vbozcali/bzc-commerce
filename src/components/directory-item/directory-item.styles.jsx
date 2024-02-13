import { styled } from "styled-components";

export const BackgroundImage = styled.div`
  width: 99%;
  height: 99%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  border: 3px solid black;
 `;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  left: 0,
  right: 0;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  position: relative;
  min-width: 30%;
  height: 540px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &: first-child {
    margin-right: 7.5px;
  }

  &: last-child {
    margin-left: 7.5px;
`;

export const Title = styled.h2`
    font-size: 38px;
    position: absolute;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px 25px;
    backdrop-filter: blur(25px);
    border: 3px solid black;
    cursor: pointer;
    font-style: italic;
 `;