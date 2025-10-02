import { City, Company, Customer, Event, Ticket, TicketType } from "@/types";

// ------------------ Tickets ------------------
export const tickets: Ticket[] = [
  { id: 1, ticketTypeId: 1, customerId: 1 },
  { id: 2, ticketTypeId: 2, customerId: 1 },
  { id: 3, ticketTypeId: 3, customerId: 2 },
  { id: 4, ticketTypeId: 4, customerId: 2 },
  { id: 5, ticketTypeId: 5, customerId: 3 },
  { id: 6, ticketTypeId: 6, customerId: 3 },
  { id: 7, ticketTypeId: 7, customerId: 4 },
  { id: 8, ticketTypeId: 8, customerId: 5 },
  { id: 9, ticketTypeId: 9, customerId: 6 },
  { id: 10, ticketTypeId: 10, customerId: 7 },
  { id: 11, ticketTypeId: 11, customerId: 8 },
  { id: 12, ticketTypeId: 12, customerId: 9 },
  { id: 13, ticketTypeId: 13, customerId: 10 },
  { id: 14, ticketTypeId: 14, customerId: 10 },
  { id: 15, ticketTypeId: 15, customerId: 5 },
  { id: 16, ticketTypeId: 16, customerId: 6 },
  { id: 17, ticketTypeId: 17, customerId: 7 },
  { id: 18, ticketTypeId: 18, customerId: 8 },
  { id: 19, ticketTypeId: 19, customerId: 9 },
  { id: 20, ticketTypeId: 20, customerId: 4 },
];

// ------------------ Customers ------------------
export const customers: Customer[] = [
  { id: 1, firstName: "Ahmed", lastName: "Ali", email: "ahmed@example.com", phone: "0916000001", passowrd: "password", tickets: [tickets[0], tickets[1]] },
  { id: 2, firstName: "Sara", lastName: "Omar", email: "sara@example.com", phone: "0916000002", passowrd: "password", tickets: [tickets[2], tickets[3]] },
  { id: 3, firstName: "Khaled", lastName: "Youssef", email: "khaled@example.com", phone: "0916000003", passowrd: "password", tickets: [tickets[4], tickets[5]] },
  { id: 4, firstName: "Mona", lastName: "Saleh", email: "mona@example.com", phone: "0916000004", passowrd: "password", tickets: [tickets[6], tickets[19]] },
  { id: 5, firstName: "Hussein", lastName: "Faraj", email: "hussein@example.com", phone: "0916000005", passowrd: "password", tickets: [tickets[7], tickets[14]] },
  { id: 6, firstName: "Laila", lastName: "Abdullah", email: "laila@example.com", phone: "0916000006", passowrd: "password", tickets: [tickets[8], tickets[15]] },
  { id: 7, firstName: "Omar", lastName: "Fathi", email: "omar@example.com", phone: "0916000007", passowrd: "password", tickets: [tickets[9], tickets[16]] },
  { id: 8, firstName: "Huda", lastName: "Jamal", email: "huda@example.com", phone: "0916000008", passowrd: "password", tickets: [tickets[10], tickets[17]] },
  { id: 9, firstName: "Salem", lastName: "Karim", email: "salem@example.com", phone: "0916000009", passowrd: "password", tickets: [tickets[11], tickets[18]] },
  { id: 10, firstName: "Nora", lastName: "Adel", email: "nora@example.com", phone: "0916000010", passowrd: "password", tickets: [tickets[12], tickets[13]] },
];

// ------------------ Ticket Types ------------------
export const ticketTypes: TicketType[] = [
  { id: 1, eventId: 1, name: "Standard", price: 50, quantity: 100, tickets: [tickets[0]] },
  { id: 2, eventId: 1, name: "VIP", price: 120, quantity: 50, tickets: [tickets[1]] },
  { id: 3, eventId: 2, name: "Standard", price: 40, quantity: 100, tickets: [tickets[2]] },
  { id: 4, eventId: 2, name: "VIP", price: 90, quantity: 50, tickets: [tickets[3]] },
  { id: 5, eventId: 3, name: "Standard", price: 30, quantity: 150, tickets: [tickets[4]] },
  { id: 6, eventId: 3, name: "VIP", price: 70, quantity: 60, tickets: [tickets[5]] },
  { id: 7, eventId: 4, name: "Standard", price: 25, quantity: 200, tickets: [tickets[6]] },
  { id: 8, eventId: 4, name: "VIP", price: 60, quantity: 50, tickets: [tickets[7]] },
  { id: 9, eventId: 5, name: "Standard", price: 45, quantity: 80, tickets: [tickets[8]] },
  { id: 10, eventId: 5, name: "VIP", price: 100, quantity: 40, tickets: [tickets[9]] },
  { id: 11, eventId: 6, name: "Standard", price: 55, quantity: 120, tickets: [tickets[10]] },
  { id: 12, eventId: 6, name: "VIP", price: 150, quantity: 50, tickets: [tickets[11]] },
  { id: 13, eventId: 7, name: "Standard", price: 35, quantity: 100, tickets: [tickets[12]] },
  { id: 14, eventId: 7, name: "VIP", price: 95, quantity: 30, tickets: [tickets[13]] },
  { id: 15, eventId: 8, name: "Standard", price: 40, quantity: 150, tickets: [tickets[14]] },
  { id: 16, eventId: 8, name: "VIP", price: 110, quantity: 60, tickets: [tickets[15]] },
  { id: 17, eventId: 9, name: "Standard", price: 28, quantity: 200, tickets: [tickets[16]] },
  { id: 18, eventId: 9, name: "VIP", price: 80, quantity: 40, tickets: [tickets[17]] },
  { id: 19, eventId: 10, name: "Standard", price: 33, quantity: 90, tickets: [tickets[18]] },
  { id: 20, eventId: 10, name: "VIP", price: 120, quantity: 30, tickets: [tickets[19]] },
];

