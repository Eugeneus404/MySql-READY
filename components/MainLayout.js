import Head from 'next/head';
import {GlobalStyle} from '../styles/Body';
import {Container, Rights} from '../styles/Container';


const MainLayout = ({children, title = 'SC'}) => {

  return (
    <>
    <GlobalStyle/>
      <Head>
        <title>{title} | SITE</title>
      </Head>
      <Container>
        {children}
        <Rights>
          Copyright © SITE 2022 Все права защищены
        </Rights>
      </Container>
      </>
  )
}

export {MainLayout}
