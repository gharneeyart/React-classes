import Hero from "../components/Hero"
import Menu from "../components/Nav"
import "../css/About.css"
import img from "../assets/images/pexels-sebastian-arie-voortman-214574.jpg"
function About () {
    const myJsx = <h3>This is awesome JSX</h3>
  const myFavFood = <ul>
    <li>Rice</li>
    <li>Plantain</li>
    <li>Amala</li>
  </ul>
  const food = ["Jollof", "Yam", "Spaghetti", "Egg"]

  const myStyle={listStyle: "none", color: "red", backgroundColor: "#eee", width: "50%", marginInline: "auto"}
    return (
      <>
      {/* <Menu/> */}
      <Hero heading= "Welcome To About Page" image={img}/>
      <div>
      <h1>Welcome to My Tech-app 1.0</h1>
        {myJsx}
        {myFavFood}
      </div>
    

    {/* map through food array */}
    {food.map((f, index) => {
      return(
        <div className="" key={index} style={myStyle} >
        <p>My Favourite Food is {f}</p>
      </div>
      )
    })}
    </>
    // Always give a key prop anytime you loop through an array of items
    )
}
    
    

export default About