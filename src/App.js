import './App.scss';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useState } from 'react';
import Assignment1 from './components/Assignment1';
import Assignment2 from './components/Assignment2';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUsers from './components/EditUsers';

//import CSS of all the components
import "./styles/assignment2.scss"
import "./styles/Login.scss"
import "./styles/addusers.scss"
import "./styles/allusers.scss"
import "./styles/editUsers.scss"
import "./styles/navbar.scss"
import "./styles/home.scss"
import "./styles/register.scss"

import {app} from "./FireStoreConfig/Store"


function App() {

  const [islogin , setLogin] = useState(false)


  return (
    <div className='App' >
      <Router>
        <Routes>
          <Route exact path='/Firebase-CRUD' element={<Home/> } />
          <Route exact path='/Assignment1' element={islogin? <Assignment1 setLogin={setLogin} /> : <Login app={app} setLogin={setLogin}/>} ></Route>
          <Route exact path='/Assignment2' element={<Assignment2/>} />
          <Route exact path='/login' element={<Login app={app} setLogin={setLogin} />} />
          <Route exact path='/register' element={<Register app={app} /> } />
          <Route exact path='/addUsers' element={<AddUser/> } />
          <Route exact path='/allUsers' element={<AllUsers/> } />
          <Route exact path='/:id' element={<EditUsers/> } />
        </Routes> 
     </Router>
    </div>
  );
}

export default App;
