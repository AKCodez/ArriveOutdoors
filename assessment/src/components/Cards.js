import { Card, Col,Carousel } from 'antd';
import React,{useState} from 'react';
import Caro from './Caro'
import axios from 'axios'
function Cards (props){


      return (
          <Col span={8}>
          <Card onDoubleClick={() => props.handleClick(props.data)} title={props.data.description} bordered={true} >
          <Carousel style={{overflow:'hidden'}}>
          {props.data.pimages.map((img, key) => {
            return <Caro key={key} img={img}/>
          })}
          </Carousel>
          </Card>
        </Col>
      )

   
}

export default Cards