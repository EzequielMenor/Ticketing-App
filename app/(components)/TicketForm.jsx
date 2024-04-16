"use client";

import { useRouter } from "next/navigation"
import React, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "no empezado",
    category: "Problema de Hardware"
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form>
        <h3>Crea Tu Ticket</h3>
      </form>
    </div>
  )
}

export default TicketForm 