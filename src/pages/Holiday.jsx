import React, { useState } from 'react';
import { Palmtree, Calendar as CalendarIcon, ArrowRight, Check } from 'lucide-react';

const Holiday = () => {
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div className="flex-col items-center justify-center flex mt-8" style={{minHeight: '60vh'}}>
        <div className="card flex-col items-center flex p-8 text-center" style={{maxWidth: '400px'}}>
          <div style={{background: 'var(--color-primary-light)', color: 'white', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem'}}>
            <Check size={32} />
          </div>
          <h2 className="font-bold text-2xl mb-2">Holiday Paused!</h2>
          <p className="text-muted mb-6">Your deliveries are paused from Oct 20th to Oct 27th. Enjoy your break!</p>
          <div className="card mb-6" style={{background: 'rgba(45, 90, 39, 0.05)', border: '1px dashed var(--color-primary)', width: '100%', padding:'1rem'}}>
            <p className="font-semibold text-primary">You saved £24.00 during this break!</p>
          </div>
          <button onClick={() => setSuccess(false)} className="btn btn-outline" style={{width: '100%'}}>
            Manage Schedule
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-col flex gap-6 mt-4">
      <div>
        <h1 className="font-bold text-2xl">Holiday Pause</h1>
        <p className="text-muted text-sm mt-1">Don't need milk for a few days? Pause your deliveries instantly.</p>
      </div>

      <div className="card p-6">
        <div className="flex items-center gap-4 mb-6" style={{flexWrap: 'wrap'}}>
          <div className="flex-col flex flex-1" style={{minWidth: '200px'}}>
            <label className="text-sm font-semibold mb-2">Start Date</label>
            <div className="flex items-center gap-2" style={{border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '0.75rem'}}>
              <CalendarIcon size={18} className="text-muted" />
              <input type="date" style={{border: 'none', background: 'transparent', width: '100%', outline: 'none', fontFamily: 'inherit'}} />
            </div>
          </div>
          <ArrowRight className="text-muted hidden-mobile" style={{marginTop: '1.5rem'}} />
          <div className="flex-col flex flex-1" style={{minWidth: '200px'}}>
            <label className="text-sm font-semibold mb-2">End Date (Resume)</label>
            <div className="flex items-center gap-2" style={{border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '0.75rem'}}>
              <CalendarIcon size={18} className="text-muted" />
              <input type="date" style={{border: 'none', background: 'transparent', width: '100%', outline: 'none', fontFamily: 'inherit'}} />
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 items-center flex gap-4" style={{background: 'var(--color-bg)', borderRadius: 'var(--radius-md)'}}>
          <Palmtree size={24} className="text-primary" />
          <div className="flex-1">
            <h4 className="font-semibold">Estimated Savings: £24.00</h4>
            <p className="text-sm text-muted">You will skip 3 deliveries during this period.</p>
          </div>
        </div>

        <button onClick={() => setSuccess(true)} className="btn btn-primary" style={{width: '100%'}}>
          Confirm Pause
        </button>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Holiday;
