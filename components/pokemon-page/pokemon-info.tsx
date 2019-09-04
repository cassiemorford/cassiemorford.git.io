import React from "react";
import "isomorphic-fetch";
import Fonts from '../Fonts';

import StatCard from './stat-card';
import "../../scss/main.scss";

interface PokemonProps{
  name: string;
}

interface PokemonState {
  data: any;
  loading: boolean;
}

class PokemonInfo extends React.Component<PokemonProps, PokemonState> {
  constructor(props) {
    super(props);
    this.state = { data: {}, loading: true };
  }

  async componentDidMount() {
    Fonts();
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`);
    const respJson = await resp.json();
    console.log(respJson);

    this.setState({
      data: respJson,
      loading: false
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className="pokemon">
        {loading && <div className="loader" />}
        {!loading && (
          <div className="pokemon__content">
            <div className="pokemon__header">
              <img
                className="pokemon__image"
                src={data.sprites && data.sprites.back_default}
                alt={data.name}
              />
              <h3 className="pokemon__name">{data.name}</h3>
              <img
                className="pokemon__image"
                src={data.sprites && data.sprites.front_default}
                alt={data.name}
              />
            </div>
            <div className="pokemon__left">
              <h3 className="pokemon__type-list-header"> types </h3>
              <ul className="pokemon__type-list">
                {data.types!.map(t => (
                  <li className="pokemon__type">{t.type.name}</li>
                ))}
              </ul>
              <p className="pokemon__weight"> weight: {data.weight}</p>
            </div>
            <div className="pokemon__right">
                  <StatCard stats={data.stats}/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PokemonInfo;
