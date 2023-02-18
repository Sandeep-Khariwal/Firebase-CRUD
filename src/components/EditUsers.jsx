import { useState , useEffect } from 'react';
import {motion} from "framer-motion";
import {useNavigate , useParams} from "react-router-dom";
import { updateDoc } from 'firebase/firestore';
import { doc ,getDocs , collection} from 'firebase/firestore';
import { storage } from "../FireStoreConfig/Store"


const EditUsers = () => {

  const defaultValue = {
      name:"",
      email:"",
      username:"",
      phone:""
  }

  const [user,setUser] = useState(defaultValue)
  const {id} = useParams();
  const userCollectiomRef = collection(storage ,"user")


  // initialsize the useNavugate
  const navigate = useNavigate();

  useEffect(()=>{
    loadUserDetails()
  }, []);


  const loadUserDetails = async() =>{
    const data = await getDocs(userCollectiomRef)
    const resp = data.docs.map((doc)=>({...doc.data() , _id:doc.id}))
    resp.map((item)=>{
      if(item._id === id){
        console.log("item is : ",item)
        setUser(item)
      }
      return 1
    })
  }

  const onChangeHandler =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }

  // user details submitted here
  const editUserDetails = async(e)=>{
    e.preventDefault()
    const {name , email , username , phone} = user
    if(name !== "" && email !== "" && username !=="" && phone !==""){
    console.log("update id is : " + id)
    const userDoc = doc(storage,"user",id);
    await updateDoc(userDoc,user)
    alert("Data is edited")
    navigate("/allUsers");
    }else{
      alert("Fill all sections are Required")
    }
  }

  return (
    <section className='userEdit'>

    <motion.form
      initial={{x:"-100vw" , opacity:0}}
      animate={{x:0 , opacity:1}}
      transition={{delay:0.3}}>

      <h2>Edit Users</h2>
        <input  name='name' onChange={onChangeHandler} value={user.name } />
        <input  name='email' onChange={onChangeHandler} value={user.email} />
        <input  name='username'  onChange={onChangeHandler} value={user.username} />
        <input  name='phone' onChange={onChangeHandler} value={user.phone} />
        <button type='submit' onClick={editUserDetails}>EditUser</button>
    </motion.form>
</section>
  )
}

export default EditUsers