import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/Nav";
import DetailPage from './pages/DetailPage'
import MyHook from './hooks/MyHook'
import FetchData from './hooks/FetchData'
import NotFoundPage from './pages/404Page'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from 'react'
import { PageTheme } from './contexts/ThemeContexts'




function App() {
  const { theme } =useContext(PageTheme)
  
  return (
    <>
    {/* <Home/>
     <About/> 
     <Products/> */}
      
      {/* Routing pages */}
      <div className={`bg-${theme} ${theme === "dark" ? "text-light" : "text-dark" } `} >
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        {/* dynamic route - it can change*/}
        <Route path="/product/:productId" element={<DetailPage/>}/> 
        <Route path="/hook" element={<MyHook/>}/> 
        <Route path="/fetch" element={<FetchData/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/*" element={<NotFoundPage/>}/> 
      </Routes>
    </BrowserRouter></div>
      
    </>
  )
}

export default App
