'use client';
export default function StatusMessage({ loading, error, empty }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (empty) return <p>no tickets match your filters.</p>;
  return null;
}
