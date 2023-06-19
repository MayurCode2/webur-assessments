import React from 'react'
import "./Home.scss"

function Home() {
  return (
    <div className='sections'>
      <div className='main-heading'>
        <h2>We ensure and transform</h2>
        <h1>business growing</h1>
      </div>
      <div className='second-heading'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text</p>
      </div>
      <div>
        <button className='heading-btn1'>Get Started</button>
        <button className='heading-btn2'>Learn More</button>
      </div>
    <div className='heading-img'>
      <img src="./Group.svg" alt="" />
    </div>
    <div className='social-icon'>
      <img className='sheading-1' src="./Group (1).svg" alt="img" />
      <img className='sheading-2' src="./Frame.svg" alt="" />
      <img className='sheading-3' src="./Frame (1).svg" alt="" />
      <img className='sheading-4' src="./Frame (2).svg" alt="" />
      <img className='sheading-5' src="./Frame (3).svg" alt="" />
      <img className='sheading-6' src="./Frame (4).svg" alt="" />
      <img className='sheading-7' src="./Frame (5).svg" alt="" />
      <img  className='sheading-8'src="./Frame (6).svg" alt="" />
    </div>
    </div>
  )
}

export default Home