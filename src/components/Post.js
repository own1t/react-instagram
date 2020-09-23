import { Avatar } from "@material-ui/core";
// React
import React from "react";

// CSS
import "./Post.css";

function Post({ imageUrl, username, caption }) {
  return (
    <>
      <div className="post">
        <div className="post__header">
          <Avatar
            className="post__avatar"
            src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/55478023_1526013434202201_902892929817772032_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=cx1cSMt991oAX-mpasE&_nc_ht=scontent.flas1-1.fna&oh=15673eb81fc32e5b44cbe7ac52e16a02&oe=5F8F47F1"
            alt=""
          />
          <h3>{username}</h3>
        </div>
        <img className="post__image" src={imageUrl} alt="" />
        <h4 className="post__text">
          <strong>{username} </strong> {caption}
        </h4>
      </div>
    </>
  );
}

export default Post;
