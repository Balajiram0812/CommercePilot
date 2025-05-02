// import Header from './pages/Header';
import { Col, Row, Container } from 'react-bootstrap';
import Header from '../pages/Header';
import Sidebar from '../pages/SideBar';

const PageLayout = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={3}>
                      
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                  <Header/>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default PageLayout;