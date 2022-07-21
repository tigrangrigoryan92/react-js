import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'Html Lorem ipsum dolor sit amet.'},
    {id: 2, title: 'CSS', body: 'CSS Lorem dolor sit amet.'},
    {id: 3, title: 'JS', body: 'Lorem ipsum dolor sit amet.'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm
        create={createPost}
      />

      {posts.length
        ? <PostList
          title="Post List"
          posts={posts}
          remove={removePost}
        />
        : <h1
          style={{textAlign: 'center'}}
        >
          There aren't any post. Add one!
        </h1>
      }
    </div>
  );
}

export default App;
