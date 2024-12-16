import axios from "axios";

export const submitTicket = (ticket: any) => {
  return axios.post("/api/tickets/submit", ticket);
};
