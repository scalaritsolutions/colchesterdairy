import React from 'react';
import { Users, Truck, AlertCircle, FileText } from 'lucide-react';

const Admin = () => {
  return (
    <div className="flex-col flex gap-8 mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Producer Dashboard</h1>
          <p className="text-muted text-sm mt-1">Colchester Dairy Admin Portal</p>
        </div>
        <button className="btn btn-outline btn-sm">
          <FileText size={16} className="mr-2" style={{marginRight: '0.5rem'}}/> Export Round Book
        </button>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-4" style={{flexWrap: 'wrap'}}>
        <div className="card flex-1" style={{minWidth: '200px'}}>
          <div className="flex items-center gap-2 mb-2">
            <Truck size={18} className="text-primary" />
            <h3 className="font-semibold text-muted text-sm">Tomorrow's Load</h3>
          </div>
          <p className="font-bold text-2xl">2,450 <span className="text-sm font-normal text-muted">units</span></p>
        </div>
        <div className="card flex-1" style={{minWidth: '200px'}}>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={18} className="text-accent" />
            <h3 className="font-semibold text-muted text-sm">Late Additions</h3>
          </div>
          <p className="font-bold text-2xl">+42 <span className="text-sm font-normal text-muted">units</span></p>
        </div>
        <div className="card flex-1" style={{minWidth: '200px'}}>
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} className="text-primary" />
            <h3 className="font-semibold text-muted text-sm">Active Customers</h3>
          </div>
          <p className="font-bold text-2xl">840</p>
        </div>
      </div>

      {/* Master Round View */}
      <div className="card" style={{padding: 0, overflow: 'hidden'}}>
        <div className="p-4 flex justify-between items-center" style={{borderBottom: '1px solid var(--border-light)'}}>
          <h2 className="font-semibold">Master Round View (Mon, Oct 14th)</h2>
        </div>
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: 'var(--color-bg)', borderBottom: '1px solid var(--border-light)'}}>
                <th className="p-4 text-sm font-semibold">Product</th>
                <th className="p-4 text-sm font-semibold text-right">Standing Orders</th>
                <th className="p-4 text-sm font-semibold text-right">Top-ups</th>
                <th className="p-4 text-sm font-semibold text-right text-primary">Total Required</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Semi-Skimmed Milk (1Pt)', icon: '🥛', standing: 1850, topup: 20 },
                { name: 'Whole Milk (1Pt)', icon: '🐄', standing: 400, topup: 5 },
                { name: 'Large Eggs (6)', icon: '🥚', standing: 120, topup: 15 },
                { name: 'Sourdough Loaf', icon: '🍞', standing: 45, topup: 12 },
              ].map((item, i) => (
                <tr key={i} style={{borderBottom: '1px solid var(--border-light)'}}>
                  <td className="p-4 flex items-center gap-2"><span>{item.icon}</span> {item.name}</td>
                  <td className="p-4 text-right text-muted">{item.standing}</td>
                  <td className="p-4 text-right text-accent font-semibold">+{item.topup}</td>
                  <td className="p-4 text-right font-bold text-primary">{item.standing + item.topup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Management */}
      <div className="card" style={{padding: 0, overflow: 'hidden'}}>
        <div className="p-4 flex justify-between items-center" style={{borderBottom: '1px solid var(--border-light)'}}>
          <h2 className="font-semibold">Recent Activity</h2>
        </div>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li className="p-4 flex justify-between items-center" style={{borderBottom: '1px solid var(--border-light)'}}>
            <div>
              <p className="font-semibold text-sm">Sarah Jenkins <span className="text-xs text-muted font-normal">(Route A)</span></p>
              <p className="text-xs text-muted">Added 1x Sourdough Loaf for tomorrow</p>
            </div>
            <span className="text-xs font-semibold" style={{background: 'var(--color-bg)', padding: '0.25rem 0.5rem', borderRadius: '4px'}}>10:45 PM</span>
          </li>
          <li className="p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold text-sm">The local Cafe <span className="text-xs text-muted font-normal">(B2B Wholesale)</span></p>
              <p className="text-xs text-muted">Updated standing order: +5 Gallons Whole Milk</p>
            </div>
            <span className="text-xs font-semibold" style={{background: 'var(--color-bg)', padding: '0.25rem 0.5rem', borderRadius: '4px'}}>09:12 PM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
