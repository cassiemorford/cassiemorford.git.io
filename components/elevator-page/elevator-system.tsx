import React from "react";
import Elevator from '../elevator-page/elevator';
import {ElevatorProps, ElevatorDirection} from '../elevator-page/elevator-types';
import { number } from "prop-types";

interface User {
    origin: number;
    inElevator?: string;
    onFloor?: number;
    destination: number;
    direction?: ElevatorDirection;
}

interface ElevatorSystemState {
    elevators: ElevatorProps[];
    users: User[];
    totalFloors: number;
}

class ElevatorSystem extends React.Component<{}, ElevatorSystemState> {
    constructor(props) {
        super(props);

        this.state = {
            elevators: [
                {floor: 1, direction: ElevatorDirection.Up, stops: [], el_id: 'A'},
                {floor: 5, direction: ElevatorDirection.Down, stops: [], el_id: 'B'}
            ],
            users: [{
                origin: 2,
                onFloor: 2,
                destination: 3,
                direction: ElevatorDirection.Up,
            },{
                origin: 1,
                onFloor: 1,
                destination: 3,
                direction: ElevatorDirection.Up,
            },{
                origin: 4,
                onFloor: 4,
                destination: 2,
                direction: ElevatorDirection.Down,
            },{
                origin: 2,
                onFloor: 2,
                destination: 5,
                direction: ElevatorDirection.Up,
            }, {
                origin: 4,
                onFloor: 4,
                destination: 5,
                direction: ElevatorDirection.Up,
            }],
            totalFloors: 5
        }
    }

    elevatorStep = () => {
        let {elevators, users, totalFloors} = this.state;

        elevators.forEach(el => {
            // MOVEMENT
            // if at top or bottom, turn around
            if(el.floor === totalFloors) {
                el.direction = ElevatorDirection.Down;
            }
            if(el.floor === 1) {
                el.direction = ElevatorDirection.Up;
            }
            
            // USERS
            // let off users
            users.forEach(u => {
                if (u.inElevator === el.el_id && el.floor === u.destination) {
                    //let riders off
                    u.inElevator = null;
                    u.onFloor = u.destination;
                    u.direction = null;
                } else if (u.onFloor === el.floor && el.direction === u.direction) {
                    // let riders on
                    u.onFloor = null;
                    u.inElevator = el.el_id;
                }
            });

            // take next step
            el.floor = el.direction === ElevatorDirection.Up ? el.floor + 1 : el.floor - 1;
        });

        this.setState({
            elevators,
            users
        });
    }

    render() {
        const {elevators, users, totalFloors} = this.state;
        const elevatorShaftStyles = {height: `${100 *totalFloors}px`};
        const floors = new Array(totalFloors).fill(0).map((el, i) => totalFloors - i);

        const peopleInElevators = users.filter(u => u.inElevator);
        const peopleWaiting = users.filter(u => u.onFloor);

        return (<div className='elevator-system'>
            <button onClick={this.elevatorStep}>Run Elevator</button>
            <div className="elevator-system__graphic">
                <div className="elevator-system__elevators">
                    {elevators.map(el => 
                        <div className="elevator__shaft" key={el.el_id} style={elevatorShaftStyles}>
                            <Elevator {...el} el_id={el.el_id}>
                                {peopleInElevators
                                    .filter(p => p.inElevator === el.el_id)
                                    .map(p => 
                                        <div className="elevator__rider">
                                            {`${p.origin}\u21e2${p.destination}`}
                                        </div>)}
                            </Elevator>
                        </div>
                    )}
                </div>
                <div className="elevator-system__floors" style={elevatorShaftStyles}>
                    {floors.map((floor, i) => 
                        <div className="elevator-system__floor">
                            <div className="elevator-system__floor-number">{floor}</div>
                            {peopleWaiting
                            .filter(p => p.onFloor === floor)
                            .map(p => 
                                <div className="elevator__rider">
                                    {`${p.origin}\u21e2${p.destination}`}
                                </div>)}                       
                        </div>
                    )}
                </div>
            </div>
        </div>)
    }
}

export default ElevatorSystem;