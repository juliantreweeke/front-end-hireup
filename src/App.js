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
      console.log('results', this.state.results);
    })

  }

 auto_suggest(e){
   this.setState({search: e.target.value});
   // if search query is empty - don't do a server request - otherwise call the search function
   this.state.search !== '' ? this.search():null;
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

          <input className={ this.state.loading ? 'loading' : ''} onChange={(e)=>{ this.auto_suggest(e) } } id="search-bar" type="text" placeholder="Search.."></input>

        </header>


          { results !== undefined && this.state.search !== '' ?
            results.length === 0 ? <Dropdown search={this.state.search} results={"none"}/> : <Dropdown results={this.state.results}/>
          : null  }


          <button className="test" onClick={ () => {console.log(this.state.results)}   } >test</button>

      </div>
    );
  }
}

export default App;
