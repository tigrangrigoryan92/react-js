import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostPage = () => {
  const routerParams = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getByIdAll(id);
    setPost(response.data)
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsIdAll(id);
    setComments(response.data)
  });

  useEffect(() => {
    fetchPostById(routerParams.id)
    fetchComments(routerParams.id)
  }, [])

  return (
    <div  style={{textAlign: 'center'}}>
      {isLoading
        ? <Loader />
        : <div  style={{marginBottom: 50}}>
          <h1>Post id - {post.id}</h1>
          <h3>Title - {post.title}</h3>
          <p>Body - {post.body}</p>
        </div>
      }
      <h1>Comments</h1>
      { isComLoading
        ? <Loader />
        : <div>
          {
            comments.map((com) => (
              <div key={com.id} style={{marginBottom: 15, border: '1px solid'}}>
                <h5>{com.email}</h5>
                <div>{com.body}</div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
};

export default PostPage;
