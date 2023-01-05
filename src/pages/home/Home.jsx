import React from 'react'
import Feed from '../../component/Feed/Feed'
import Navbar from '../../component/Navbar/Navbar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./Home.css"

export default function Home(props) {

  // signOut function is not added yet..... need to be add
  // side bar may name add krna hai context ki help se abhi 

  return (
    <div className="App">
    <Navbar  signOut={signOut}/>
    <div className="homeContainer">
      <Sidebar username={"zaid"}/>
      <Feed 
      submitHandler={props.submitHandler}
      updateData={props.updateData}
      setFile={props.setFile} 
      deleteData={props.deleteData} 
      posts={props.posts} 
      value={props.value} 
      setPosts={props.setPosts} 
      setValue={props.setValue}
      edit={props.edit}
      editing={props.editing}
      setEditing={props.setEditing}
      />
      <Rightbar/>
    </div>
  </div>
  )
}
