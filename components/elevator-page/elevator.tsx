import React from "react";
import {ElevatorProps} from '../elevator-page/elevator-types';

class Elevator extends React.Component<ElevatorProps, {}> {
    render () {
        const {floor, direction, el_id} = this.props;
        const directionClasses = `elevator__directions elevator__directions--${direction}`;
        const elevatorStyle= {bottom: `${(floor - 1) * 100}px`}

        return (<div className="elevator" style={elevatorStyle}>
            <div className="elevator__id">{`${el_id}`}</div>
            <div className={directionClasses}>
                <div className="elevator__direction--up">{`\u25b2`}</div>
                <div className="elevator__floor">{floor}</div>
                <div className="elevator__direction--down">{`\u25bc`}</div>
            </div>
            <div className="elevator__riders">
                {this.props.children}
            </div>
        </div>);
    }
}

export default Elevator;