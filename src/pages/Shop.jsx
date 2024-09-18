import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import BannerSection from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Shop = () => {
  const [filterList, setFilterList] = useState(products);

  useWindowScrollToTop();
  return (
    <Fragment>
      <BannerSection title="Products"/>
      <section className="filter-bar">
        <Container className="filter-bar-container">
          <Row className="justify-content-center">
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
