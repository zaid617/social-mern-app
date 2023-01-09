import "./Profile.css"
import React, { useContext } from 'react'
import Navbar from "../../component/Navbar/Navbar"
import Feed from "../../component/Feed/Feed"
import Rightbar from "../../component/Rightbar/Rightbar"
import axios from "axios"
import { GlobalContext } from '../../context/Context';

export default function Profile(props) {
  
  let { state, dispatch } = useContext(GlobalContext);

  const baseUrl = props.baseUrl


  // user signout

 const signout = async(props)=> {

  try {
    let response = await axios.post(`${baseUrl}/logout`,
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
    <div style={{width:"100%"}}>
    <Navbar  signOut={signout}/>
      <div className="cover">
        <img className="coverImg" src="../../../assets/dp3.jpg" alt="" />
      </div>
      <div className="info">
        <div className="nameBox1">
          <img src="../../../assets/dp.jpg" alt="" className="dpImg1" />
          <h3>{state?.user?.firstName}</h3>
        </div>
      </div>
      <hr />

      <div className="mainCenter">
        <Rightbar/>
        
        <Feed/>

      </div>

    </div>
  )
}
