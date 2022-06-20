import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
  // render() {
  //   return React.createElement(
  //     'div',
  //     {
  //       className: 'App'
  //     },
  //     'h1',
  //     React.createElement('h1', null, 'Creat Element Hello React'),
  //     React.createElement('p', null, 'Text'),
  //     'Hello React!!!',
  //   )
  // }
  state = {
    cars: [
      {name: 'BMW', year: 2010},
      {name: 'Opel', year: 2016},
      {name: 'Mazda', year: 2020},
    ],
    pageTitle: 'React Components',
    showCars: true,
  }

  changeTitleHandler = (newTitle) => {
    // const oldTitle = this.state.pageTitle;
    // const newTitle = oldTitle + ' (changed)'
    this.setState({
      pageTitle: newTitle
    })
  }

  // handleInput = (event) => {
  //   console.log('changed', event.target.value);
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, idx) => {
    console.log(name, idx);
    const car = this.state.cars[idx];
    car.name = name

    // const cars = this.state.cars.concat()
    const cars = [...this.state.cars];
    cars[idx] = car;
    this.setState({cars})
  }

  deleteHandler(idx) {
    const cars = this.state.cars.concat()
    // cars = cars.filter((el,i) => i !== idx)
    cars.splice(idx, 1);
    this.setState({cars})
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    }

    let cars = 'List is hidden';

    if (this.state.showCars) {
      cars = this.state.cars.map((car, inx) => {
        return (
          <Car
            key={inx}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
            onChangeName={event => {this.onChangeName(event.target.value, inx)}}
            onDelete={this.deleteHandler.bind(this, inx)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        {/*<input type="text" onChange={this.handleInput}/>*/}

        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change Title</button>

        <br/>

        <button
          onClick={this.toggleCarsHandler}
        >
          {this.state.showCars ? 'Hide' : 'Show'}
        </button>

        {cars}

        {/*{*/}
        {/*  this.state.showCars*/}
        {/*    ? this.state.cars.map((car, inx) => {*/}
        {/*      return (*/}
        {/*        <Car*/}
        {/*          key={inx}*/}
        {/*          name={car.name}*/}
        {/*          year={car.year}*/}
        {/*          onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
        {/*        />*/}
        {/*      )*/}
        {/*    }) : 'List is hidden'*/}
        {/*}*/}
      </div>
    );
  }
}

export default App;
