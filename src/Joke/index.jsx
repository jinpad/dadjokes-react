import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const Joke = (props) => {
  const [like, setLike] = useState(props.likes);
  const handleClickLike = () => {
    setLike(like + 1);
  };

  const [dislike, setDislike] = useState(props.dislikes);
  const handleClickDislike = () => {
    setDislike(dislike + 1);
  };
  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={props.userAvatar} />
          <p class="user-name">{props.userName}</p>
        </div>

        <p class="joke__text">{props.text}</p>
      </div>
      <div class="joke__likes">
        <button
          id="btn-up"
          class="btn-like btn-like--up"
          onClick={handleClickLike}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {like}
        </span>
        <button
          id="btn-down"
          class="btn-like btn-like--down"
          onClick={handleClickDislike}
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {dislike}
        </span>
      </div>
    </div>
  );
};

export default Joke;
