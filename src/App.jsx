import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Company from './components/company/Company'
import Card from './components/cards/Card'
import Fetures from './components/Fetures/Fetures'
import Strategies from './components/strategies/Strategies'
import Works from './components/works/Works'
import Pricing from './components/pricing/Pricing'
import Clients from './components/clients/Clients'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>
    <Home/>
    <Company/>
    <Card/>
    <Fetures/>
    <Strategies/>
    <Works/>
    <Pricing/>
    <Clients/>
    <Footer/>
    </>
  )
}

export default App
