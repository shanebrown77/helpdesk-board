'use client';
export default function MyQueueSummary({ list, remove, clear }) {
  
    return (
    <div className="queue-box">
      <h4>My Queue ({list.length})</h4>
      {!list.length && <p className="small">No tickets yet.</p>}
      <ul className="queue-list">
        {list.map(t => (
          <li key={t.id}>
            <span>{t.title}</span>
            <button onClick={() => remove(t.id)} className="remove-btn">x</button>
          </li>
        ))}
      </ul>
      <button onClick={clear} disabled={!list.length} className="clear-btn">
        Clear
      </button>
    </div>
  );
}

