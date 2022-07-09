import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state={
    quote:''
  };
  componentDidMount(){
     this.fetchquote();
  }

  fetchquote= ()=>{
    axios.get('https://friends-quotes-api.herokuapp.com/quotes/random')
    .then((response)=>{
        const {quote}= response.data;
        this.setState({quote});
    })
    .catch((error)=>{
        console.log(error);
    })
  }

  
  render(){
    const {quote}=this.state;
    return (<div className="main-cont img">
        <div className="card">
        <h1 className="heading">
         {quote}
        </h1>
        <button className='button' onClick={this.fetchquote}><span>Gimme a Friends Quote!</span></button>
        </div>
    </div>);
  }
}
export default App;