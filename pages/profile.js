import React from 'react'
import { withRouter } from 'next/router'
import {MainLayout} from '../components/MainLayout';
import {Text} from '../components/TextInProfile';

const Profile = (props) => {
  return (
    <MainLayout title={'Profile'}>
      <Text name={props.router.query.name}/>
    </MainLayout>
  )
}


export default withRouter(Profile)
