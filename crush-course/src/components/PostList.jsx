import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, remove}) => {

  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>List is empty.</h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            className="post"
          >
            <PostItem
              number={index + 1}
              post={post}
              remove={remove}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
