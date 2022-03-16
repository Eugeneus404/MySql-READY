import styled from 'styled-components';
import opacity from './Animation'

const ButtonContainer = styled.div`
  display: block;
  width: 100px;
  margin-left: auto;
  margin-right: 0.4em;
  animation: ${opacity} 1s;
`;

const Button = styled.a`
  -webkit-user-select: none;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding: 10px 20px;
  color: #766AD0;
  border: 1px solid #3A374C;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  transition: .3s linear;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 15px;
    height: 15px;
    transition: .3s linear;
    left: -1px;
    top: -1px;
    border-left: 1px solid #614DFF;
    border-top: 1px solid #614DFF;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 15px;
    height: 15px;
    transition: .3s linear;
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid #614DFF;
    border-right: 1px solid #614DFF;
  }

  &:hover {
    color: #614DFF;
    border-color: #614DFF;
  }
`;

const ButtonContent = styled.span`
  -webkit-user-select: none;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 15px;
    height: 15px;
    transition: .3s linear;
    left: -1px;
    bottom: -1px;
    border-bottom: 1px solid #614DFF;
    border-left: 1px solid #614DFF;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 15px;
    height: 15px;
    transition: .3s linear;
    right: -1px;
    top: -1px;
    border-right: 1px solid #614DFF;
    border-top: 1px solid #614DFF;
  }
`;

export {ButtonContainer, Button, ButtonContent}
