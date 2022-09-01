import React, { useState } from "react"
//import React,{useState} from "react";
import { Link, useHistory} from "react-router-dom";
import{auth} from "../config/firebase"
import {db} from "../config/firebase"
import {addDoc, collection} from "firebase/firestore" 
import {createUserWithEmailAndPassword} from "firebase/auth"




function Signup(){
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const History =useHistory()
  

    const register=()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const userP = userCredential.user;
    console.log("register")

    const userRef = collection(db,"users")
    const user={
        name:name,
    }
    addDoc(userRef,user).then(()=>{
        History.push('/home')
    }).catch((error)=>{
      console.log("not added")
    })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ..
  });
    }

    return(
    <div className="full-signup-page">
      
      <div className="class">
      <h2>Signup</h2>
       <div className="signup-form">
       
        <input type="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
        <br>
        </br>
        
        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <br>
        </br>
        
        <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
        <br>
        </br>
       
        { <div className="btn-sign"> 
            <button onClick={(e)=>{register()}} className="Signup-btn">Submit</button>
    
            </div> }
            </div>
            </div>
    </div>
    );
}
export default Signup;