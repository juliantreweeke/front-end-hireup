import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Dropdown from './components/Dropdown';


const url = 'http://localhost:1111/characters';




class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {search:' ', success:'false',results:undefined,loading:false 
    };
    
    this.auto_suggest = this.auto_suggest.bind(this);
  
  }
  
  
  
  search(){
    this.setState({loading: true});
    let search = this.state.search;
    const url_search = `http://localhost:1111/characters?nameStartsWith=${search}`;
    fetch(url_search)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({loading: false});
      let results = data.results;
      console.log(results);
      // console.log(data.results);
      this.setState({results: results});
      console.log(this.state.results);
      
        // this.setState({ results: data.results});
        
      
        // 
    // data.results.length > 0 ? data.results.map((results,i) => { 
    // 
    //   }) : console.log("whoops can't find the name!");    
    
    })
      
      
    
  }
  
 auto_suggest(e){
   this.setState({search: e.target.value});
   this.search();
  
 }
  
  
  


  
  
  
  
  
  
  
  
  render() {
    
    let results = this.state.results;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <input className={ this.state.loading ? 'loading' : ''} onChange={(e)=>{ this.auto_suggest(e) } } id="search-bar" type="text" placeholder="Search.."></input>
        
        </header>
          
          
          { results !== undefined ? <Dropdown results={this.state.results}/> : null  }  
                
          
          
          
      </div>
    );
  }
}

export default App;
