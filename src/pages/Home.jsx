import img1 from "../assets/images/pexels-max-andrey-1366630.jpg"
import Menu from "../components/Nav"
import Loader from "../components/Loader"
import "../css/Home.css"
import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"

function Home () {
    return (
        <>
        {/* <Menu/> */}
        <Hero heading="Welcome To Home Page" image={img1}/>
        {/* <ProductCard/> */}
        {/* <Loader/> */}
        {/* <h1 className="ayo bg-danger text-light">Welcome to Home page</h1> */}
        {/* <div className="" style={{backgroundColor: "blue", height: "400px", borderRadius: "15px"}}>
            <img src={img1} alt="" width={300} height={400}/>
        </div> */}
        
        </>
        // state management
    )
}

export default Home