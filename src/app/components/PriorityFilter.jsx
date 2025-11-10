'use client';
export default function PriorityFilter({ val, onChange }) {
  const opts=['All','Low','Medium','High','Critical'];
  return (
    <select value={val} onChange={e=>onChange(e.target.value)} className="border p-1 rounded">
      {opts.map(o=><option key={o}>{o}</option>)}
    </select>
  );
}
