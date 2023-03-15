import React from "react";
import "../Main/MainPostCard.css";

const MainPostCard = () => {
  const postCards = [
    {
      id: 1,
      tltie: "Lorem ipsum dolor sit.",
      Txt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi eum possimus. Nam iure aperiam quisquam ad rem, architecto modi soluta consectetur accusamus sunt exercitationem pariatur veniam nemo libero! A.",
    },
    {
      id: 2,
      tltie: "Lorem ipsum dolor sit.",
      Txt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi eum possimus. Nam iure aperiam quisquam ad rem, architecto modi soluta consectetur accusamus sunt exercitationem pariatur veniam nemo libero! A.",
    },
    {
      id: 3,
      tltie: "Lorem ipsum dolor sit.",
      Txt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi eum possimus. Nam iure aperiam quisquam ad rem, architecto modi soluta consectetur accusamus sunt exercitationem pariatur veniam nemo libero! A.",
    },
  ];

  const renderPostCard = postCards.map(postCard => {
    return (
      <div className="postCard" key = {postCard.id}>
      <h2>{postCard.tltie}</h2>
      <p className="postCardTxt">{postCard.Txt}</p>
      </div>
    )
  })

  return (
    <section className="postBox">
      {renderPostCard}
    </section>
   
  );
};

// function Card() {
//   return (
//     <div className="postCard">
//       <h2>Lorem ipsum dolor sit.</h2>
//       <p className="postCardTxt">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
//         excepturi eum possimus. Nam iure aperiam quisquam ad rem, architecto
//         modi soluta consectetur accusamus sunt exercitationem pariatur veniam
//         nemo libero! A.
//       </p>
//     </div>
//   );
// }

export default MainPostCard;
