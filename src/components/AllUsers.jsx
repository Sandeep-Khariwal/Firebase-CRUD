import React,{  useEffect,useState }  from 'react';
import{MdEdit,MdDelete} from "react-icons/md";
import { Link , useNavigate } from 'react-router-dom';
import { doc , getDocs , collection, deleteDoc } from 'firebase/firestore';
import { storage } from "../FireStoreConfig/Store"
import NavBar from './NavBar';

const AllUsers = () => {

  const [user , setUser] = useState([]);

  const navigate = useNavigate();

  const userCollectiomRef = collection(storage ,"user")

  useEffect(()=>{
    const getAllUsers = async() =>{
      const data = await getDocs(userCollectiomRef)
      console.log(data)
      setUser(data.docs.map((doc)=>({...doc.data() , _id:doc.id})))
      
    }
    getAllUsers()
  },[])

  console.log(user)

  const deleteUSerDetails = async(id) =>{
    
      const userDoc = doc(storage,"user",id);
      await deleteDoc(userDoc)
      navigate("/allUsers");
  }

  return (<>
  <NavBar/>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th>user Name</th>
        <th>phone</th>
        <th>Operations</th>
      </tr>
      </thead>
      <tbody>

        {
        user.map((user) =>(
              <tr key={user._id} >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td className='buttons' >
                <Link to ={`/${user._id}`}>
                  <button className='edit'><MdEdit/></button>
                </Link>
                <Link to ={`/${user._id}`} >
                  <button className='delete' onClick={()=>deleteUSerDetails(user._id)} ><MdDelete/></button>
                </Link>
              </td>
          </tr>
      ))
        }

      </tbody>
    </table>
    </>
  )
}

export default AllUsers
