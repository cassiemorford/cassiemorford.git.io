import React from "react";
import ElevatorSystem from '../components/elevator-page/elevator-system';

import "../scss/main.scss";

class Elevator extends React.Component {
  render() {
    return (
      <ElevatorSystem totalFloors={5}/>
    );
  }
}

export default Elevator;
