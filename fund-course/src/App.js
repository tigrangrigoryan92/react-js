import React from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {useState} from "react";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'Html Lorem ipsum dolor sit amet.'},
    {id: 2, title: 'CSS', body: 'CSS Lorem dolor sit amet.'},
    {id: 3, title: 'JS', body: 'Lorem ipsum dolor sit amet.'},
  ]);
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          placeholder="Title"
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
          value={post.body}
          placeholder="Body"
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Add</MyButton>
      </form>

      <PostList
        title="Post List"
        posts={posts}
      />
    </div>
  );
}

export default App;
