export interface Event {
  id: number;
  name: string;
  description: string;
  startDate: string; 
  endDate: string;
  cityId: number;
  companyId: number;
  ticketTypes: number[],
}