import React, {useState,preventDefault} from "react";
import { Descriptions, Carousel, Card, Button } from "antd";
import Caro from "./Caro";
import axios from "axios";

function Detail (props) {
    
    function randomNum(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    let items = []

    if(items &&  props.data.length) {
      
            axios.get(`http://localhost:1337/findSet/${randomNum(1,10)}`)
            .then((res) => items = (res.data))
            .catch((err) => console.log(err))
        

    }
      
  
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
    <Descriptions.Item label="Set">{items.length > 1 ? ('Product is not part of a set') : ('Products in this set:')}
    {items.length ? (' '): items.map((item,key) => {
        return item.description
    })}
    </Descriptions.Item>
          <Descriptions.Item label="Parts">
            {props.data[0].parts.map((part, key) => {
              return <a>{part}&nbsp;</a>;
            })}
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
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={props.handleEditPage}
            style={{ backgroundColor: "red" }}
          >
            Edit Details
          </Button>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Detail;
