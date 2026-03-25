import React, { useState } from 'react';
import PhoneFrame from '../components/PhoneFrame';
import { Home, Calendar, ShoppingCart, CreditCard, Palmtree, ChevronRight, PlusCircle, CheckCircle2, AlertCircle } from 'lucide-react';

const MobileAppContent = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [added, setAdded] = useState(false);

  const inventory = [
    { n: 'Semi-Skimmed (1pt)', i: '🥛', p: '0.80', inStock: true, cat: 'Dairy' },
    { n: 'Whole Milk (1pt)', i: '🐄', p: '0.85', inStock: true, cat: 'Dairy' },
    { n: 'Large Eggs (6)', i: '🥚', p: '2.10', inStock: true, cat: 'Fresh' },
    { n: 'Butter', i: '🧈', p: '2.50', inStock: true, cat: 'Dairy' },
    { n: 'Sourdough', i: '🍞', p: '3.20', inStock: true, cat: 'Bakery' },
    { n: 'Natural Yoghurt', i: '🥣', p: '1.50', inStock: false, cat: 'Dairy' },
    { n: 'Premium Bacon', i: '🥓', p: '4.50', inStock: false, cat: 'Fresh' },
    { n: 'Orange Juice', i: '🧃', p: '1.80', inStock: true, cat: 'Drinks' },
    { n: 'Compost', i: '🪴', p: '6.50', inStock: false, cat: 'Garden' },
  ];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Schedule':
        return (
          <div className="flex-col flex gap-4">
            <h4 className="font-bold text-sm mb-2">My Weekly Round</h4>
            {['Mon', 'Wed', 'Fri'].map(day => (
              <div key={day} className="card flex justify-between items-center p-3" style={{border: 'none', background: 'white'}}>
                <div className="flex items-center gap-3">
                  <div style={{background: 'var(--color-primary)', color: 'white', padding: '0.4rem', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold'}}>
                    {day}
                  </div>
                  <span className="text-xs font-semibold">2x Semi-Skimmed</span>
                </div>
                <ChevronRight size={14} className="text-muted" />
              </div>
            ))}
            <button className="btn btn-outline btn-sm" style={{marginTop: '1rem', fontSize: '10px'}}>Edit Full Schedule</button>
          </div>
        );
      case 'Shop':
        return (
          <div className="flex-col flex gap-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-sm">Fresh Today</h4>
              <span style={{fontSize: '9px', background: '#dcfce7', color: '#166534', padding: '0.1rem 0.4rem', borderRadius: '1rem', fontWeight: 600}}>
                In Inventory Only
              </span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem'}}>
              {inventory.filter(item => item.inStock).map((item, idx) => (
                <div key={idx} className="card flex-col items-center flex" style={{ padding: '1rem', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', background: 'white' }}>
                  <span style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.i}</span>
                  <span className="font-bold" style={{fontSize: '10px'}}>{item.n}</span>
                  <span className="text-xs text-muted mb-2">£{item.p}</span>
                  <button onClick={handleAdd} className="btn btn-primary" style={{ padding: '0.2rem', minHeight: 'auto', borderRadius: '4px', width: '100%', fontSize: '10px' }}>
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Billing':
        return (
          <div className="flex-col flex gap-3">
            <h4 className="font-bold text-sm mb-2">Recent Invoices</h4>
            {[
              { id: 'Oct 11', amt: '18.50' },
              { id: 'Oct 04', amt: '12.40' },
              { id: 'Sep 27', amt: '15.20' }
            ].map((inv, idx) => (
              <div key={idx} className="card flex justify-between p-3" style={{border: 'none', background: 'white'}}>
                <div>
                  <p className="font-bold text-xs">{inv.id}</p>
                  <p className="text-[10px] text-muted">Paid via Visa **** 4421</p>
                </div>
                <p className="font-bold text-sm">£{inv.amt}</p>
              </div>
            ))}
            <div className="mt-4 p-3 bg-white rounded-lg flex items-center gap-3">
              <CheckCircle2 size={16} className="text-primary" />
              <p className="text-[10px] font-semibold">Account Up to Date</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex-col flex gap-6">
            <div className="card" style={{ background: 'white', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h4 className="font-bold mb-3 text-sm flex justify-between text-primary uppercase tracking-tighter" style={{fontSize: '11px'}}>
                Your Basket
              </h4>
              <div className="flex justify-between text-xs mb-2">
                <span>2x Semi-Skimmed</span><span>£1.60</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>1x Large Eggs</span><span>£2.10</span>
              </div>
            </div>

            <h4 className="font-bold text-sm">Quick Add</h4>
            <div className="flex gap-3" style={{ overflowX: 'auto', margin: '0 -1.25rem', padding: '0 1.25rem 0.5rem 1.25rem' }}>
              {inventory.filter(item => item.inStock && item.cat === 'Dairy').map((item, idx) => (
                <div key={idx} className="card flex-col items-center flex" style={{ minWidth: '90px', padding: '0.75rem', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', background: 'white' }}>
                  <span style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.i}</span>
                  <span className="font-bold" style={{fontSize: '10px'}}>{item.n}</span>
                  <button onClick={handleAdd} style={{ marginTop: '0.5rem', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PlusCircle size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="card mt-2 flex justify-between items-center" style={{ background: 'var(--color-cream)', border: '1px solid #EBD9B4' }}>
              <div className="flex items-center gap-3">
                <Palmtree size={18} className="text-primary" />
                <div>
                  <p className="font-bold text-xs uppercase tracking-tighter">Holiday Pause</p>
                  <p className="text-[10px] text-muted">Manage absences</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-muted" />
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '2.5rem 1.25rem 1rem 1.25rem', background: 'var(--color-primary)', color: 'white' }}>
        <h3 className="font-bold text-xl tracking-tight" style={{marginBottom: '-4px'}}>{activeTab}</h3>
        <p style={{ opacity: 0.9, fontSize: '10px', marginTop: '4px' }}>
          {activeTab === 'Home' ? 'Next delivery at 6 AM' : 'Colchester Dairy Digital'}
        </p>
      </div>

      {/* Main Scrollable Area */}
      <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', background: 'var(--color-bg)' }}>
        {renderContent()}
      </div>

      {/* Tab Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0.75rem 0 1.5rem 0', background: 'white', borderTop: '1px solid var(--border-light)' }}>
        {[
          { l: 'Home', i: Home },
          { l: 'Schedule', i: Calendar },
          { l: 'Shop', i: ShoppingCart },
          { l: 'Billing', i: CreditCard }
        ].map((t) => (
          <div key={t.l} onClick={() => setActiveTab(t.l)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', color: activeTab === t.l ? 'var(--color-primary)' : '#9ca3af' }}>
            <t.i size={20} />
            <span style={{ fontSize: '9px', fontWeight: activeTab === t.l ? '700' : '500' }}>{t.l}</span>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      {added && (
        <div style={{ position: 'absolute', bottom: '15%', left: '10%', right: '10%', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '0.6rem', borderRadius: '2rem', textAlign: 'center', fontSize: '10px', zIndex: 200, backdropFilter: 'blur(4px)' }}>
          Added to your delivery!
        </div>
      )}
    </div>
  );
};

const MobileDemo = () => {
  return (
    <PhoneFrame>
      <MobileAppContent />
    </PhoneFrame>
  );
};

export default MobileDemo;
