import styled from 'styled-components';

const ImageContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 3px solid #483D8B;
  box-shadow: 0 0 7px #666;
`;

const About = styled.div`
  grid-area: 1/2/3/4;
  text-align: left;
`;



export {ImageContainer, Image, About}
