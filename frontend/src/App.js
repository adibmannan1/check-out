import React from 'react'
import { Container } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='all'>
      <Header/>
      <main className='py-3 main'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App