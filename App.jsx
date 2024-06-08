import './App.css'
import Navbar from './assets/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
function App() {
  const [bg, setBg] = useState("white")
  return (
    <div className='maindiv' style={{background:`${bg}`,width:'100%',height:'100vh'}}>
    <div className="main">
      <Navbar bg={bg} setBg={setBg}/>
      </div>
    </div>
  )
}

export default App
library.add(fab, fas, far)