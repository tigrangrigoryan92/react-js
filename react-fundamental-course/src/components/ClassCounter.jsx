import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  sub() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
      </div>
    )
  }
}

export default ClassCounter
