import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const BlogCard = ({blog, imageUrl}) => {
  return (
    <Card style={{ width: '18rem',height: "30rem", textAlign: "left"}}>
      <Card.Img variant="top" src={blog?.imageUrl} style={{width: "100%", height: "200px"}} />
      <Card.Body className='bg-secondary'>
      <div className="d-flex justify-content-between">
      <Button variant="primary" style={{fontSize: ".75rem", borderRadius: "1em", padding: ".25em .75em"}}>{blog?.category}</Button>
      <Card.Text style={{fontSize: "1rem", color: "white"}}>{ blog?.tags}</Card.Text>
      </div>
        <Card.Title className='text-warning'>{blog?.title}</Card.Title>
        <Card.Text className='text-light'>
          {blog?._id === "6581a73eacb10e1b52eace98" ? `${blog?.content.slice(0,50)}...read more` : blog?.content}
        </Card.Text>
       <div className="d-flex align-items-center bottom">
       <Card.Img className='me-3' src={imageUrl} style={{borderRadius: "50%", width:"2rem", height:"2rem"}}/>
        <Card.Text className='text-info'>{blog?.author}</Card.Text>
       </div>
        <Card.Text className='text-light' style={{fontSize:"0.8rem"}}>createdAt: {blog?.createdAt}</Card.Text>
        <Card.Text className='text-light' style={{fontSize:"0.8rem"}}>updatedAt: {blog?.updatedAt}</Card.Text>
        
      </Card.Body>
    </Card>
  )
//   <img src="" alt="user__image" class="user__image">
//   <div class="user__info">
//     <h5>Jane Doe</h5>
//     <small>2h ago</small>
//   </div>
}

export default BlogCard