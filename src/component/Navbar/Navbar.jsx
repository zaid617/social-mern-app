import { Close, Dashboard, Dehaze, Group, Groups2, Message, Notifications, Store } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import "./Navbar.css"

export default function Navbar() {

  let[show,setShow] = useState(false) 
  const nameOfClass = ()=>{
    setShow(!show); 
    console.log(show);
  }

    
  let { state, dispatch } = useContext(GlobalContext);

  const signout = async()=> {

    try {
      let response = await axios.post(`${state.baseUrl}/logout`,
        {},
        {
          withCredentials: true
        })
      console.log("response: ", response);
  
      dispatch({
        type: 'USER_LOGOUT'
      })
    } catch (error) {
      console.log("axios error: ", error);
    }
  
  
  }


  return (
    <>
    <div className='header'>
      <div className='logo'>Share & Fun</div>
      <div className='icons'>
        <ul>
          <Link className='links' title='Home' to="/"><li>< HomeIcon style={{ fontSize: 30 }} className="icons" /></li></Link>
          <Link className='links' title='Friends'><li>< Group style={{ fontSize: 30 }} className="icons" /></li></Link>
          <Link className='links' title='Market Place'><li>< Store style={{ fontSize: 30 }} className="icons" /></li></Link>
          <Link className='links' title='Game zone'><li>< Dashboard style={{ fontSize: 30 }} className="icons" /></li></Link>
          <Link className='links' title='Group'><li>< Groups2 style={{ fontSize: 30 }} className="icons" /></li></Link>
        </ul>
      </div>

      <div className="account">
        <ul className='moreIcon'>
          <li className='hide' title="Menu">< Dehaze style={{ fontSize: 20 }} className="iconsm" /></li>
          <li className='hide' title="Messenger">< Message style={{ fontSize: 20 }} className="iconsm" /></li>
          <li className='hide' title="Notification">< Notifications style={{ fontSize: 20 }} className="iconsm" /></li>
          <li title='settings' className="relative">
            <div className="dropbtn1" onClick={nameOfClass}>{(show)?<Close style={{ fontSize: 20 }} className='iconsm'/>:<img src="../../../assets/dp.jpg" alt="" className='iconDp'/>}</div>
            <div id="myDropdown1" className={`dropdown-content1 ${(show)? "show1" : ""}`} >
              <Link to="profile" className='text-align li'>Profile</Link>
              <Link className='li' to="changePass">change Password </Link>
              <li className='li' >Settings & Privacy</li>
              <li className='li' >FAQs</li>
              <li className='li' onClick={signout}>Logout</li>
            </div>
          </li>

        </ul>
      </div>
    </div>
    </>
  )
}
