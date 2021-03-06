import React from 'react';
import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Edit from './components/Edit'
import Detail from './components/Detail'
import Grid from './components/Grid'
function App() {
const [data,setData] = useState([])
const [one,setOne] = useState([])
const [detail,setDetail] = useState(false)
const [edit,setEdit] = useState(false)
const [set,findSet] = useState(false)

function handleEditPage () {
setEdit(true)
setDetail(false)

}

function handleClick(data){
    axios.get(`http://localhost:1337/getOne/${data.productid}`)
    .then((res) => setOne(res.data))
    .catch((err) => console.log(err))
    setDetail(!detail)
}
  useEffect(() => {
    axios.get("http://localhost:1337/getAll")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  },[edit])

  switch(true) {
    case detail: return <Detail data={one} handleEditPage={handleEditPage}/>;
    case edit: return <Edit setEdit={setEdit} data={one}/>;
   default: return (
    <Grid handleClick={handleClick} data={data} detail={detail} setDetail={setDetail}/>
  );
}
}
export default App

