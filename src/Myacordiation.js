import React,{useState} from 'react'
import './Netflix.css'
import Slide from 'react-reveal/Slide';

function Myacordiation({NetflixHead}) {
    const [show, setShow] = useState(false)
  return (
   <>

   <div className='showdata'> 
       <div className='text-area'>
           <h1>{NetflixHead.que}</h1>
           
       </div>
       <div className='btn-group'> 
       <button className='btn' onClick={()=>setShow(!show)}>  {show ? " - " : " + "} </button>
       </div>
       <div className='ans'>
       <Slide left>
        {
            show &&  <h2>{NetflixHead.ans}</h2>
        }
        </Slide>
       </div>
       </div>
       
   </>
  )
}

export default Myacordiation