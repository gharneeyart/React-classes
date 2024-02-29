import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImage from "../assets/images/pexels-max-andrey-1366630.jpg"
import { NavLink } from 'react-router-dom';

function ProductCard({product}) {
  return (
    <Card style={{ width: '18rem',height: "25rem", textAlign: "left"}}>
      <Card.Img variant="top" src={product?.image} style={{width: "100%", height: "200px"}} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          {product?.desc}
        </Card.Text>
        <Card.Text>
          {product?.price}
        </Card.Text>
        <Button variant="primary">Buy</Button>
        <Button className='ms-4' variant="warning">
          <NavLink to ={`/product/${product?.id}`} style={{textDecoration: "none", color: "white"}}>
            View
          </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;