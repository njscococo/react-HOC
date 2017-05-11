import React from 'react';
import ReactDOM from 'react-dom';

let userName = 'user name';
let span = <span>this is a spanss</span>;

//ES5 function寫法
// function Welcome(props) {
//     console.log(props);
//   return <h1>Hello, {props.name}</h1>;
// }

//es6 class寫法
class Welcome extends React.Component{    
    render(){
        return (<h1>Hello, {this.props.name}</h1>);
    }
}


ReactDOM.render(
  <div>
    <h1>Test222 :{userName}</h1><br/>
    span <br/>
    <Welcome name='aaa' onClick='12' dfs='dfs' />
    <Welcome name={userName} />
  </div>
  , document.getElementById('app2'));