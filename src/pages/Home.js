import Card from 'react-bootstrap/Card';


function Home() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <Card style={{ width: '40rem' }} className="mx-auto">
      <Card.Body >
        <Card.Title className="h1 d-flex justify-content-center align-items-center">Home</Card.Title>
        <br/>
        <Card.Text style={{textAlign: "justify"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    );
  }
  
  export default Home;