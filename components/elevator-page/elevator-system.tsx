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
}

interface ElevatorSystemProps {
    totalFloors: number;
}

class ElevatorSystem extends React.Component<ElevatorSystemProps, ElevatorSystemState> {
    constructor(props) {
        super(props);

        this.state = {
            elevators: [
                {floor: 1, direction: ElevatorDirection.Up, stops: [], el_id: 'A'},
                {floor: props.totalFloors, direction: ElevatorDirection.Down, stops: [], el_id: 'B'}
            ],
            users: this.createNewUsers(10),
        }
    }

    createNewUsers(n) {
        const {totalFloors} = this.props;
        let newUsers = [];

        for (let i = 0; i < n; i++) {
            const origin = Math.floor(Math.random() * totalFloors) + 1;
            const destination = Math.floor(Math.random() * totalFloors) + 1;

            const newUser = {
                origin,
                onFloor: origin,
                destination,
                direction: destination - origin > 0 ? ElevatorDirection.Up : ElevatorDirection.Down,
            }

            newUsers.push(newUser)
        }

        return newUsers;
    }

    addUsersHandler = () => {
        this.setState({
            users: [...this.state.users, ...this.createNewUsers(5)],
        });
    }

    userCleanup = () => {
        const {users} = this.state;

        return users.filter(u => u.destination !== u.onFloor);
    }

    elevatorStep = () => {
        let {elevators, users} = this.state;
        const {totalFloors} = this.props;

        users = this.userCleanup();

        elevators.forEach(el => {
            // MOVEMENT
            // if at top or bottom, turn around
            if(el.floor === totalFloors) {
                el.direction = ElevatorDirection.Down;
            }
            if(el.floor === 1) {
                el.direction = ElevatorDirection.Up;
            }

            // let on users
            users.forEach(u => {
                if (u.onFloor === el.floor && el.direction === u.direction) {
                    // let riders on
                    u.onFloor = null;
                    u.inElevator = el.el_id;
                }
            });
            
            // take next step
            el.floor = el.direction === ElevatorDirection.Up ? el.floor + 1 : el.floor - 1;

            // let off users
            users.forEach(u => {
                if (u.inElevator === el.el_id && el.floor === u.destination) {
                    //let riders off
                    u.inElevator = null;
                    u.onFloor = u.destination;
                    u.direction = null;
                }
            });
        });

        this.setState({
            elevators,
            users
        });
    }

    render() {
        const {elevators, users} = this.state;
        const {totalFloors} = this.props;

        const elevatorShaftStyles = {height: `${100 *totalFloors}px`};
        const floors = new Array(totalFloors).fill(0).map((el, i) => totalFloors - i);

        const peopleInElevators = users.filter(u => u.inElevator);
        const peopleWaiting = users.filter(u => u.onFloor);

        return (<div className='elevator-system'>
            <div className="elevator-system__buttons">
                <button onClick={this.elevatorStep}>Run Elevator</button>
                <button onClick={this.addUsersHandler}>Add Riders</button>
            </div>
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
                                <div className={`elevator__rider ${p.onFloor === p.destination ? 'elevator__rider--done' : ''}`}>
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