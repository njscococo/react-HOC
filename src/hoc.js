import React, { Component } from 'react'

export const randPosition = (WrappedComponent) => {
  return class RanPosition extends Component {
    constructor(props) {
      super(props)
      //console.log('extend:', props);
      this.state = {
        position: {
          position: 'relative',
          top: `${Math.floor(Math.random() * 100)}vw`,
          left: `${Math.floor(Math.random() * 100)}vh`
        }
      }
    }

    render() {
      //console.log('randPosition:', { ...this.props })
      return <WrappedComponent {...this.props} position={this.state.position} />
    }
  }
}

export const sayHi = (WrappedComponent, saySomething) => {
  return class SayHi extends Component {
    constructor(props) {
      super(props)
    }
    onClick() {
      console.log('saying:', saySomething)
    }

    render() {
      //console.log('hi:',  ...this.props )
      return (
        <WrappedComponent {...this.props}
          onClick = {this.onClick.bind(this)} />
      )
    }
  }
}

export const hoverColor = (WrappedComponent, color) => {
  return class HoverColor extends Component {
    handleHover() {
      console.log('hover')
    }
    render() {
      //console.log('handleHover:', this.props)
      return (
        <WrappedComponent {...this.props} onMouseEnter={this.handleHover.bind(this)} />
      )
    }
  }
}