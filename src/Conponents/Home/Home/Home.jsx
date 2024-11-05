import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import FoodItems from '../FoodItems/FoodItems'
import BookNow from '../../BookNow/BookNow'
import CustomersSay from '../../CustomersSay/CustomersSay'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <FoodItems/>
      <BookNow/>
      <CustomersSay/>
    </div>
  )
}

export default Home