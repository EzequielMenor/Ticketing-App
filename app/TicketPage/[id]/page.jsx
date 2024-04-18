import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("No ha podido conseguir el ticket")
  }

  return res.json();
}


const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "nuevo" ? false : true
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "nuevo"
    }
  }
  return (
    <TicketForm ticket={updateTicketData} />
  )
}

export default TicketPage