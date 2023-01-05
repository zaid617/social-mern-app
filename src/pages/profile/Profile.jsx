import "./Profile.css"
import React, { useState } from 'react'
import Navbar from "../../component/Navbar/Navbar"
import Feed from "../../component/Feed/Feed"
import Rightbar from "../../component/Rightbar/Rightbar"
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Profile() {
  
  // user signout

 const signout = ()=> {

}

// h3 may name abhi constant h usy change krna h context se


  return (
    <div style={{width:"100%"}}>
    <Navbar  signOut={signout}/>
      <div className="cover">
        <img className="coverImg" src="../../../assets/dp3.jpg" alt="" />
      </div>
      <div className="info">
        <div className="nameBox1">
          <img src="../../../assets/dp.jpg" alt="" className="dpImg1" />
          <h3>{"zaid"}</h3>
        </div>
      </div>
      <hr />

      <div className="mainCenter">
        <Rightbar/>
        
        <Feed 
      submitHandler={submitHandler}
      updateData={updateData}
      setFile={setFile} 
      deleteData={deleteData} 
      posts={posts} 
      value={value} 
      setPosts={setPosts} 
      setValue={setValue}
      edit={edit}
      editing={editing}
      setEditing={setEditing}
      />

      </div>

    </div>
  )
}
