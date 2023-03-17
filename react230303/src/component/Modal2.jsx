import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Modal2 = () => {

  let [modal, setModal] = useState(false);
  // 사라지는건 useState(true)
  useEffect(() => {
    // useEffect에 콜백함수 만들어주고
    setTimeout(() => {
      setModal(true)}, 2000)
      // 사라지는건 false 로 바꿔주면 된다.
  });

  const styles = {
    modal: {
      width: '500px',
      height: '300px',
      backgroundColor: 'skyblue',
      textAlign: 'center',
      borderRadius: '20px',
      border: '1px solid #ccc',
      paddingTop: '30px'
    }
  }

  return (
    <div>
      {
        modal == false ? null : <h1 className='modalClose' style={styles.modal}>2초 후에 생기는 Modal</h1>
        // modal == true ? <h1 className='modalClose' style={styles.modal}>2초 후에 사라지는 Modal</h1> : null
      }
    </div>
  )
}

export default Modal2
