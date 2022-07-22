import React, {useEffect, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts()
  }, [])

  function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsPostLoading(false);
    }, 1000)
  }

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
        onClick={fetchPosts}
      >
        Fetch Data
      </MyButton>
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
      {isPostLoading
        ? <Loader/>
        : <PostList
          title="Post List"
          posts={sortedAndSearchedPosts}
          remove={removePost}
        />
      }

    </div>
  );
}

export default App;
