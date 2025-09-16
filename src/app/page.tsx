import React from 'react'

import Hero from "../../components/home/Hero"
import Footer from "../../components/home/Footer"
import Search from "../../components/home/Search"
import GameList from "../../components/home/GameList"
const page = () => {
  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
      <Hero/>
      <Search/>
      <GameList/>
      
      
    </div>
  )
}

export default page

