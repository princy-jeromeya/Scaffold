import React, { useContext } from "react";
import { Col, Row, Button } from 'antd';
import { Avatar, Card } from 'antd';
import AllDataScafoldcontext from "../ScaffoldContexts/AllDataContext";
import List from '../Reuse/List';

const { Meta } = Card;

export default function Details() {
  const { currentproductDetail } = useContext(AllDataScafoldcontext);

  // Specify the index of the price you want to display
  const priceIndex = 0; // Change this index to display the desired price

  let price = null;
  if (
    currentproductDetail &&
    currentproductDetail.price &&
    currentproductDetail.price.length > priceIndex
  ) {
    price = currentproductDetail.price[priceIndex];
  }

  return (
    <>
      <List />
      <Row style={{ paddingTop: "100px", justifyContent: "center" }}> {/* Add justifyContent here */}
        <Col span={10} style={{ height: "100%" }}>
          {currentproductDetail && (
            <Card style={{ height: "100%" }}>
              <img alt="example" src={currentproductDetail.image} style={{ height: "100%", objectFit: "cover" }} />
            </Card>
          )}
        </Col>
        <Col span={8} style={{ height: "100%" }}>
          {currentproductDetail && (
            <Card style={{ height: "100%" }}>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', fontWeight: 'bold', paddingBottom: "20px" }}>
                {currentproductDetail.name}
              </h3>
              <Meta
                description={currentproductDetail.description}
                style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif', paddingBottom: "20px" }} // Apply custom style for description size
              />
              <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                {price}
              </p>
              <p style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>
                Availability: {currentproductDetail.availability}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: "20px" }}>
                <Button type="primary">
                  Buy Now
                </Button>
                <Button type="primary" style={{ marginLeft: '10px' }}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}
