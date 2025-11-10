'use client';
import { useState, useEffect } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ status:'All', priority:'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

  useEffect(() => {
    fetch('/api/tickets')
      .then(r=>r.json())
      .then(d=>{ setTickets(d); setLoading(false); })
      .catch(()=>{ setError('Unable to load tickets.'); setLoading(false); });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTickets(t => {
        if (!t.length) return t;
        const i = Math.floor(Math.random()*t.length);
        const c = {...t[i]};
        if (Math.random()>0.5)
          c.status = c.status==='Open'?'In Progress':'Resolved';
        else
          c.priority = c.priority==='High'?'Critical':'High';
        c.updatedAt = new Date().toISOString();
        const copy=[...t]; copy[i]=c;
        return copy;
      });
    }, 7000);
    return ()=>clearInterval(id);
  }, []);

  const visible = tickets.filter(t=>{
    const s = filters.status==='All'||t.status===filters.status;
    const p = filters.priority==='All'||t.priority===filters.priority;
    const q = search===''||t.title.toLowerCase().includes(search.toLowerCase())||t.description.toLowerCase().includes(search.toLowerCase());
    return s&&p&&q;
  });

  const addToQueue = id => setQueue(q=>q[id]?q:{...q,[id]:true});
  const remove = id => setQueue(q=>{const c={...q};delete c[id];return c;});
  const clear = ()=>setQueue({});
  const queued = tickets.filter(t=>queue[t.id]);

  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <div className="lg:col-span-3 space-y-3">
        <div className="flex gap-2 flex-wrap">
          <StatusFilter val={filters.status} onChange={v=>setFilters(f=>({...f,status:v}))}/>
          <PriorityFilter val={filters.priority} onChange={v=>setFilters(f=>({...f,priority:v}))}/>
          <SearchBox val={search} onChange={setSearch}/>
        </div>
        <StatusMessage loading={loading} error={error} empty={!loading&&!visible.length}/>
        <TicketList tickets={visible} add={addToQueue} queue={queue}/>
      </div>
      <MyQueueSummary list={queued} remove={remove} clear={clear}/>
    </div>
  ); 
}
