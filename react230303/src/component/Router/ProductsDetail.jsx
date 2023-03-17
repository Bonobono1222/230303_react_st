import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductsDetail = () => {

  const styles = {
    wrapper: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#7e7e7e',
    }
  };

  const params = useParams();
  // 콘솔로그를 찍었을 때 key, value object를 반환한다.
  // id라는 key이 있고, 01이라는 value값이 있다.
  // id라는 key값은 path='products/:id' 여기서 온다.
  // useParams라는 리액트 훅을 사용히면 URL id값을 가져올 수 있다.
  console.log(params);


  return (
    <div style={styles.wrapper}>
    <h1>ProductsDetail</h1>
    <Link to='/'>Home으로 이동</Link>
    </div>
  );
};

export default ProductsDetail
