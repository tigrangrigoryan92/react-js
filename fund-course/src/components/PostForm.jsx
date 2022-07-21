import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault();
    if (post.title && post.body) {
      create({...post, id: Date.now()});
      setPost({title: '', body: ''})
      return;
    }
    alert('Invalid fields')
  }

  return (
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
  );
};

export default PostForm;
