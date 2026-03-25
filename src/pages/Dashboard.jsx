import React from 'react';
import { Plus, Edit2 } from 'lucide-react';

const Dashboard = () => {
  const topUpItems = [
    { id: 1, name: 'Clotted Cream', price: 2.50, image: '🧈' },
    { id: 2, name: 'Sourdough Loaf', price: 3.20, image: '🍞' },
    { id: 3, name: 'Free Range Eggs (6)', price: 2.10, image: '🥚' },
    { id: 4, name: 'Premium Sausages', price: 4.50, image: '🌭' },
    { id: 5, name: 'Spring Compost', price: 5.00, image: '🪴' },
  ];

  return (
    <div className="flex-col gap-8 flex">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Good Evening, Sarah!</h1>
        <div className="card py-4 items-center flex gap-4 text-sm" style={{padding: '0.75rem 1rem'}}>
          <span className="text-muted">Next payment:</span>
          <span className="font-bold text-primary">£12.40 (Fri)</span>
        </div>
      </div>

      {/* Next Delivery Card */}
      <section>
        <h2 className="font-semibold mb-4 text-lg">Next Delivery</h2>
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)', color: 'white', border: 'none' }}>
          <div className="flex justify-between items-center mb-4 border-b pb-4" style={{borderBottom: '1px solid rgba(255,255,255,0.2)'}}>
            <h3 className="font-bold text-xl">Tomorrow, Oct 14th</h3>
            <span style={{background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem'}}>Confirmed</span>
          </div>
          <ul className="flex-col gap-2 mb-6" style={{listStyle: 'none', padding: 0}}>
            <li className="flex justify-between"><span>2x Semi-Skimmed Milk (1 Pt)</span><span>£1.60</span></li>
            <li className="flex justify-between"><span>1x Large Eggs (6)</span><span>£2.10</span></li>
            <li className="flex justify-between"><span>1x Sourdough Bread</span><span>£3.20</span></li>
          </ul>
          <button className="btn" style={{background: 'white', color: 'var(--color-primary)', width: '100%'}}>
            <Edit2 size={16} style={{marginRight: '0.5rem'}} /> Edit this delivery
          </button>
        </div>
      </section>

      {/* Top-Up Carousel */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Grab a Top-Up</h2>
          <button className="text-primary font-semibold text-sm" style={{background: 'none'}}>View All</button>
        </div>
        <div className="flex gap-4" style={{overflowX: 'auto', paddingBottom: '1rem', margin: '0 -1rem', padding: '0 1rem'}}>
          {topUpItems.map(item => (
            <div key={item.id} className="card flex-col items-center flex" style={{minWidth: '140px', padding: '1rem', flexShrink: 0}}>
              <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.image}</div>
              <p className="font-semibold mb-1 text-center text-sm">{item.name}</p>
              <p className="text-muted text-sm mb-4">£{item.price.toFixed(2)}</p>
              <button className="btn btn-outline btn-sm" style={{width: '100%'}}>
                <Plus size={16} /> Add
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
