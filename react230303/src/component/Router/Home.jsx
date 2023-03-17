import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/about'>About으로 이동</Link><br/>
      <Link to='/Products'>Products로 이동</Link>
    </div>
  )
}

export default Home