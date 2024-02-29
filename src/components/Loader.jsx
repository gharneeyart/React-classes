import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    // <Spinner animation="border" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </Spinner>

    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" style={{color: "red"}} className='me-3'/>
      <Spinner animation="border" style={{color: "blue"}} className='me-3'/>
      <Spinner animation="border" style={{color: "green"}} className='me-3'/>
    </div>
  );
}

export default Loader;