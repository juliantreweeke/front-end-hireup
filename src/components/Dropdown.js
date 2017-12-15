import React, { Component } from 'react';
import './Dropdown.css';


class Dropdown extends Component {
  
  constructor(props) {
    super(props);
    this.state = { results : "" };
    
  }
  
  componentDidMount() {
    alert(this.props.results);
  }
  
  
  
  render() {
    
    let results = this.props.results;
    
    return (
      <div>
      
      {results.map((character) => {
            if (results.length > 0){
              return <div className="Dropdown">
                <div className="character-name">{character.name}</div>
              </div>
             }
            })}
      
          
      </div>
    );
  }
}

export default Dropdown;



// 
