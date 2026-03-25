import React from 'react';
import { CreditCard, Download, ExternalLink, ShieldCheck } from 'lucide-react';

const Billing = () => {
  const invoices = [
    { id: 'INV-4421', date: 'Oct 11, 2026', total: 18.50, status: 'Paid' },
    { id: 'INV-4392', date: 'Oct 04, 2026', total: 12.40, status: 'Paid' },
    { id: 'INV-4355', date: 'Sep 27, 2026', total: 15.20, status: 'Paid' },
    { id: 'INV-4312', date: 'Sep 20, 2026', total: 12.40, status: 'Paid' },
  ];

  return (
    <div className="flex-col flex gap-8 mt-4">
      <div>
        <h1 className="font-bold text-3xl">Billing & Invoices</h1>
        <p className="text-muted text-sm">Manage your payments and download PDF receipts</p>
      </div>

      <div className="flex gap-6" style={{flexWrap: 'wrap'}}>
        <div className="flex-1" style={{minWidth: '350px'}}>
          <h3 className="font-bold text-lg mb-4">Payment Method</h3>
          <div className="card flex justify-between items-center" style={{background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', border: 'none'}}>
             <div className="flex gap-4 items-center">
               <div style={{background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '4px'}}>
                 <CreditCard size={24} />
               </div>
               <div>
                 <p className="font-bold">VISA •••• 4421</p>
                 <p className="text-xs opacity-60">Expires 12/28</p>
               </div>
             </div>
             <button className="text-xs font-bold border rounded px-3 py-1 border-white hover:bg-white hover:text-black transition-all">Edit</button>
          </div>
          
          <div className="mt-6 flex gap-3 p-4 items-center" style={{background: 'var(--color-bg)', borderRadius: 'var(--radius-md)'}}>
            <ShieldCheck className="text-primary" size={20} />
            <p className="text-xs text-muted">Your payment information is encrypted and processed via **Stripe**.</p>
          </div>
        </div>

        <div className="flex-1" style={{minWidth: '350px'}}>
          <h3 className="font-bold text-lg mb-4">Invoice History</h3>
          <div className="card" style={{padding: 0}}>
            <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{background: 'var(--color-bg)', borderBottom: '1px solid var(--border-light)'}}>
                  <th className="p-3 text-xs font-bold">ID</th>
                  <th className="p-3 text-xs font-bold">Date</th>
                  <th className="p-3 text-xs font-bold">Amount</th>
                  <th className="p-3 text-xs font-bold">Status</th>
                  <th className="p-3 text-xs font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv, i) => (
                  <tr key={i} style={{borderBottom: '1px solid var(--border-light)'}}>
                    <td className="p-3 text-sm font-semibold">{inv.id}</td>
                    <td className="p-3 text-sm text-muted">{inv.date}</td>
                    <td className="p-3 text-sm font-bold">£{inv.total.toFixed(2)}</td>
                    <td className="p-3">
                      <span style={{fontSize: '10px', background: '#dcfce7', color: '#166534', padding: '0.2rem 0.5rem', borderRadius: '1rem', fontWeight: 600}}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button className="text-muted hover:text-primary"><Download size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
