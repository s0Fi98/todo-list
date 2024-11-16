import React from 'react';

import Nav from './nav';
import Card from '../pages/card';
import Status from './status';

import '../css/b.css';

const B = () => {

  return (
    <div className='home-container'>
      <Nav />
      <Status />
      <div className='home-card'>
      <Card />
      </div>
    </div>
  )
}

export default B