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
    const {name , email , username , phone} = user
    if(name !== "" && email !== "" && username !=="" && phone !==""){
      e.preventDefault();
      await addDoc(userCollectiomRef,user)
      navigate("/allUsers");
    }else{
      alert("Fill all sections are Required")
    }
  }

  return (
    <section className='addUser'>

    <motion.form
    initial={{x:"-100vw" , opacity:0}}
    animate={{x:0 , opacity:1}}
    transition={{delay:0.3}}
    >
        <h2>Add Users</h2>
        <input type="text" placeholder='Name' required={true} name='name' onChange={onChangeHandler} />
        <input type="email" placeholder='Email' required={true} name='email' onChange={onChangeHandler}  />
        <input type="text" placeholder='User Name' required={true} name='username' onChange={onChangeHandler}  />
        <input type="number" placeholder='Phone' required={true} name='phone' onChange={onChangeHandler}  />

        <button type='submit' onClick={addUserDetails} >Add User</button>
       

    </motion.form>
</section>
  )
}

export default AddUser
