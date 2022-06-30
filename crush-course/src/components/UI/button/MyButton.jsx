import React from 'react';
import classes from "./MyButton.module.css";

console.log(classes);

const MyButton = ({children, ...props}) => {
  return (
    <button
      {...props}
      className={classes.myBtn}
    >
      {children}
    </button>
  );
};


export default MyButton;
// import React, {useEffect, useState} from 'react';
//
// class ComponentA extends React.Component {
//   state = {
//     data: [],
//   };
//
//   constructor(props) {
//     super(props);
//
//     this.state.data.push({id: 12, text: 12});
//   }
//
//   componentDidMount() {
//     fetch("/asdasdasd")
//       .then((res) => res.json())
//       .then((data) => this.setState({data}))
//
//     window.addEventListener("click", this.someFunction);
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener("click", this.someFunction);
//   }
//
//   someFunction() {
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//   }
//
//   render() {
//     const {data} = this.state;
//
//     return (
//       <div>{data.map((item) => (
//         <div key={item.id}>item.text</div>
//       ))}</div>
//     );
//   }
// }
//
// export default function ComponentB(props) {
//   const [data, setData] = useState([]);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   async function fetchData() {
//     const response = await fetch("/asdasdasd");
//     const data = await response.json();
//
//     setData(data);
//   }
//
//   return (
//     <div className="component">
//       <div>{data.map((item) => (
//         <div key={item.id}>item.text</div>
//       ))}</div>
//     </div>
//   );
// }
