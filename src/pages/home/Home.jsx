import React from 'react'
import Feed1 from '../../component/Feed/Feed1'
import Navbar from '../../component/Navbar/Navbar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import "./Home.css"

export default function Home(props) {

  // signOut function is not added yet..... need to be add
  // side bar may name add krna hai context ki help se abhi 

  return (
    <div className="App">
    <Navbar />
    <div className="homeContainer">
      <Sidebar username={"zaid"}/>
      <Feed1 />
      <Rightbar/>
    </div>
  </div>
  )
}
