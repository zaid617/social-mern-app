import { useEffect , useContext } from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Reset from './pages/resetpass/Reset';
import { GlobalContext } from './context/Context';
import ChangePass from './pages/changePass/ChangePass';



function App() {

  let { state, dispatch } = useContext(GlobalContext);


  const baseUrl = "https://social-mern-server-production.up.railway.app/api/v1"

  useEffect(() => {

    const getProfile = async () => {
      try {
        let response = await axios.get(
          `${baseUrl}/profile`,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            }
          });

        console.log("response: ", response);

        dispatch({
          type: 'USER_LOGIN',
          payload: response.data
        })
      } catch (error) {

        console.log("axios error: ", error);

        dispatch({
          type: 'USER_LOGOUT'
        })
      }
    }
    getProfile();

  }, [dispatch])

  useEffect(() => {

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      console.log("interceptor");
      config.withCredentials = true;
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error.response.status === 401) {
        dispatch({
          type: 'USER_LOGOUT'
        })
      }
      return Promise.reject(error);
    });
  }, [dispatch])



  return (
    <>{
      (state.isLogin) ?

        <Routes>

          <Route path="/" element={

            <Home baseUrl={baseUrl}/>
          } />
          <Route path="profile" element={

            <Profile baseUrl={baseUrl}/>

          } />
          <Route path="changePass" element={<ChangePass/>} baseUrl={baseUrl} />
          <Route path="*" element={<Navigate to={"/"} replace="true" />} />

        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login  baseUrl={baseUrl}/>} />
          <Route path="register" element={<Register  baseUrl={baseUrl}/>} />
          <Route path="resetPassword" element={<Reset  baseUrl={baseUrl} />} />
          <Route path="*" element={<Navigate to={"/"} replace="true" />} />
        </Routes>

    }
    </>
  );
}

export default App;
