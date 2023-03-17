import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate("/");

  // useNavigate 함수를 리턴한다
  // 함수의 파라미터 안에 내가 이동하고 싶은 경로 작성
  // 함수 안에서 사용할 때는 useNavigate를 사용하는게 좋다.
  // 메뉴(li-a)처럼 함수 호출없이 이동할 때는 Link 사용
  const goHome = () => {
    navigate("/");
  };
  
  const navigate2 = useNavigate("/about/member");

  const goMember = () => {
    navigate2("/about/member");
  };

  const navigate3 = useNavigate("/about/location");

  const golocation = () => {
    navigate3("/about/location");
  };

  const styles = {
    wrapper: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#7e7e7e',
    },

    Btn: {
    width: '120px',
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
  };

  return (
    <div style={styles.wrapper}>
      <h1>About Page</h1>
      <Outlet/>
      {/* <Link to='/'>
        <button>Home으로 이동</button>
      </Link> */}
      <button style={styles.Btn} onClick={goHome}>Home으로 이동</button>
      <button style={styles.Btn} onClick={goMember}>member 나와</button>
      <button style={styles.Btn} onClick={golocation}>location 나와</button>
    {/*<Link to='/about/member'>
        <button>member 나와</button>
      </Link>
      <Link to='/about/location'>
        <button>location 나와</button>
      </Link>
      이렇게 해도 되고

      <button onClick={() => {navigate("/about/member")}}>member 나와</button>
      <button onClick={() => {navigate("/about/location")}}>location 나와</button>
      이렇게 해도 된다.*/}
    </div>
  );
};

export default About;
