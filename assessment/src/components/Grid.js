import React from 'react'
import Cards from './Cards'
import { Row } from 'antd';

function Grid (props){
return (
<div className="App">
  <br/>
<h1> POC Product Management System</h1>
<br />
<br />
     <div className="site-card-wrapper">
    <Row gutter={16}>
    {props.data.map((product,id) => {
      return <Cards handleClick={props.handleClick} detail={props.detail} setDetail={props.setDetail} id={id} data={product}/>
    })}
    </Row>
  </div>
</div>
)
}
export default Grid