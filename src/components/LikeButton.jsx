import { useState } from "react";

function LikeButton() {
  const [likeState, setLikeState] = useState(0);
  const randomColor = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleAdd = () => {
    setLikeState(likeState + 1);

    // const handleColor = () => {
    //   style = randomColor[Math.floor(Math.random() * randomColor.length)];
    //   setLikeState(style);
    // };
  };
  return (
    <div>
      <button onClick={handleAdd}>{likeState} Likes</button>
    </div>
  );
}

export default LikeButton;
