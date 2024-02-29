import React, { useState, useEffect} from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';

const FetchData = () => {
    // hooks
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    // fetching blogs with axios
    const fetchBlogs = async () => {
        const url = "https://blogg-api-v1.onrender.com/blogs/all"

        try {
          setLoading(true);
            const response = await axios.get(url) // const { data} = await axios.get(url)
            const data = await response?.data
            // console.log(data.blogs);

            if(data){
              setBlogs(data?.blogs)
              setLoading(false);
            }
            // setBlogs(data?.blogs)
            
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    // console.log(blogs);

    // if(loading){
    //   return(
    //     <Loader/>
    //   )
    // }
  return (
    <div>
      {/* style={{backgroundColor: "lightblue"}} */}
        <h1>Fetch Data Component</h1>
        {/* className="d-flex justify-content-between flex-wrap gap-3" */}
        {loading ? (<Loader/>) : (<>
        <div className='row d-flex gap-3 justify-content-center'> 
        {blogs.map((blog) => {
          return (
            <div className="col-12 col-md-4 col-lg-3 rounded" style={{height: "400px", backgroundColor: "#eee", padding: "5px"}} key={blog._id}>
              {/* <BlogCard blog={blog} imageUrl="https://i.pravatar.cc/40?img=1" /> */}
              <div className="card-img">
                <img src={blog.imageUrl} alt="" style={{width: "100%", height: "200px", backgroundColor: "red"}}/>
              </div>
              <div className="text-start">
                <b>{blog.title}</b>
                <p>{blog.content.slice(0,35)}...</p>
                <p>{blog.author}</p>
                <p>{blog.read_time}min</p>
              </div>
            </div>
          );
        })}
        </div></>)}
        
    </div>
  )
}

export default FetchData