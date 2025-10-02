import { Ticket } from "./ticket";

export interface Customer {
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    passowrd: String,
    tickets: Ticket[],
}