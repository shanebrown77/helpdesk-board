'use client';
export default function StatusMessage({ loading, error, empty }) {
  if (loading) return <p className="status loading">Loading...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (empty) return <p className="status empty">No tickets match your filters.</p>;
  return null;
}
