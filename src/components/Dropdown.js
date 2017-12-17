import React, {Component} from 'react';
import './Dropdown.css';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: ""
    };
    this.select = this.select.bind(this);
    this.renderCharacters = this.renderCharacters.bind(this);
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
  select(name) {
    console.log(name)
  }

  renderCharacters(results){

    if(results === undefined){
      return;
    }

    return<div>
      {results.map((character, i) => {
        /* resize character description and add dots */
        let description = character.description;
        if (character.description.length > 10) {
          description = `${character.description.substring(0, 120)}..`
        }

        /* onclick to the select function */
        return <div className="Dropdown" key={i} onClick={() => {
          this.select(character.name)
        }}>

          {/* if image is flagged as not available show custom span element instead */}
          {character.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ? <span className="image-not-found">
                <p>IMAGE NOT FOUND</p>
              </span>
            : <img alt="character" className="character-image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`}></img>}

          <div className="character-text">

            {/* if window is mobile size then get rid of all name text starting with brackets... */}
            <div>{window.innerWidth < 768
                ? character.name.split('(')[0]
                : character.name}</div>
            <div className="character-description">{description}</div>

          </div>

        </div>
      })}

    </div>
  }

  render() {
    // get the props passed down from the parent component
    let results = this.props.results;

    let no_results = (
      <div className="noresults">
        <h1>Oh No!</h1>
        <div>
          <h3>No results found for "{this.props.search}"
          </h3>
        </div>
      </div>
    )


    return (
      <div>
        <div className="Dropdown-wrapper">
          { results === "none" ? {no_results} : this.renderCharacters(results) }
        </div>
      </div>
    );
  }
}

export default Dropdown;
