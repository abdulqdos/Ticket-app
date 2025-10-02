import { Event } from "./event";

export interface City {
    id: number,
    name: string,
    events: Event[],
}