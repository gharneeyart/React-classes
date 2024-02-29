import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Loader from '../components/Loader';

const Register = () => {
    // hooks
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [usernameError, setUsernameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
  
    const navigate = useNavigate()

    // const usernamePattern = /^[a-zA-Z]+$/; // Only letters
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern
    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/; // At least 8 characters, one uppercase letter, one lowercase letter, one number and one special character
  
    // const handleUsernameChange = (e) => {
    //   const value = e.target.value.trim();
    //   setUserName(value);
    //   if (!value){
    //     setUsernameError("Username is required");
    //   }else if (!usernamePattern.test(value)) {
    //     setUsernameError("Username should only contain letters");
    //   } else {
    //     setUsernameError("");
    //   }
    // };
  
    // const handleEmailChange = (e) => {
    //   const value = e.target.value;
    //   setEmail(value);
    //   if (!value.trim()){
    //     setEmailError("Email is required");
    //   }else if (!emailPattern.test(value)) {
    //     setEmailError("Enter a valid email address");
    //   } else {
    //     setEmailError("");
    //   }
    // };
  
    // const handlePasswordChange = (e) => {
    //   const value = e.target.value.trim();
    //   setPassword(value);
    //   if(!value) {
    //     setPasswordError("Password is required");
    //   }else if (!passwordPattern.test(value)) {
    //     setPasswordError("Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character");
    //   } else {
    //     setPasswordError("");
    //   }
    // };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // api url
      const url = "https://blogg-api-v1.onrender.com/register";
  
      // validation
      if (!username || !email || !password) {
        console.log("Enter all fields");
        return toast.error("Enter all fields");
      }

      // if (usernameError || emailError || passwordError) {
      //   return;
      // }

      // Assignment solution
      // Email validation
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)){
        return toast.error("Invalid email")
      }
      // Username validation
      const userNameTrim = username.trim();
      if (!username || userNameTrim.length < 3){
        return toast.error("Username is required")
      }
      // Password validation
      const pwdTrim = password.trim();
      if (!password || pwdTrim.length < 6){
        return toast.error("Enter a valid password")
      }

      // if (!usernamePattern.test(username)) {
      //   toast.error("Username should only contain letters");
      //   return;
      // }

      // if (!emailPattern.test(email)) {
      //   toast.error("Enter a valid email address");
      //   return;
      // }

      // if (!passwordPattern.test(password)) {
      //   toast.error("Password should contain at least 8 characters, one uppercase letter, one lowercase letter, and one number");
      //   return;
      // }
  
      try {
          // sending form data to server
          setLoading(true);
        const { data } = await axios.post(url, {
          username,
          email,
          password,
        });
  
        // check for successful registration
        if(!data?.error){
          toast.success("Registration successful")
          setLoading(false);
          // redirect user to login
          setTimeout(()=>{
              navigate("/login")
          }, 5000)
        }else{
          toast.error("Registration failed")
        }
      } catch (err) {
        console.log(err);
        const { error } = err?.response?.data
        toast.error(error)
      }
    };
  
    console.log(username);
    return (
      <div>
        <ToastContainer />
        <h1>Register Page</h1>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              className="form-control p-3"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => { setUserName(e.target.value)}}
            />
            {/* <p className="text-danger">{usernameError}</p> */}
          </div>
          <div className="">
            <input
              className="form-control p-3 my-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value)}}
            />
            {/* <p className="text-danger">{emailError}</p> */}
            {/* handleEmailChange */}
          </div>
          <div className="password-input-wrapper">
            <input
              className="form-control p-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value)}}
            />
            <span onClick={()=>setShowPassword(!showPassword)}>
              
              {showPassword ? (<FaRegEye/>) : (<FaRegEyeSlash/>)}
             </span>
            {/* <p className="text-danger">{passwordError}</p> */}
          </div>
          {/* {loading ? (<Loader/>) : (<>
          <button
            className="btn  btn-primary my-3 p-3 w-100"
            onClick={handleSubmit}
          >
            Submit
          </button></>)} */}

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
            "Submit"
          )}
        </button>
        </form>
      </div>
    );
  };
  
  export default Register;