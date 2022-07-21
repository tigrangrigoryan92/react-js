import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 2, title: 'A', body: 'D Lorem dolor sit amet.'},
    {id: 1, title: 'D', body: 'A Lorem ipsum dolor sit amet.'},
    {id: 4, title: 'B', body: 'C ipsum dolor sit amet.'},
    {id: 3, title: 'C', body: 'B ipsum dolor sit amet.'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))])
  }

  return (
    <div className="App">
      <PostForm
        create={createPost}
      />

      <hr style={{margin: '15px 0'}}/>

      <MySelect
        value={selectedSort}
        defaultValue="Sort by"
        options={[
          {value: 'title', name: 'By Title'},
          {value: 'body', name: 'By Body'}
        ]}
        onChange={sortPosts}
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
