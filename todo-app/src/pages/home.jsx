import React from 'react'
import Nav from './nav'
import Card from '../pages/card';
import '../css/b.css'

const B = () => {

  return (
    <div className='home-container'>
      <Nav />
      <div className='home-card'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default B