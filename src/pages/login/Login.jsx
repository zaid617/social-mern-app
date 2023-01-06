import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import axios from "axios";
import * as yup from 'yup';
import { GlobalContext } from '../../context/Context';
import { useContext } from "react";
import "./Login.css";

export default function Login(props) {

  let { state, dispatch } = useContext(GlobalContext);

    // using formik for login 

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: yup.object({
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
      try{
        let response = await axios.post(`${props.baseUrl}/login`, {
          email: values.email,
          password: values.password
      }, {
          withCredentials: true
      })
      console.log("login successful");
      dispatch({
        type: 'USER_LOGIN',
        payload: response.data
      })

  }catch (e) {
      console.log("login error");
      dispatch({
        type: 'USER_LOGOUT'
      })
  }
  
    }})


  return (
    <div className="login">
      <div className="left">
        <h1>Fun & Share</h1>
        <span>
          Fun & Share helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="right">
        <form onSubmit={formik.handleSubmit} className="form">
          <h1 className="lo">Login</h1>


          <label className="fel" htmlFor="email">
            <input
              autoComplete="on"
              placeholder="Enter Email"
              type="email" id="email"
              name="email"
              label="Email"
              required
              value={formik.values.email}
              onChange={formik.handleChange} />
            <div className="error">{formik.touched.email && formik.errors.email}</div></label>


          <label className="fel" htmlFor="pass">
            <input
              autoComplete="on"
              placeholder="Enter Password"
              id="password"
              name="password"
              label="Password"
              type="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange} />
            <div className="error">{formik.touched.password && formik.errors.password}</div>
            </label>


          <button to="/" type="submit" className="loginBtn a">Login</button>

          <Link to={"/resetPassword"} className="a">Forget Password ?</Link>

          <div className="hr"></div>

          <Link to={"/register"} className="createBtn a">Create a new Account</Link>

        </form>
      </div>
    </div>
  );
}