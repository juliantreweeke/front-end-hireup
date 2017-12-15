import React, { Component } from 'react';
import './Dropdown.css';


class Dropdown extends Component {
  
  constructor(props) {
    super(props);
    this.state = { results : "" };
    this.select = this.select.bind(this);
    
  }
  
  componentDidMount() {
    console.log(this.props.results);
    
  }
  
  select(name){
    console.log(name)
  }
  
  
  
  render() {
    
    let results = this.props.results;
    
    return (
      <div>
      
      <div className="Dropdown-wrapper">
      {results.map((character,i) => {
            if (results.length > 0){
              if (character.description.length > 10){
                var description = `${character.description.substring(0,120)}..`
              }
              
              
              return <div className="Dropdown" key={i} onClick={ () => {this.select(character.name) } }>
                <img className="character-image" src={`${character.thumbnail.path}.jpg`}></img>
                <div className="character-text">
                <div>{character.name}</div>
                <div className="character-description">{description}</div>
                </div>
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
