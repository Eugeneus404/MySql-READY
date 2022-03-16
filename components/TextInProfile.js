import Link from 'next/link';
import { useState } from 'react';
import {TextContainer} from '../styles/Container';
import {NameInput} from './NameInput';
import {ImageContainer, Image, About} from '../styles/Profile';
import {ButtonContainer, Button, ButtonContent} from '../styles/Button';


const Text = (props) => {

  return (
    <>
      <ButtonContainer>
        <Link href="/"><Button><ButtonContent>Выйти</ButtonContent></Button></Link>
      </ButtonContainer>
      <TextContainer>
        <ImageContainer>
          <Image src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
        </ImageContainer>
        <About>
          <h1>О себе:</h1>
          <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolorm.</p>
          <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolorm.</p>
        </About>
         <div>
          <NameInput name={props.name}/>
        </div>
      </TextContainer>
    </>
  )
}

export {Text}
