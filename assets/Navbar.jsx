import logo from './vite.svg'
import menu from './icons8-menu.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { useState } from 'react'
const Navbar = ({bg, setBg}) => {
    const [menus, setMenu] = useState(0)
    const [appreance ,setAppreance] = useState()
    const [app ,setApp] = useState(false)
  
   function Menus(){
        if(menus===0){
            setMenu(-315);
        }  
        else{
            setMenu(0)
        }   
   }
   function Appreance(){
        if(app===false){
            setAppreance(0)
            setApp(true)
            setBg("black")
        }
        else{
            setAppreance(25)
            setApp(false)
            setBg("white")
        }
    
   
   }
    
  return (
    <div>
      <div className="navbar" 
      
      style={{
        position:'absolute',
        left:`${menus}`+"px",
      }}>
        <div className="logo">
            <div className="img1">
                <img src={logo} alt="" />
                <p>Vite</p>
            </div>
            
            <div className="img2">
                <FontAwesomeIcon onClick={()=>Menus()} src={menu} icon="fa-solid fa-bars" />
            </div>
            
        </div>
        <hr />
        <div className="nav">
                <div className="nav-div"> 
                <p>Guide</p>
                <FontAwesomeIcon  className={menus===0?"active":"nav-bar-icons"} icon="fa-solid fa-book" /> 
                </div>
                <hr />
                <div className="nav-div"><p>Config </p> <FontAwesomeIcon  className={menus===0?"active":"nav-bar-icons"} icon="fa-solid fa-gear" /> </div>
                <hr />
                <div className="nav-div"><p>Plugins</p> <FontAwesomeIcon className={menus===0?"active":"nav-bar-icons"} icon="fa-solid fa-wrench" /> </div>
                <hr />
                <div className="nav-div"><p>Resources </p> <FontAwesomeIcon  className={menus===0?"active":"nav-bar-icons"} icon="fa-solid fa-caret-down" /> </div>
                <hr />
                <div className="nav-div"> <p>Version </p> <FontAwesomeIcon className={menus===0?"active":"nav-bar-icons"}  icon="fa-solid fa-fire" /> </div>
                <hr />    
               
           
        </div>
        <div className="navbar-language">
            <p>English</p>
        </div>
        <div className="navbar-appearence">
            <div className="navbar-appearence-name">
                <p>Appearance</p>
            </div>
            <div onClick={()=> Appreance()} className="toogle" style={{position:'relative'}}>
                <div className="round" style={{position:'absolute',right:`${appreance}`+"px"}}>

                </div>
            </div>
        </div>
        <div className="navbar-icons">
        <FontAwesomeIcon className='nav-icons' icon="fa-brands fa-x-twitter" />
        <FontAwesomeIcon className='nav-icons' icon="fa-brands fa-github" />
        <FontAwesomeIcon className='nav-icons' icon="fa-brands fa-instagram" />
        <FontAwesomeIcon className='nav-icons' icon="fa-brands fa-linkedin-in" />

        </div> 
      </div> 
    </div> 
  )
}

export default Navbar
