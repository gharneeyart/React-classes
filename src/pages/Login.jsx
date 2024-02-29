import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Loader from '../components/Loader';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api url
    const url = "https://blogg-api-v1.onrender.com/login";

    // validation
    if (!email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields");
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)){
      return toast.error("Invalid email")
    }
    // Password validation
    const pwdTrim = password.trim();
    if (!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password")
    }

    try {
      // sending form data to server
      setLoading(true);
    const { data } = await axios.post(url, {
      email,
      password,
    });

    // check for successful registration
    if(!data?.error){
      toast.success("Login successful")
      // redirect user to user to home or any other page after successful login
      setTimeout(()=>{
          navigate("/")
      }, 2000)
    }else{
      toast.error("Login failed")
    }
    } catch (err) {
    console.log(err);
    const { error } = err?.response?.data
    toast.error(error)
    }
  }
  return (
    
    <div>
       <ToastContainer />
        <h1>Login Page</h1>
         {/* Form */}
         <form onSubmit={handleSubmit}>
          <div className="">
          <input
              className="form-control p-3 my-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value)}}
            />
            </div>
            <div className="password-input-wrapper">
             <input
              className="form-control p-3 "
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value)}}
             />
             <span onClick={()=>setShowPassword(!showPassword)}>
              
              {showPassword ? (<FaRegEye/>) : (<FaRegEyeSlash/>)}
             </span>
            </div>
            {/* {loading ? (<Loader/>) : (<>
              <button type= "submit" className="btn  btn-primary my-3 p-3 w-100" onClick={handleSubmit} disabled={loading}>
                   Login </button></>)} */}
            {/* {loading ? "Loading..." : "Login"} */}

            <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
            </>
          ) : (
            "Login"
          )}
        </button>
          </form>
    </div>
    
  )
}

export default Login