import React from 'react';

export default props => (
  <div style={{
    width: '300px',
    margin: '0 auto',
    border: '1px solid',
    marginBottom: '10px',
    padding: '10px'
  }}>
    {/*{ props.children }*/}
    <h3>This is car component</h3>

    <p>Car Name: {props.name}</p>
    <p>Year: {props.year}</p>
    <input type="text" value={props.name} onChange={props.onChangeName}/>
    {/*<button onClick={props.onChangeTitle}>Click</button>*/}
    <button onClick={props.onDelete}>Delete</button>
  </div>
);

// function Car() {
//   return (
//     <h2>This is car component</h2>
//   )
// }

// const car = () => {
//   return (
//     <h2>This is car component</h2>
//   )
// }

// const car = () => (
//   <div>
//     <h2>This is car component</h2>
//     <b>Test</b>
//   </div>
// )

