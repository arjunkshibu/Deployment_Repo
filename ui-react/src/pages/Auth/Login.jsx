import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });
      if (response.status === 200) {
        console.log(response.data)
        const token = response.data.accessToken;
        const decoded = jwtDecode(token);
        const uid = decoded.uId;
        const role = decoded.role;
        const userName = decoded.name;
        const uEmail = decoded.sub;
        const uPhone = decoded.phone;

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId',uid);
        localStorage.setItem('role', role);
        localStorage.setItem('authToken', token);
        localStorage.setItem('uName', userName);
        localStorage.setItem('uEmail', uEmail);
        localStorage.setItem('uPhone', uPhone);




        if (role === 'Admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/dashboard');
        }
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while logging in. Please try again.', error);
      if (error.response.status === 403) {
        setPasswordError('Invalid email or password');
      } else if (error.response.status === 400) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes('email')) {
          setEmailError('Invalid email');
        }
      }
    }
  };

  const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(input)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value); // Validate email when input changes
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center gap-0 flex-row justify-center h-screen font-Montserrat">
      <div className="flex flex-col items-center justify-evenly  custom-box-shadow min-h-[35rem] min-w-[20rem] md:min-h-[45rem] md:min-w-[27rem]">
        <h1 className="h-1/4 text-black flex text-3xl md:text-5xl">Login</h1>
        <div className="h-3/4 flex flex-col items-center justify-center md:gap-10 gap-7">
          <fieldset>
            <legend className="text-black">Email</legend>
            <label className="text-black">
              <input
                className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
            </label>
            {emailError && <p className="text-red-500">{emailError}</p>} {/* Display email error */}
          </fieldset>
          <fieldset>
            <legend className="text-black">Password</legend>
            <label className="text-black">
              <input
                className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </label>
            {passwordError && <p className="text-red-500">{passwordError}</p>} {/* Display password error */}
          </fieldset>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="border border-gray-400 pt-1 pb-1 pl-2 pr-2 text-sm md:px-5 md:py-3 hover:bg-green-600 hover:text-white" onClick={handleLogin}>
            Login
          </button>
          <p className="text-sm md:text-base">Login with social accounts</p>
          <div className="flex flex-row md:space-x-4 justify-center items-center space-x-2">
            <SocialIcon
              url="https://linkedin.com"
              target="_blank"
              style={{ height: '30px', width: '30px' }}
            />
            <SocialIcon
              url="https://facebook.com"
              target="_blank"
              style={{ height: '30px', width: '30px' }}
            />
            <SocialIcon
              url="https://google.com"
              target="_blank"
              style={{ height: '30px', width: '30px' }}
            />
          </div>
          <div className="text-xs md:text-base underline">
            <p>Forgot password</p>
          </div>
          <NavLink to="/register">
            <div className="text-xs md:text-base">
              <p>Don't have an account ?</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
