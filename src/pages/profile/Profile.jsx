import "./Profile.css"
import React, { useContext } from 'react'
import Navbar from "../../component/Navbar/Navbar"
import Feed from "../../component/Feed/Feed"
import Rightbar from "../../component/Rightbar/Rightbar"
import { GlobalContext } from '../../context/Context';
import NavMenu from "../../component/navMenu/NavMenu"

export default function Profile() {
  
  let { state, dispatch } = useContext(GlobalContext);
  return (
    <div style={{width:"100%"}}>
    <Navbar />
      <div className="cover">
        <img className="coverImg" src="../../../assets/dp3.jpg" alt="" />
      </div>
      <div className="info">
        <div className="nameBox1">
          <img src="../../../assets/dp.jpg" alt="" className="dpImg1" />
          <h3>{state?.user?.firstName}</h3>
        </div>
      </div>

      <NavMenu/>

      <div className="mainCenter">
        <Rightbar/>
        
        <Feed/>

      </div>

    </div>
  )
}
