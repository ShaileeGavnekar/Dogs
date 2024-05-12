import React, { useState } from 'react'

function Card({id,image,info,name,price,removedog}) {
    const [readmore,setReadmore]=useState(false);
    const description=readmore? info :`${info.substring(0,200)}....`
                        
    function readmoreHandler(){
        setReadmore(!readmore);
    }

  return (
    <div className='card'>
        <img src={image} alt='' className='dog-image'></img>
        <div className='dog-info'>
            <div className='dog-details'>
                <h4 className='dog-price'>{price}</h4>
                <h4 className='dog-name'>{name}</h4>
            </div>
        <div className='description'>
            {description}
            <span className='read-more' onClick={readmoreHandler} >
                {readmore? `Show less`:`Read more`}
            </span>
            </div>
        </div>
        <button className='dog-button' onClick={()=>removedog(id)}>
            Not Interested</button>
    </div>
  )
}

export default Card


