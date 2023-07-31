import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';



function Contact() {
    return (
      <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth }}

      >
      <motion.div animate={{ rotate: 360 }}  transition={{ duration: 3, type: 'spring', bounce: 0.2 }}
      className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
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
    </motion.div>
    </motion.div>
    );
  }
  
  export default Contact;