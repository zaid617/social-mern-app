import React from 'react'
import Feed1 from '../../component/Feed/Feed1'
import Navbar from '../../component/Navbar/Navbar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import "./Home.css"

export default function Home() {
  return (
    <div className="App">
    <Navbar/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed1 />
      <Rightbar/>
    </div>
  </div>
  )
}
