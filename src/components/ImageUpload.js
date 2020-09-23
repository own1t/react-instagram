// React
import React, { useState } from "react";

// Firebase
import firebase from "firebase";
import { storage, db } from "../firebase";

// Material-ui
import { Input, Button } from "@material-ui/core";

// CSS
import "./ImageUpload.css";

function ImageUpload({ username }) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            db.collection("posts").add({
              imageUrl: url,
              caption: caption,
              username: username,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <>
      <div className="imageUpload">
        <progress
          className="imageUpload__progress"
          value={progress}
          max="100"
        />
        <Input
          placeholder="Enter a caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <div>
          <input type="file" onChange={handleChange} />
          <Button className="imageUpload__button" onClick={handleUpload}>
            Upload
          </Button>
        </div>

        <br />
      </div>
    </>
  );
}

export default ImageUpload;
