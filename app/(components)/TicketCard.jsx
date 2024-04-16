import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <DeleteBlock />
      <PriorityDisplay />
      <DeleteBlock />
      <PriorityDisplay />
    </div>
  )
}

export default TicketCard;