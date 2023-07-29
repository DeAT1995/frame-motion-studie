import Card from 'react-bootstrap/Card';


function Contact() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <Card style={{ width: '18rem' }} className="mx-auto">
      <Card.Body >
        <Card.Title className="d-flex justify-content-center align-items-center">Contact Us</Card.Title>
        <br/>
        <Card.Text>
         Our Contacts
        </Card.Text>
        <ul>
          <li>
          <Card.Link href="#">E-mail</Card.Link>
        </li>
        <li>
         <Card.Link href="#">Phone</Card.Link>
        </li>
        </ul>
      </Card.Body>
    </Card>
    </div>
    );
  }
  
  export default Contact;