'use client';

export default function TicketCard({ t, add, queued }) {
  return (
    <div className="ticket-card">
      <h3>{t.title}</h3>
      <p>{t.description}</p>
      <p className="small">Priority: {t.priority} | Status: {t.status} | Assigned: {t.assignee}</p>
      <p className="small">Updated: {new Date(t.updatedAt).toLocaleString()}</p>
      <button onClick={() => add(t.id)} disabled={queued} className="queue-btn">
        {queued ? 'In Queue' : 'Add to Queue'}
      </button>
    </div>
  );
}

