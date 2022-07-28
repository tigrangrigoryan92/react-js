import React, {useEffect, useState} from 'react';
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/page";
import Pagination from "../components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setFilter({sort: '', query: ''})
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
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
      {postError && <h1 style={{color: 'red', textAlign: 'center'}}>Error - {postError}</h1>}
      {isPostLoading
        ? <Loader/>
        : <PostList
          title="Post List"
          posts={sortedAndSearchedPosts}
          remove={removePost}
        />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />

    </div>
  );
}

export default App;
