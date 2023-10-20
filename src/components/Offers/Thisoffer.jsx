import React from 'react'
import './Thisoffer.css'
import exclusive_image from '../assets/exclusive_image.png'

const Thisoffer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXclusive</h1>
            <p>Offers For You</p>
            <p>Only on KUNCHI SHOPPING</p>
            <button>Check Out Now!</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />

        </div>
    </div>
  )
}

export default Thisoffer