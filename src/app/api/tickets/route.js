export async function GET() {
  
    const tickets = [
    { id:'t-1001', title:'VPN broken', description:'User can’t connect to VPN.', priority:'High', status:'Open', assignee:'Unassigned', updatedAt:'2025-10-31T14:05:00Z' },
    { id:'t-1002', title:'Email delay', description:'Emails slow to send.', priority:'Medium', status:'In Progress', assignee:'Alice', updatedAt:'2025-11-01T09:20:00Z' },
    { id:'t-1003', title:'Reset fails', description:'Password reset link broken.', priority:'High', status:'Open', assignee:'Bob', updatedAt:'2025-11-02T11:15:00Z' },
    { id:'t-1004', title:'Printer jam', description:'Tray 2 jam often.', priority:'Low', status:'Resolved', assignee:'Carol', updatedAt:'2025-10-29T16:30:00Z' },
    { id:'t-1005', title:'Security alert', description:'Suspicious login attempts.', priority:'Critical', status:'Open', assignee:'Unassigned', updatedAt:'2025-11-05T07:30:00Z' },
    { id:'t-1006', title:'App crash', description:'Mobile app crashes.', priority:'High', status:'In Progress', assignee:'Dan', updatedAt:'2025-11-03T21:05:00Z' },
    { id:'t-1007', title:'Slow PC', description:'Boot time too long.', priority:'Medium', status:'On Hold', assignee:'Eve', updatedAt:'2025-11-01T13:10:00Z' },
    { id:'t-1008', title:'DB read-only', description:'DB flips to read-only.', priority:'Critical', status:'In Progress', assignee:'Frank', updatedAt:'2025-11-03T14:50:00Z' },
    { id:'t-1009', title:'Monitor flicker', description:'Screen flickers.', priority:'Medium', status:'Open', assignee:'Unassigned', updatedAt:'2025-10-30T15:25:00Z' },
    { id:'t-1010', title:'Access req', description:'Needs finance folder access.', priority:'Low', status:'Resolved', assignee:'Grace', updatedAt:'2025-10-27T12:00:00Z' },
    { id:'t-1011', title:'CRM sync', description:'Records not syncing.', priority:'High', status:'On Hold', assignee:'Hank', updatedAt:'2025-11-02T18:40:00Z' },
    { id:'t-1012', title:'New VM', description:'Request new dev VM.', priority:'Low', status:'Open', assignee:'Ivy', updatedAt:'2025-11-04T11:00:00Z' }
  ];
  
  return Response.json(tickets);
}
 