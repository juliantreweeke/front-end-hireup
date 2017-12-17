import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Dropdown from './components/Dropdown';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {search:' ', success:'false',results:undefined,loading:false
    };

    this.auto_suggest = this.auto_suggest.bind(this);

  }



  search(){
    // when search function called set loading to true
    this.setState({loading: true});
    let search = this.state.search;
    const url_search = `http://localhost:1111/characters?nameStartsWith=${search}`;
    fetch(url_search)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({loading: false});
      let results = data.results;
      this.setState({results: results});
    })

  }

 auto_suggest(e){
   this.setState({search: e.target.value});
   // if search query is empty - don't do a server request - otherwise call the search function
   if (this.state.search !== ''){
     this.search();
   }
 }













  render() {

    let results = this.state.results;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>

         {/* if loading is true show svg loading img - when value of input field is changed call auto_suggest function */}
          <input className={ this.state.loading ? 'loading' : ''} onChange={(e)=>{ this.auto_suggest(e) } } id="search-bar" type="text" placeholder="Search.."></input>

        </header>

          {/* if  results is defined and a query is present in search box show Dropdown component */}
          {/* if  results is flagged as none then don't send result state as prop */}
          { results !== undefined && this.state.search !== '' ?
            results.length === 0 ? <Dropdown search={this.state.search} results={"none"}/> : <Dropdown results={this.state.results}/>
          : null  }

      </div>
    );
  }
}

export default App;
