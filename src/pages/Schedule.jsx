import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Schedule = () => {
  const [toast, setToast] = useState(false);
  
  const handleSave = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className="flex-col flex gap-6 mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">My Schedule</h1>
          <p className="text-muted text-sm mt-1">Manage your recurring "Standing Order"</p>
        </div>
        <button onClick={handleSave} className="btn btn-primary btn-sm hidden-mobile">
          <Save size={16} style={{marginRight: '0.5rem'}} /> Save Schedule
        </button>
      </div>

      <div className="card" style={{padding: '0', overflowX: 'auto'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'center'}}>
          <thead>
            <tr style={{background: 'var(--color-bg)', borderBottom: '1px solid var(--border-light)'}}>
              <th style={{padding: '1rem', textAlign: 'left', minWidth: '170px'}}>Product</th>
              <th className="p-4">Mon</th>
              <th className="p-4 text-muted font-normal">Tue</th>
              <th className="p-4">Wed</th>
              <th className="p-4 text-muted font-normal">Thu</th>
              <th className="p-4">Fri</th>
              <th className="p-4">Sat</th>
              <th className="p-4 text-muted font-normal">Sun</th>
            </tr>
          </thead>
          <tbody>
            {[
              {name: 'Semi-Skimmed (1Pt)', icon: '🥛', m:2, w:2, f:2, s:3},
              {name: 'Whole Milk (1Pt)', icon: '🐄', m:0, w:0, f:1, s:0},
              {name: 'Large Eggs (6)', icon: '🥚', m:0, w:1, f:0, s:0},
              {name: 'Sourdough', icon: '🍞', m:1, w:0, f:0, s:2},
            ].map((row, i) => (
              <tr key={i} style={{borderBottom: '1px solid var(--border-light)'}}>
                <td style={{padding: '1rem', textAlign: 'left'}} className="flex items-center gap-2">
                  <span>{row.icon}</span> <span className="font-semibold text-sm">{row.name}</span>
                </td>
                <td><input type="number" defaultValue={row.m || 0} min="0" style={inputStyle} /></td>
                <td><input type="number" defaultValue={0} min="0" disabled style={inputDisabledStyle} /></td>
                <td><input type="number" defaultValue={row.w || 0} min="0" style={inputStyle} /></td>
                <td><input type="number" defaultValue={0} min="0" disabled style={inputDisabledStyle} /></td>
                <td><input type="number" defaultValue={row.f || 0} min="0" style={inputStyle} /></td>
                <td><input type="number" defaultValue={row.s || 0} min="0" style={inputStyle} /></td>
                <td><input type="number" defaultValue={0} min="0" disabled style={inputDisabledStyle} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button onClick={handleSave} className="btn btn-primary" style={{width: '100%', display: 'none'}} id="mobile-save-btn">
        <Save size={16} justify="center" style={{marginRight: '0.5rem'}} /> Save Changes
      </button>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          #mobile-save-btn { display: inline-flex !important; }
        }
        @keyframes slideUp {
          from { transform: translate(-50%, 100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>

      {toast && (
        <div style={{
          position:'fixed', bottom:'5rem', left:'50%', transform:'translateX(-50%)',
          background:'var(--color-primary)', color:'white', padding:'0.75rem 1.5rem',
          borderRadius:'2rem', boxShadow:'var(--shadow-lg)', zIndex:100, fontSize:'0.875rem', fontWeight:500,
          animation: 'slideUp 0.3s ease-out'
        }}>
          Weekly total updated to £18.50. Changes saved.
        </div>
      )}
    </div>
  );
};

const inputStyle = { width: '45px', padding: '0.25rem', textAlign: 'center', border: '1px solid var(--border-light)', borderRadius: '4px' };
const inputDisabledStyle = { ...inputStyle, background: 'var(--color-bg)', opacity: 0.5 };

export default Schedule;
