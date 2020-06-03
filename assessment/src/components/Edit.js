import React from "react";
import { Descriptions, Carousel, Card, Input,Button} from "antd";
import Caro from "./Caro";
import { useState } from "react";
import Axios from "axios";

function Edit(props) {
 const [description,setDescription] = useState(props.data[0].description)
 const [vendor,setVendor] = useState(props.data[0].vendor)
 const [brand,setBrand] = useState(props.data[0].brand)
function handleDelete() {
    Axios.delete(`http://localhost:1337/getOne/${props.data[0].productid}`)
    .then(() => props.setEdit(false))
    .catch((err) => console.log(err))
}
function handleSubmit() {
Axios.put(` http://localhost:1337/getOne/${props.data[0].productid}`, {
        "description": description,
        "vendor": vendor,
        "brand": brand
})
.then(() => props.setEdit(false))
.catch((err) => console.log(err))
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
          <Descriptions.Item label="Parts">
            {props.data[0].parts.map((part,key) => {
                return (
                <a>{part}&nbsp;
                </a>
                )
            })}
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
<br/>
<Button onClick={handleSubmit} style={{backgroundColor:'blue'}} >Submit Changes</Button>
<br/>
<Button onClick={handleDelete}  style={{backgroundColor:'red'}} >DELETE ITEM</Button>

</div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Edit;
