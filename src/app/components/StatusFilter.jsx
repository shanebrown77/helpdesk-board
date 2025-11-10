'use client';
export default function StatusFilter({ val, onChange }) {
  const opts=['All','Open','In Progress','On Hold','Resolved'];
  
  return (
    <select value={val} onChange={e=>onChange(e.target.value)} className="border p-1 rounded">
      {opts.map(o=><option key={o}>{o}</option>)}
    </select>
  );
}
