import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import {LoginForm, Welcome, Input, FlexBox} from '../styles/Login';
import {ButtonContainer, Button, ButtonContent} from '../styles/Button';
import {Alert} from './Alert';
import {SuggestWindow} from '../styles/Suggest';


const Form = () => {

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

   const users = await fetch('/api/newUser', {
     method: 'post',
     body: JSON.stringify(data),
   })

   if (users.status === 200) {
     let userName = data.name;
     Router.push({
     pathname: '/profile',
     query: { name: userName }
  })
   } else if (users.status === 201) {
     setState(3);
     setTimeout(() => setState(1), 1600)
     return;
  }
 };

  return (
    <LoginForm>
      <Welcome>
        <h2>Регистарция</h2>
      </Welcome>
      <FlexBox>
        <Input id="username" placeholder='Введите ваше имя' type='text' onChange={e => setName(e.target.value)}/>
      </FlexBox>
      <FlexBox>
        <Input id="password" placeholder='Придумайте пароль' type='password' onChange={e => setPassword(e.target.value)}/>
      </FlexBox>
      <FlexBox>
        <Button id="button" onClick={handleSubmit} type="submit"><ButtonContent type="submit">Создать!</ButtonContent></Button>
        <Alert isHidden={state}/>
      </FlexBox>
      <SuggestWindow>Уже есть аккаунт? <p/> <Link href='/'><Button><ButtonContent>Вход</ButtonContent></Button></Link> </SuggestWindow>
    </LoginForm>
  )
}

export {Form}
