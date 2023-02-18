import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const defaultValue = {
    email:"",
    password:"",
    messege:""
}

const Login = ({app,setLogin}) => {

    const navigate = useNavigate()
    const [user,setUser] = useState(defaultValue)

    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const login = () =>{
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            setUser({messege:"Login Successfully"})
            alert("Login Successfully")
            setLogin(true)
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            setUser({messege:errorMessage})
          });
        navigate("/Assignment1");
    }

  return (
    <div className='userLogin'>
    <div className="login">
    <h1>Login</h1>
    <p>{user.messege}</p>
    <input type="text" name="email"  onChange={handleChange} placeholder="Enter your Email"></input>
    <input type="password" name="password"  onChange={handleChange} placeholder="Enter your Password" ></input>
    <div className="button" onClick={login} >Login</div>
    <div>or</div>
    <div className="button"  onClick={() => navigate("/register")}>Register</div>
</div>
</div>
  )
}

export default Login