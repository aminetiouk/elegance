import { Col, Container, Row } from "react-bootstrap";
import productBg from "../../Images/vya-naturals.jpg";
import "./Banner.css";

const BannerSection = ({title}) => {
    return ( 
        <div className="image-container">
            <img src={productBg} alt="Product-bg" />
            <div className="over">
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerSection;