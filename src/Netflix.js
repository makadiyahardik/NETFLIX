import React, { useState } from 'react'
import Myacordiation from './Myacordiation'
import './Netflix.css'

import Netflixdatas from './Netflixdata'
function Netflix() {
 const [data,setData]=useState(Netflixdatas)

  return (
    <>
        <div className='netflix'>

<div className='heading'>
<h1>Frequently Asked Questions</h1>
</div>

<div className='text-area'> 

{data.map((curElm)=>{
    return(
        <>
           <Myacordiation NetflixHead={curElm}/>
        </>
    )

})}
</div>

      


</div>

    </>
  )
}

export default Netflix