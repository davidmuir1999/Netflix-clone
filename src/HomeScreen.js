import React from 'react'
import "./Homescreen.css";
import Nav from './Nav';
import Banner from './Banner';

function HomeScreen() {
  return (
    <div className='homescreen'>
      <Nav/>
      <Banner/>
    </div>
  )
}

export default HomeScreen