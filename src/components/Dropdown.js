import React, { Component } from 'react';
import './Dropdown.css';


class Dropdown extends Component {
  
  constructor(props) {
    super(props);
    this.state = { results : "" };
    
  }
  
  componentDidMount() {
    console.log(this.props.results);
    
  }
  
  
  
  render() {
    
    let results = this.props.results;
    
    return (
      <div>
      
      <div className="Dropdown-wrapper">
      {results.map((character,i) => {
            if (results.length > 0){
              return <div className="Dropdown" key={i}>
                <img className="character-image" src={`${character.thumbnail.path}.jpg`}></img>
                <div className="character-name">{character.name}</div>
              </div>
             }
            })}
      </div>
      
          
      </div>
    );
  }
}

export default Dropdown;



// 
