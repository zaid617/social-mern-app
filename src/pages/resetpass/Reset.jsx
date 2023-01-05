import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./Reset.css"

export default function Reset() {

  // reset pass link

const formik3 = useFormik({
  initialValues: {
    email: '',
  },
  validationSchema: yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  }),
  onSubmit: (values) => {

  },
})


  return (
    <div className="reset">
        <div className="headingLogo">
        <div className='logo1'>Share & Fun</div>
        </div>
         <form onSubmit={formik3.handleSubmit} className="form3">
          <h1 className="lo">Forget Password</h1>


          <label className="fel" htmlFor="email">
            <input
              autoComplete="on"
              placeholder="Enter Email"
              type="email" id="email"
              name="email"
              label="Email"
              required
              value={formik3.values.email}
              onChange={formik3.handleChange} />
            <div className="error">{formik3.touched.email && formik3.errors.email}</div>
            </label>

          <button to="/" type="submit" className="loginBtn a">Send link</button>

          <div className="hr"></div>

          <Link to={"/register"} className="createBtn a">Create a new Account</Link>

        </form>
    </div>
  )
}
