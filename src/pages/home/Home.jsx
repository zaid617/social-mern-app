import React from 'react'
import Feed1 from '../../component/Feed/Feed1'
import Navbar from '../../component/Navbar/Navbar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import { GlobalContext } from '../../context/Context';
import axios from 'axios'
import { useContext } from "react";
import "./Home.css"

export default function Home(props) {

  
  let { state, dispatch } = useContext(GlobalContext);

  const baseUrl = props.baseUrl

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
    <div className="App">
    <Navbar signout={signout}/>
    <div className="homeContainer">
      <Sidebar username={state?.user?.firstName}/>
      <Feed1 />
      <Rightbar/>
    </div>
  </div>
  )
}
