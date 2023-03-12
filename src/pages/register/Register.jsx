import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import axios from "axios";
import * as yup from 'yup';
import "./Register.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";

export default function Register() {

  let {state , dispatch} = useContext(GlobalContext)

   // using formik for signUP 

   const formik1 = useFormik({
    initialValues: {
      username:"",
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup
        .string('Enter a valid name')
        .min(3, 'name should be of minimum 8 characters')
        .required('name is required'),
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {

      let obj={
         firstName: values.username,
         email: values.email,
         password : values.password
      }

      try {
        let response = await axios.post(`${state.baseUrl}/signup`, obj)
        console.log("signup successful");
      } 
      catch (e) {
        console.log(e)
        console.log("signup fail")
        
        }

    },
  })


  return (
    <div className="login">
        <div className="left">
          <h1>Fun & Share</h1>
          <span>
          Fun & Shar helps you connect and share with the people in your life.
          </span>
        </div>


        <div className="right">
          <form  className="newForm" onSubmit={formik1.handleSubmit}>
            
            <label className="fel" htmlFor="name">
              <input 
              autoComplete="on"
              type="text" 
              name="username" 
              required 
              placeholder="Enter Your Username" 
              value={formik1.values.username}
              onChange={formik1.handleChange} />
              <div className="error">{formik1.touched.username && formik1.errors.username}</div></label>
           
           
            <label className="fel" htmlFor="email">
            <input 
              autoComplete="on"
              placeholder="Enter Email"
              type="email" id="email"
              name="email"
              label="Email"
              value={formik1.values.email}
              onChange={formik1.handleChange} />
            <div className="error">{formik1.touched.email && formik1.errors.email}</div></label>


          <label className="fel" htmlFor="pass">
            <input 
              autoComplete="on"
              placeholder="Enter Password"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik1.values.password}
              onChange={formik1.handleChange} />
            <div className="error">{formik1.touched.password && formik1.errors.password}</div>
            </label>

            <button className="loginBtn a" type="submit">Sign Up</button>
           <div className="hr"></div>
            <Link className="createBtn a" to="/">Login to Account</Link>
          </form>
        </div>
    </div>
  );
}