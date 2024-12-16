import React, { useState } from "react";
import { submitTicket } from "../services/ticketService";

const SubmitTicket: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    await submitTicket({ amount, description });
    alert("Ticket Submitted");
  };

  return (
    <div>
      <h2>Submit Reimbursement</h2>
      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitTicket;
