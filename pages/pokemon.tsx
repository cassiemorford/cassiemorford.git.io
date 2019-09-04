import React from "react";
import "isomorphic-fetch";
import Fonts from '../components/Fonts';
import PokemonInfo from '../components/pokemon-page/pokemon-info'
import PokemonList from '../components/pokemon-page/pokemon-list'

import "../scss/main.scss";

interface PokemonState {
  name: string;
}

class Pokemon extends React.Component<{}, PokemonState> {
  constructor(props) {
    super(props);
    this.state = { name: null };
  }

  async componentDidMount() {
    Fonts();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const name = params.get("pokemon");
    if (name) {
      this.setState({name});
    }
  }

  render() {
    const {name} = this.state;
    return (
      <div className="placeholder">
        {name && <PokemonInfo name={name}/>}
        {!name && <PokemonList/>}
      </div>

    );
  }
}

export default Pokemon;
