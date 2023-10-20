import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'> 
        <h1>Get Exclusive Offerse On Your Kunchi Shopping </h1>
        <p>Subscribe to our </p>
        <h2>KUNCHI VIBES YOUTUBE CHANNEL</h2>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter