import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import {NameInputForm, Input, FlexBox} from '../styles/Login';
import {ButtonContainer, Button, ButtonContent} from '../styles/Button';
import { Name } from '../styles/Login';
import { AlertChangeName } from './Alert'

const NameInput = (props) => {
  let currentName = props.name;

  const [state, setState] = useState(2);
  const [newName, setName] = useState('');
  const [alertState, setAlertState] = useState(1);

  const handleSubmit = async (e) => {
    if (newName == '') {
      setAlertState(2);
      setTimeout(() => setAlertState(1), 1600)
      return;
    }

   e.preventDefault();

   const data = {
     currentName,
     newName
   };

   const users = await fetch('/api/changeName', {
     method: 'post',
     body: JSON.stringify(data),
   })
   if (users.status === 200) {
     Router.push({
     pathname: '/profile',
     query: { name: newName }
  })
     setState(2);
   } else if (users.status === 201) {
     setAlertState(3);
     setTimeout(() => setAlertState(1), 1600)
     return;
  }
 };

    if (state === 1) {
      return (
        <NameInputForm>
        <Name alt="Т">Введите новое имя</Name>
          <FlexBox>
            <Input id="username" placeholder='Имя' type='text' onChange={e => setName(e.target.value)}/>
          </FlexBox>
          <FlexBox>
            <Button id="save" onClick={handleSubmit}><ButtonContent>Сохранить</ButtonContent></Button>
            <Button id="cancel" onClick={() =>  setState(2)}><ButtonContent>Отмена</ButtonContent></Button>
          </FlexBox>
         <AlertChangeName isHidden={alertState}/>
        </NameInputForm>
      );
    } else if (state === 2) {
      return (
        <NameInputForm  onClick={ () => setState(1) }>
          <Name>{currentName}</Name>
        </NameInputForm>
     );
   }
}

export {NameInput}
