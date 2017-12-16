import React, { Component } from 'react';
import './Dropdown.css';


class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = { results : "" };
    this.select = this.select.bind(this);
  }

  // check for screen size change
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  // get rid of event listener if unmounted
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  // if screen size changes then force update
  resize = () => this.forceUpdate()

  // on click console.log the name of selected
  select(name){
    console.log(name)
  }








  render() {
    // get the props passed down from the parent component
    let results = this.props.results;

    return (
      < div > <div className="Dropdown-wrapper">
  {/* if parent component passed down prop which had no results then render this */}

  {results === "none"
    ? <div className="noresults">
        <h1>Oh no!</h1>
         <div>
          <h3>No results found for "{this.props.search}" </h3>
         </div>
      </div>
    :
      results.map((character, i) => {
         {/* make sure there are results */}
        if (results.length > 0) {

          {/* resize character description and add dots */}
          if (character.description.length > 10) {
            var description = `${character.description.substring(0, 120)}..`
          }

          {/* onclick to the select function */}
          return <div className="Dropdown" key={i} onClick={() => {
            this.select(character.name)
          }}>
            <img className="character-image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`}></img>
            <div className="character-text">

            {/* if window is mobile size then get rid of all name text starting with brackets... */}
              <div>{ window.innerWidth < 768 ? character.name.split('(')[0] : character.name  }</div>
              <div className="character-description">{description}</div>

            </div>
          </div>
        }
      })

}

</div> < /div>
    );
  }
}

export default Dropdown;
