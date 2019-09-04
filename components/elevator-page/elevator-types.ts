export enum ElevatorDirection {
    Up = 'UP',
    Down = 'DOWN'
}

export interface ElevatorProps {
    el_id: string;
    floor: number;
    stops: number[];
    direction: ElevatorDirection;
}