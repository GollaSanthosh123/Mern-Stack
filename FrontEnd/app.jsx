import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import State from './pages/State'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path="/useState" element={<State/>}/>
    </Routes>
    </>
  )
}

export default App