import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const styles = {
    wrapper: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#7e7e7e',
    },

    Btn: {
    width: '150px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    backgroundColor: 'skyblue',
    color: '#000',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer'
    }
  }

  const navigate = useNavigate();

  return (
  <div style={styles.wrapper}>
  <h1>Products</h1>
  <button style={styles.Btn} onClick={() => navigate('/products/:id')}>ProductsDetail로 이동</button>
  </div>
  );
};

export default Products;
