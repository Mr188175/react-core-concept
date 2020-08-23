import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
 
  const friendsName = [
    {name:"Shahadat Hossain", home:"Cummilla"},
    {name:"Ashikur Rahman", home: "Cumilla"},
    {name:"Al helal Babu",home: "Cumilla"},
    {name:"Rokibul Hasan", home:"Feni"},
    {name:"Shahidul Islam Mojumdar", home:"feni"}
  ]
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
       
       {
         friendsName.map(name => <Friends friend ={name}></Friends>)
       }

     
       <Users></Users>
      </header>
     
      
     
      
    </div>
  );

  
}

// এখানে আমরা api থেকে ডাটা কালেক্ট করে ওয়েবসাইটে দেখানো শিখেছি।
function Users() {
  const [users,setUsers] = useState([]);
  useEffect(() => 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (res => res.json())
  .then (data => setUsers(data)),[]
  )
  return (
    <div>
      <h3>Dynamic user:</h3>
       {
         users.map(user => <li>{user.name}</li>)
       }
    </div>
  )
}
//এখানে আমরা কিভাবে কাউন্টার increse ,decrese করে তা শিখলাম
function Counter () {
  const  [count,setCount] = useState(1)
  const increse = () => setCount(count + 1);
  const decrese = () => setCount(count - 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove = {increse}>increse</button>
      <button onClick ={decrese}>decrese</button>
    </div>
  )
}


// এখানে আমরা পুরো অবজেক্ট পাস করেছি
function Friends (props) {
  const friendStyle = {
    border:"2px solid green",
    margin:"10px",
    borderRadius:"10px",
    width:"300px",
    height:"210px"
  }
  const {name,home} = props.friend;
  return (
    <div style ={friendStyle}>
      <h3>{name}</h3>
      <h4>{home}</h4>
      <button>click</button>
    </div>
  )
}


export default App;
