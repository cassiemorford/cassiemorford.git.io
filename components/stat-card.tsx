import React from "react";
import "isomorphic-fetch";

import "../scss/main.scss";

interface Stat {
  base_stat: Number;
  effort: Number;
  stat: {
    name: String;
    url: String;
  };
}

interface StatCardProps {
  stats: Stat[];
}

class StatCard extends React.Component<StatCardProps, {}> {
  render() {
    const { stats } = this.props;

    return (
      <div className="stat-card">
        {stats.map(stat => (
          <div className="stat-card__row">
            <p className="stat-card__name-area">{stat.stat.name}</p>
            <div className="stat-card__bar-area">
              <div
                className="stat-card__stat-bar"
                style={{ width: `${stat.base_stat}%` }}
              >
                <p className="stat-card__stat-value">{stat.base_stat}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default StatCard;
