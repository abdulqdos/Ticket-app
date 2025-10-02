import { Event } from "./event";

export interface Company {
    id: number,
    name: string,
    events: Event[],
}