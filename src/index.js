import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { randPosition, sayHi, hoverColor } from './hoc'

class Counter extends React.Component {
  constructor(props) {
    super(props);

    //設定state
    this.state = {
      value: 0,
      time: new Date(),
      textValue: '',
      // position: {
      //   position: 'relative',
      //   top: `${Math.floor(Math.random() * 100)}vw`,
      //   left: `${Math.floor(Math.random() * 100)}vh`
      // }
    }

    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handlePlus() {
    this.setState({
      value: this.state.value + 1
    });
    // this.setState((preState)=>({
    //   value: preState.value+1}));
    this.setState({
      time: new Date()
    });
    //console.log(this.state);
  }

  handleMinus() {
    console.log('handleMinus')
  }
  handleMouseOver(e) {
    console.log('handleMouseOver', e)
  }

  render() {
    const icons = [];

    for (let i = 0; i < this.state.value; i++) {
      //high order component
      let Test = sayHi(randPosition(MyImg), `this is a good day:${i}`)
      icons.push(<Test key={i} />)

      //將動作和UI抽出來寫成MyImg2
      //icons.push(<MyImg2 key={i} words={`this is a good day:${i}`} />)  

      //最原本的版本
      //icons.push(<MyImg key={i} position={this.state.position} />)
    }

    return (
      <div>
        {icons}
        <span>value:{this.state.value}</span> <br />
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus} onMouseOver={this.handleMouseOver} >-</button><br />
        <span>{this.state.time.getSeconds()}</span>
        <br />
      </div>)
  }
}

ReactDOM.render(
  <Counter />
  , document.getElementById('app'));


class MyImg extends Component {
  render() {
    return (
      <img style={this.props.position}
        onClick={this.props.onClick}
        src='../src/components/avatar.png' />
    )
  }
}

class MyImg2 extends Component {
  sayHi(words, event) {
    console.log('head2', words)
  }

  render() {
    let position = {
      position: 'relative',
      top: `${Math.floor(Math.random() * 100)}vw`,
      left: `${Math.floor(Math.random() * 100)}vh`
    }
    //console.log('MyImg2:', position)
    return (
      <img style={position}
        onClick={this.sayHi.bind(this, this.props.words)}
        onMouseOver={this.props.flip}
        src='../src/components/avatar.png' />)
  }
}

const ExtendedMyImg = sayHi(randPosition(MyImg), 'this is a good day')
