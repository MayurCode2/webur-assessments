import React from 'react'
import "./Strategies.scss"

function Strategies() {
  return (
    <div>
        <div className='srt-cont'>
            <p>Why us</p>
            <h1>What makes us <br/> stand out</h1>
        </div>
        <div className='startegy-container'>
          <div className='startegy-wrap'>
            <div className='startegy-1'>
              <div className='stg-h-1'>
                <img src="./startegy 1.svg" alt="" />
                <h1>Prefect startegy</h1>
              </div>
              <p>Based on research and analysis, we plan to <br/> itroduce revolutionary solutions</p>
            </div>
            <div className='startegy-1'>
              <div className='stg-h-1'>
                <img src="./startegy 1-2.svg" alt="" />
                <h1>Innovative ideas</h1>
              </div>
              <p>We build electrified relations between <br/> products and humans</p>
            </div>
            <div className='startegy-1'>
              <div className='stg-h-1'>
                <img src="./startegy 1-2.svg" alt="" />
                <h1>Effective solutions</h1>
              </div>
              <p>Prefected matched activities follou us to ,<br/> achieve goles in short time</p>
            </div>
          </div>
          <div className='startegy-img'>
             <img src="./Group (3).svg" alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Strategies