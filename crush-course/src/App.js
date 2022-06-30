import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JS',
      body: 'Grammarly for Your Desktop'
    },
    {
      id: 2,
      title: 'Java',
      body: 'Grammarly for Windows'
    },
    {
      id: 3,
      title: 'C#',
      body: 'Grammarly for Mac'
    },
    {
      id: 4,
      title: 'Piton',
      body: 'Grammarly for Chrome'
    },
    {
      id: 5,
      title: 'Ruby',
      body: 'Grammarly for Edge'
    }
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
        Add
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm
          create={createPost}
        />
      </MyModal>
      <hr style={{margin: "15px auto"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        title="Post Title"
        posts={sortedAndSortedPosts}
        remove={removePost}
      />
    </div>
  );
}

export default App;
