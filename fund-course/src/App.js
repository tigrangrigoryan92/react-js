import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 2, title: 'A', body: 'D Lorem dolor sit amet.'},
    {id: 1, title: 'D', body: 'A Lorem ipsum dolor sit amet.'},
    {id: 4, title: 'B', body: 'C ipsum dolor sit amet.'},
    {id: 3, title: 'C', body: 'B ipsum dolor sit amet.'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))]
    } return posts
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setFilter({sort: '', query: ''})
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton
        style={{marginTop: '30px'}}
        onClick={() => setModal(true)}
      >
        Add Post
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm
          create={createPost}
          closeModal={(val) => setModal(val)}
        />
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        title="Post List"
        posts={sortedAndSearchedPosts}
        remove={removePost}
      />
    </div>
  );
}

export default App;
