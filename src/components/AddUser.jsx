import React, { useState } from 'react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom"
import { addDoc , collection } from 'firebase/firestore';
import { storage } from "../FireStoreConfig/Store"

const defaultValue = {
  name:"",
  email:"",
  username:"",
  phone:""
}

const AddUser = () => {

  const [user,setUser] = useState(defaultValue)

  const userCollectiomRef = collection(storage ,"user")

  // initialsize the useNavugate
  let navigate = useNavigate();

  // input from user handled here
  const onChangeHandler =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    e.preventDefault()
  }

  // user details submitted here
  const addUserDetails = async(e)=>{
    e.preventDefault();
    await addDoc(userCollectiomRef,user)
    navigate("/allUsers");
  }

  return (
    <section className='contact'>

    <motion.form
    initial={{x:"-100vw" , opacity:0}}
    animate={{x:0 , opacity:1}}
    transition={{delay:0.3}}
    >
        <h2>Add Users</h2>
        <input type="text" placeholder='Name' name='name' onChange={onChangeHandler} />
        <input type="email" placeholder='Email' name='email' onChange={onChangeHandler}  />
        <input type="text" placeholder='User Name' name='username' onChange={onChangeHandler}  />
        <input type="number" placeholder='Phone' name='phone' onChange={onChangeHandler}  />

        <button type='submit' onClick={addUserDetails} >Add User</button>

    </motion.form>
</section>
  )
}

export default AddUser
