import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const defaultValue = {
    email:"",
    password:"",
    reEnterPassword:"",
    messege:""
}

const Register = (props) => {
    
    const [user,setUser] = useState(defaultValue)
    const navigate = useNavigate()
    

  const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
  }

  const register = () =>{

    if(user.password !== user.reEnterPassword){
        setUser({messege:"Password Doesn't match"})
    }

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(props.app);

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({messege:"Registered Successfully"},()=>{
            user.target.email.value = "";
            user.target.password.value = "";
            user.target.reEnterPassword.value = "";
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        setUser({messege:errorMessage})
        
      });
  }

  return (
    <div className='userRegister' >
    <div className="register">
        {console.log(user)}
        <h1>Register</h1>
        <p>{user.messege}</p>
        <input type="text" name="email" placeholder="Your Email" onChange={ handleChange }></input>
        <input type="password" name="password" placeholder="Your Password" onChange={ handleChange }></input>
        <input type="password" name="reEnterPassword"  placeholder="Re-enter Password" onChange={ handleChange }></input>
        <div className="button" onClick={register} >Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
    </div>
    </div>
  )
}

export default Register