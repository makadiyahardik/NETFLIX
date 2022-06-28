import React, { useState } from 'react'

import './Home.css'
function Home() {
    const[data,setData]=useState()

    function saveData(e){
        setData(e.target.value)
        console.log(e.target.value);
    }
    function saveForm(){
     
        if(data===""){
            alert("Entre Your Email")
        }else{
           
        }
   
    }
  return (
   <>
       <div className='header'>
       <div className='overlay' > 
<div className='navbar'>
    <div className='logo'>
<img src='./images/Netflix-Logo.png' alt='logo'/>
    </div>
    <div className='two-button'>
        <button className='left-btn'>Signin</button>
        <button className='right-btn'>Login</button>

    </div>
</div>


<div className='centre-text'>
    <h1>Unlimited movies,TV
    <br/>  shows and more.</h1>
    <h2>Watch anywhere. Cancel anytime.</h2>
    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
</div>
<div className='searchBar'>
    <input type='text' placeholder='Email Adress' value={data} onChange={saveData}/>
    <button onClick={saveForm}>Get Started </button>
</div>
 </div>
       </div>
  
   </>
  )
}

export default Home