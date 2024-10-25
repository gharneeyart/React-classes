import React from 'react'
import heroImg from "../assets/images/pexels-sebastian-arie-voortman-214574.jpg"

const Hero = (props) => {
    // destructuring props
    const {heading= "Welcome to My Page", image} = props
  return (
    <div style={{backgroundColor: "purple", color: "white", height: "400px",}}>
        <div className="">
            <img src={image} alt="" width={300} height={350}/>
        </div>
        {/* <h1>Welcome To My World</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero