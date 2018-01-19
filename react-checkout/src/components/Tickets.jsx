import React from 'react'
import Ticket from './Ticket'

const Tickets = props => {
  if (!props.tickets) return false
  const { selectedTickets, selectTicket } = props
  console.log(props.tickets);
  
  return (
    <div>
      {props.tickets.map((ticket, index) => (
        <Ticket
          key={ticket.id}
          index={index}
          id={ticket.id}
          {...ticket.attributes}
          value={selectedTickets[ticket.id] ? selectedTickets[ticket.id] : ''}
          selectTicket={selectTicket}
        />
      ))}
    </div>
  )
}

export default Tickets
