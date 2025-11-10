'use client';

export default function SearchBox({ val, onChange }) {
  
    return (
    <input
      value={val}
      onChange={e=>onChange(e.target.value)}
      placeholder="search..."
      className="border p-1 rounded flex-1"
    />
  );
}
