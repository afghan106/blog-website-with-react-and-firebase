import React from 'react'
import {auth,provider} from '../config/firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = ({setauth}) => {

    let navigate=useNavigate();
const singinwithgoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem('isauth',true);
        setauth(true);
        navigate('/');
    })
}



  return (
    <div>
      <h1>sign in with google accout</h1>
      <button className='signIn' onClick={singinwithgoogle}>Sign in with google</button>
    </div>
  )
}

export default Login
