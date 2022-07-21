import React, {useState} from 'react';

const InputOnChange = () => {
  const [value, setValue] = useState('Input text')

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
};

export default InputOnChange;
