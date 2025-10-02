import { Ticket } from "./ticket";

export interface TicketType  {
    id: number,
    name: String,
    price: number,
    quantity: number,
    eventId: number,
    tickets: Ticket[],
}

