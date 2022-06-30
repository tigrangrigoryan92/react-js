import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {id: Date.now(), ...post}
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput
        type="text"
        value={post.title}
        placeholder="Name"
        onChange={e => setPost({...post, title: e.target.value})}
      />
      <MyInput
        type="text"
        value={post.body}
        placeholder="Description"
        onChange={e => setPost({...post, body: e.target.value})}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
