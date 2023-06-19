import React from 'react'
import "./Works.scss"

function Works() {
  return (
    <div className='work'>
        <div className='work-h'>
            <p>Our Works</p>
            <h1>Our case studies</h1>
        </div>
        <div className='work-card-wrap'>
            <div className='work-card'>
               <div className='work-img cnt-1'>
                <img src="./Group 189.svg" alt="" />
               </div>
               <div className='work-card-f'>
                <h1>Email marketing</h1>
                <p>Fashion, product</p>
               </div>
            </div>

            <div className='work-card'>
               <div className='work-img cnt-2'>
                <img src="./Group 190.svg" alt="" />
               </div>
               <div className='work-card-f'>
                <h1>Content marketing</h1>
                <p>Fashion, product</p>
               </div>
            </div>

            <div className='work-card'>
               <div className='work-img cnt-3'>
                <img src="./Group 191.svg" alt="" />
               </div>
               <div className='work-card-f'>
                <h1>Growth marketing</h1>
                <p>Fashion, product</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Works