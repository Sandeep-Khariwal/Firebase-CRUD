import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Assignment2 = () =>{

  const navigate = useNavigate()

    const [text , setText]  = useState({
        sentance:"",
        letter:"",
        updated:false
    })
  
    const [flag , setFlag] = useState(false)
  
  
    const onChangeHandler = (e) =>{
      text.updated= false
      setText({...text, [e.target.name]:e.target.value})
      console.log(text)
    }
  
    const onsubmitHandler = () =>{
      text.updated= true
  
      let letter = text.letter
      var position ;
      for(var i = 0; i < text.sentance.length ; i++){
        if(text.sentance[i] === letter){
          position = i+1
          setFlag(false)
          break
        }
        else{
          setFlag(true)
        }
      }
  
      let result = {
        sentance:text.sentance.slice(position),
        letter:`${text.letter}`,
        updated:true
      }
      
      setText(result,)
      
    }

    return(
        <section>
        <div className='asign2'>
        <button onClick={()=>navigate("/")} >Go Back</button>
        <h1>Reduce Text</h1>
        <input type="text" name='sentance' onChange={onChangeHandler} value={text.sentance} placeholder='Type your sentance' /> 
        <input type="text"  name='letter' onChange={onChangeHandler} placeholder='Type your letter' /> 
    
        <button type='button' onClick={onsubmitHandler} >Submit</button>
         {
          text.updated? <h2>Rest of Sentance Given Below :  {
          flag? <span>Letter not Present</span> : <span>{text.sentance}</span>
          }</h2> : " "
        } 

        </div>
        </section>
    )
}

export default Assignment2