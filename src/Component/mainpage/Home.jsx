import React from 'react'
import Categories from './Categories'

import Sliderbar from './Sliderbar'

const Home = () => {
  return (
    <div>
      <section className='home'>
        <div className="container d_flex">
            <Categories/>
            <Sliderbar/>
        </div>
      </section>
    </div>
  )
}

export default Home
