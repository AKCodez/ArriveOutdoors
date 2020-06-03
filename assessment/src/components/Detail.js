import React from "react";
import { Descriptions, Carousel, Card,Button } from "antd";
import Caro from "./Caro";

function Detail(props) {
  if (props.data.length) {
    return (
      <div>
         
        <Descriptions title="Product Detail Page">
          <Descriptions.Item label="Product Title">
            {props.data[0].description}
          </Descriptions.Item>
          <Descriptions.Item label="Vendor">
            {props.data[0].vendor}
          </Descriptions.Item>
          <Descriptions.Item label="Brand">
            {props.data[0].brand}
          </Descriptions.Item>
          <Descriptions.Item label="images">
            {" "}
            {props.data[0].pimages.length}
          </Descriptions.Item>
        </Descriptions>
        <Card>
          <Carousel
            style={{
              overflow: "hidden",
              textAlign: "center",
              height: "auto",
              lineHeight: "auto",
              background: "#364d79",
            }}
          >
            {props.data[0].pimages.map((img, key) => {
              return <Caro key={key} img={img} />;
            })}
          </Carousel>
        </Card>
        <div style={{textAlign:'center'}}>

        <Button onClick={props.handleEditPage} style={{backgroundColor:'red'}} >Edit Details</Button>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Detail;
