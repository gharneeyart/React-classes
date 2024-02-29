import React from 'react'
import { useState, useEffect } from 'react'
// You can't redeclare react

// Function based component cannot effectively manage data that changes/ updates them as they change, hence the introduction of the react hook

// Hooks includes useState, useEffect, useContext, useRef, custom hook.

// useState is used to update the state of function based component
// import/destructure useState from React
// It must be used inside the function body.
// Must be imported at the top level of the component
// It has three main parts: stateName, function to update the state(i.e setName()) and the useState(initialState)
const MyHook = () => {

    // hook
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState({
        bg: "",
        col: "black"
    })

    // useEffect hook
    useEffect(()=>{
        console.log("useEffect called");
    })

    // run only once on page load
    useEffect(()=>{
        console.log("useEffect called once");
    }, []); // componentDidMount

    // useEffect hook as componentDidUpdate
    useEffect(()=>{
        if(count === 5){
            setTheme({
                bg: "black",
                col: "white"
            })
        }
    }, [count]) // componentDidUpdate



    // let count = 0;
    const handleIncrease = () => {
        // count + 1;
        setCount(count + 1)
    }
    const handleDecrease = () => {
        // count - 1;
        setCount(count - 1)
    }
    // const handleClick1 = () => {
    //     setTheme("Red")
    // }
    // const handleClick2 = () => {
    //     setTheme("Blue")
    // }
console.log(count);
console.log(theme);
  return (
    <div style={{backgroundColor: theme.bg , color: theme.col}}>
        <h1>My Hook Component</h1>
        <div className="">
            <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
            <span className='mx-4 fw-bold'>{count}</span>
            <button className='btn btn-outline-success' onClick={handleIncrease}>+</button>
        </div>
        <p>{theme.col}</p>
        {/* <div className="">
            <button className='btn btn-outline-danger me-4' onClick={handleClick1}>Red</button>
            <button className='btn btn-outline-primary' onClick={handleClick2}>Blue</button>
        </div> */}
        <div className="">
            <button className='btn btn-danger me-4' onClick={()=>setTheme({
                bg: "red",
                col: "white"
            })}>Red</button>
            <button className='btn btn-primary' onClick={()=>setTheme({
                 bg: "blue",
                 col: "yellow"
            })}>Blue</button>
        </div>
       
    </div>
  )
}

export default MyHook