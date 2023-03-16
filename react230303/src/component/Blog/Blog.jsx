import React from 'react'
import './Blog.css'
import {useState} from 'react';

const Blog = () => {
  const [title, setTitle] = useState([
    "상현톡",
    "지인톡",
    "해민톡",
  ])

  const name = ["여상현", "이지인", "강해민"]

  const [modal, setModal] = useState(false);
  // 모달창을 띄우기 위한 상태값
  const [modalTitle, setModalTitle] = useState(0);
  // 모달창에 표시될 제목 글의 인덱스

  const deleteTitle = (index) => {
    const newTitle = [...title];
    newTitle.splice(index , 1)
    setTitle(newTitle);
  }
  // 글삭제

  return (
    <div>
      <div className='nav'>
        <h1>BLOG</h1>
      </div>

      {
        title.map((item, i)=>{
          return (
            <div className='list' >
              <h4 onClick={() => {
                if(modal && modalTitle === i) {
                  setModal(false);
                } else {
                  setModal(true);
                  setModalTitle(i);
                }}}>{item}</h4>
              <p>안녕하세요 저는 {name[i]} 입니다.</p>
              <button onClick={()=> deleteTitle(i)}>글삭제</button>
            </div>
          )
        })
      }

      {modal && <Modal modalTitle={modalTitle} title={title} closeModal={() => setModal(false)}/>}
      
    </div>
  )
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Comment</p>
      <button onClick={props.closeModal}>닫기</button>
    </div>
  )
}

export default Blog