// ------------------ Events ------------------
export const events: Event[] = [
  { id: 1, name: "Tech Conference 2025", description: "Annual technology conference in Tripoli.", startDate: "2025-11-15", endDate: "2025-11-16", companyId: 1, cityId: 1, ticketTypes: [ticketTypes[0], ticketTypes[1]] },
  { id: 2, name: "Music Festival", description: "Live music and cultural performances.", startDate: "2025-12-01", endDate: "2025-12-02", companyId: 2, cityId: 1, ticketTypes: [ticketTypes[2], ticketTypes[3]] },
  { id: 3, name: "Marathon Misrata", description: "Open marathon for all ages.", startDate: "2026-01-20", endDate: "2026-01-20", companyId: 3, cityId: 3, ticketTypes: [ticketTypes[4], ticketTypes[5]] },
  { id: 4, name: "Startup Expo", description: "Showcasing startups and innovation.", startDate: "2025-10-10", endDate: "2025-10-12", companyId: 1, cityId: 2, ticketTypes: [ticketTypes[6], ticketTypes[7]] },
  { id: 5, name: "Book Fair", description: "Annual book exhibition.", startDate: "2025-09-05", endDate: "2025-09-10", companyId: 2, cityId: 1, ticketTypes: [ticketTypes[8], ticketTypes[9]] },
  { id: 6, name: "Sabha Cultural Days", description: "Cultural and arts week in Sabha.", startDate: "2025-08-20", endDate: "2025-08-25", companyId: 5, cityId: 4, ticketTypes: [ticketTypes[10], ticketTypes[11]] },
  { id: 7, name: "Food Festival", description: "Street food and culinary experiences.", startDate: "2025-07-15", endDate: "2025-07-16", companyId: 4, cityId: 2, ticketTypes: [ticketTypes[12], ticketTypes[13]] },
  { id: 8, name: "Charity Gala", description: "Fundraising event for education.", startDate: "2025-06-01", endDate: "2025-06-02", companyId: 1, cityId: 5, ticketTypes: [ticketTypes[14], ticketTypes[15]] },
  { id: 9, name: "Science Fair", description: "High school science projects.", startDate: "2025-05-10", endDate: "2025-05-11", companyId: 3, cityId: 3, ticketTypes: [ticketTypes[16], ticketTypes[17]] },
  { id: 10, name: "Art Exhibition", description: "Contemporary Libyan artists.", startDate: "2025-04-01", endDate: "2025-04-05", companyId: 2, cityId: 1, ticketTypes: [ticketTypes[18], ticketTypes[19]] },
];

// ------------------ Companies ------------------
export const companies: Company[] = [
  { id: 1, name: "Libyan Web Co.", events: [events[0], events[3], events[7]] },
  { id: 2, name: "Tripoli Events", events: [events[1], events[4], events[9]] },
  { id: 3, name: "Misrata Sports Club", events: [events[2], events[8]] },
  { id: 4, name: "Benghazi Expo", events: [events[6]] },
  { id: 5, name: "Sabha Cultural Center", events: [events[5]] },
];

// ------------------ Cities ------------------
export const cities: City[] = [
  { id: 1, name: "Tripoli", events: [events[0], events[1], events[4], events[9]] },
  { id: 2, name: "Benghazi", events: [events[3], events[6]] },
  { id: 3, name: "Misrata", events: [events[2], events[8]] },
  { id: 4, name: "Sabha", events: [events[5]] },
  { id: 5, name: "Zawiya", events: [events[7]] },
];
