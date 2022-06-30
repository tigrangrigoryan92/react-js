import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectSort => setFilter({...filter, sort: selectSort})}
        defaultValue="Default Value"
        options={[
          {value: 'title', label: 'By Title'},
          {value: 'body', label: 'By Body'},
        ]}
      />
    </div>

  );
};

export default PostFilter;
