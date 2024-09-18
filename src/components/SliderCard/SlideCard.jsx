import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './slidercard.css';

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className='box'>
      <Row>
        <Col md={6} xs={{ order: 2 }} className="text-section">
          <h1>{title}</h1>
          <p>{desc}</p>
          <button className='btn-primary'>
            <Link to='/shop' style={{ textDecoration: 'none', color: 'inherit' }}>
              Shop Now
            </Link>
          </button>
        </Col>
        <Col md={6} xs={{ order: 1 }} className="image-section">
          <img src={cover} alt='cover' className="cover-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
