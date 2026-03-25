import React, { useState } from 'react';
import { ShoppingCart, Plus, Filter, Search } from 'lucide-react';

const Shop = () => {
  const [added, setAdded] = useState(false);
  
  const products = [
    { name: 'Semi-Skimmed (1Pt)', price: 0.80, icon: '🥛', cat: 'Dairy' },
    { name: 'Whole Milk (1Pt)', price: 0.85, icon: '🐄', cat: 'Dairy' },
    { name: 'Oat Milk (1L)', price: 1.95, icon: '🌾', cat: 'Dairy Free' },
    { name: 'Large Eggs (6)', price: 2.10, icon: '🥚', cat: 'Bakery' },
    { name: 'Sourdough Loaf', price: 3.20, icon: '🍞', cat: 'Bakery' },
    { name: 'Unsalted Butter', price: 2.50, icon: '🧈', cat: 'Dairy' },
    { name: 'Natural Yoghurt', price: 1.50, icon: '🥣', cat: 'Dairy' },
    { name: 'Premium Bacon', price: 4.50, icon: '🥓', cat: 'Bakery' },
  ];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex-col flex gap-8 mt-4">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bold text-3xl">Shop All Products</h1>
          <p className="text-muted text-sm">Add one-off items to your next delivery</p>
        </div>
        <div className="flex gap-2">
           <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-sm">
             <Search size={16} className="text-muted" />
             <input type="text" placeholder="Search..." style={{border:'none', outline:'none', width: '120px'}} />
           </div>
           <button className="btn btn-outline btn-sm"><Filter size={16} /> Filter</button>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'}}>
        {products.map((p, i) => (
          <div key={i} className="card p-4 flex-col flex items-center text-center">
            <span style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{p.icon}</span>
            <h4 className="font-bold text-sm mb-1">{p.name}</h4>
            <p className="text-xs text-muted mb-4">£{p.price.toFixed(2)}</p>
            <button onClick={handleAdd} className="btn btn-primary btn-sm" style={{width: '100%'}}>
              <Plus size={14} className="mr-1" style={{marginRight: '0.25rem'}}/> Add to Next
            </button>
          </div>
        ))}
      </div>

      {added && (
        <div style={{
          position:'fixed', bottom:'5rem', left:'50%', transform:'translateX(-50%)',
          background:'var(--color-primary)', color:'white', padding:'0.75rem 1.5rem',
          borderRadius:'2rem', boxShadow:'var(--shadow-lg)', zIndex:100, fontSize:'0.875rem', fontWeight:500
        }}>
          Added to your next delivery!
        </div>
      )}
    </div>
  );
};

export default Shop;
