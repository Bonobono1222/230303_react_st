import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  const styles = {
    wrapper: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#7e7e7e',
    }
  };

  return (
    <div style={styles.wrapper}>
      <h1>Home Page</h1>
      <Link to='/about'>About으로 이동</Link><br/>
      <Link to='/Products'>Products로 이동</Link>
    </div>
  );
};

export default Home