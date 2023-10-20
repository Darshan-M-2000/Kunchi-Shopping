import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Thisoffer from '../components/Offers/Thisoffer'
import NewCollections from '../components/NewCollection/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div><Hero/>
    <Popular/>
    <Thisoffer/>
    <NewCollections/>
    <NewsLetter/>

    </div>
  )
}

export default Shop