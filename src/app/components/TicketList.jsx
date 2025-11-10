'use client';

import TicketCard from './TicketCard';
export default function TicketList({ tickets, add, queue }) {
  return tickets.map(t=>(
    <TicketCard key={t.id} t={t} add={add} queued={!!queue[t.id]} />
  ));
}
