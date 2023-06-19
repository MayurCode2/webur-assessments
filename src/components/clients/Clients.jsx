import React from 'react'
import "./Clients.scss"

function Clients() {
  return (
    <div className='clients'>
        <div className='client-wrap'>
            <div className='client-c'>
               <div className='circle-c-1'>
                <img className='ellip-1 ellips' src="./Ellipse 4.svg" alt="img" />
                <img className='ellip-2 ellips' src="./Ellipse 5.svg" alt="img" />
                <img className='ellip-3 ellips' src="./Ellipse 7.svg" alt="img" />

                <div className='circle-c-2'>
                    <div className='circle-c-3'>
                        <h1>99+</h1>
                    </div>
                </div>
               </div>
            </div>

            <div className='client-section'>
                <p className='client-p-1'>Our Clients</p>
                <h1>Love form happy clients from <br/> the entire world</h1>
                <p className='client-p-2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className='client-pro'> 
                    <img src="./Ellipse 4.svg" alt="" />
                    <h1>Mr. John Doe</h1>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients