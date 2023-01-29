import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { auth } from './firebase-auth/firebase';

function App() {

   const[userName,setUserName] = useState("");


  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }
      else
        setUserName("")
      
       
    })

  },[])
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path = "/" element = {<Home name={userName}/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/signup" element = {<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
