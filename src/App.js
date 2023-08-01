import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skils from './components/Skils'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Nav/>
       <Home/>
       <About/>
       <Skils/>
       <Projects/>
       <Connect/>
       <Footer/>
    </div>
  )
}

export default App