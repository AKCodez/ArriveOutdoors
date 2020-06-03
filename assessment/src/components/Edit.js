import React from "react";
import { Descriptions, Carousel, Card, Input,Button} from "antd";
import Caro from "./Caro";
import { useState } from "react";

function Edit(props) {
 const [description,setDescription] = useState(props.data[0].description)
 const [vendor,setVendor] = useState(props.data[0].vendor)
 const [brand,setBrand] = useState(props.data[0].brand)

function handleSubmit() {

}

  if (props.data.length) {
    return (
      <div>
        <Descriptions title="Product Edit Page">
          <Descriptions.Item label="Product Title">
              <Input onChange={event => setDescription(event.target.value)} value={description} placeholder={props.data[0].description} />
          </Descriptions.Item>
          <Descriptions.Item label="Vendor">
          <Input onChange={event => setVendor(event.target.value)} value={vendor}  placeholder={props.data[0].vendor} />
          </Descriptions.Item>
          <Descriptions.Item label="Brand">
          <Input onChange={event => setBrand(event.target.value)} value={brand}  placeholder={props.data[0].brand} />
          </Descriptions.Item>
          <Descriptions.Item label="images">
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

<Button onClick={handleSubmit} style={{backgroundColor:'blue'}} >Submit Changes</Button>
</div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Edit;
