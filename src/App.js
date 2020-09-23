// React
import React, { useEffect, useState } from "react";

// Components
import Post from "./components/Post";

// Firebase
import { db } from "./firebase";

// CSS
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, [posts]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post, idx) => (
        <Post
          key={idx}
          imageUrl={post.imageUrl}
          username={post.username}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
