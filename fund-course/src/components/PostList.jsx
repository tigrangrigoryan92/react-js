import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>

      {posts.map((post, index) =>
        <PostItem
          key={post.id}
          index={index + 1}
          post={post}
          remove={remove}
        />
      )}
    </div>
  );
};

export default PostList;
