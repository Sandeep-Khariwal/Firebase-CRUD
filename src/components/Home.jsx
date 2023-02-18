import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div  className='asgnmnt1'>
        <button onClick={()=>navigate("/Assignment1")} >Assignment-1</button>
      </div>

      <div className='asgnmnt2'>
        <button onClick={()=>navigate("/Assignment2")} >Assignment-2</button>
      </div>

    </section>
  )
}

export default Home