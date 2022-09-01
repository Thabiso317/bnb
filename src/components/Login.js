

// export default Login;
import React, { useState } from 'react'
import {Link, useHistory  } from 'react-router-dom';


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../config/firebase"
// import {useNavigate} from 'react-router-dom' 

   function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] =useState("");
    //navigate
    const usehistory = useHistory()
    const Login =() => {
      usehistory.push('/home')

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const userp = userCredential.user;
          console.log("you welcome")
          // ...
          const userlog = collection(db,"logged")
          const user ={
            email: email,
            password: password,

          }
          addDoc(userlog,user).then(()=>{
            usehistory.push('/home')
        }).catch((error)=>{
            console.log("not logged")
          })

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
        });
      
    
            



        return'/home'
    }
    return (
       

        
        <div className="low">

        <div id="myHeader">
            <h1>Login.</h1>
            <div className='login-form'>   
            <input type="email" placeholder='Email Address'  onChange={(e)=>setEmail(e.target.value)}/>
            
            <br>
            </br>
            <input type="password"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}  />
            <br>
            </br>

            <div className="btnlog"> 
            <button onClick={(e)=>{Login()}} className="log-sub">Submit</button>
    
           
            
            </div>
            <div className='bbb'>
            <Link className='link2' to="/signup">signup...</Link> 
            
            </div>

            </div>
        </div>

        </div>
    )
}

export default Login;
