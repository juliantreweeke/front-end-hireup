import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const url = 'http://localhost:1111/characters';
let search = 'iron';
const url_search = `http://localhost:1111/characters?nameStartsWith=${search}`;






    



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {search: 'iron', success:'false'
    };
    
    this.auto_suggest = this.auto_suggest.bind(this);
  
  }
  
  
  
  search(query){
    
    fetch(query)
    .then(results => {
      return results.json();
    }).then(data => {
        console.log(data.results.length);
        
        data.results.length > 0 ? data.results.map((character,i) => {
          
          console.log(character.name);
        }) : console.log("whoops can't find the name!");    
        
    })
      
    
  }
  
 auto_suggest(e){
   this.setState({search: e.target.value});
   this.search(this.state.search);
   
   this.state.search === "iron" ? ()=>{ this.setState({success:true}) }:null;
 }
  
  
  


  
  
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input onChange={(e)=>{ this.auto_suggest(e) } } id="searchbar" type="text" placeholder="your search"></input>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.search}</h1>
        {this.state.success}
        
        {this.state.success
          ? <div>found</div>
          : <div>not found</div>}
        
        
        
        
        
      </div>
    );
  }
}

export default App;
