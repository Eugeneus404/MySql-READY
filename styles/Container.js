import styled from 'styled-components';
import opacity from './Animation'

const Container = styled.div`
  height: 800px;
  position: relative;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  width: 800px;
  border: 2px solid #3A374C;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  color: #483D8B;
  animation: ${opacity} 1s;
`;

const Rights = styled.div`
  position: fixed;
  width: 100%;
  color: #483D8B;
  text-align: center;
  top: 96%;
  left: 0;
`;

export {Container, TextContainer, Rights}
