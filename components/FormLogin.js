import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import {LoginForm, Welcome, Input, FlexBox} from '../styles/Login';
import {ButtonContainer, Button, ButtonContent} from '../styles/Button';
import {AlertLogin} from './Alert';
import {SuggestWindow} from '../styles/Suggest';

const FormLogin = () => {

  useEffect(() => {
  const listener = event => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      button.click();
    }
  };
  document.addEventListener("keydown", listener);
  return () => {
    document.removeEventListener("keydown", listener);
  };
}, []);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState(1);

  const handleSubmit = async (e) => {
    if (name == '' || password == '') {
      setState(2);
      setTimeout(() => setState(1), 1600)
      return;
    }

   e.preventDefault();

   const data = {
     name,
     password,
   };

   const users = await fetch('/api/loginUser', {
     method: 'post',
     body: JSON.stringify(data)
   });
     if (users.status === 201) {
       setState(3);
       setTimeout(() => setState(1), 1600)
       return;
     }

   if (users.status === 202) {
     let userName = data.name;
     Router.push({
     pathname: '/profile',
     query: { name: userName }
  });
   }
 };


  return (
    <LoginForm>
      <Welcome>
        <h2>Вход</h2>
      </Welcome>
      <FlexBox>
        <Input id="username" placeholder='Ваше имя' type='text' onChange={e => setName(e.target.value)}/>
      </FlexBox>
      <FlexBox>
        <Input id="password" placeholder='Пароль' type='password' onChange={e => setPassword(e.target.value)}/>
      </FlexBox>
      <FlexBox>
        <Button id="button" onClick={handleSubmit}><ButtonContent>Войти!</ButtonContent></Button>
        <AlertLogin isHidden={state}/>
      </FlexBox>
      <SuggestWindow>Еще нет аккаунта? <p/> <Link href='/signup'><Button><ButtonContent>Регистрация</ButtonContent></Button></Link> </SuggestWindow>
    </LoginForm>
  )
}

export {FormLogin}
