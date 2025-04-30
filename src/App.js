import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import { Col,Row, Container } from 'react-bootstrap';
import Sidebar from './pages/SideBar';

function App() {
  return (
    // <div >
    // <Sidebar2/>
    //   <div >
    //     <Header /> 
    //   </div>

    // </div>
<Container fluid>
  <Row>
    <Col md={3}>
      {/* <Sidebar /> */}
      <Sidebar/>
    </Col>
    <Col md={9}>
      <Header />
      
    </Col>
  </Row>
</Container>


  );
}


export default App;
