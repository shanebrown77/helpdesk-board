import Board from './components/Board';

export default function HomePage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Helpdesk Ticket Board</h1>
      <Board />
    </main>
  );
}
  