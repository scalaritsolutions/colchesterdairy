import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const Products = () => {
  const categories = [
    { name: 'Milk', icon: '🥛', desc: 'Fresh local milk in glass or poly bottles.' },
    { name: 'Dairy Free', icon: '🌱', desc: 'Oat, Almond, and Soya alternatives.' },
    { name: 'Deft Cleaning', icon: '✨', desc: 'High-performance smart cleaning solutions.' },
    { name: 'Virusend Cleaning', icon: '🛡️', desc: 'Military-grade disinfectant protection.' },
    { name: 'Free Range Eggs', icon: '🥚', desc: 'Freshly laid eggs from local farms.' },
    { name: 'Cream, Cheese & Butter', icon: '🧀', desc: 'Rich dairy essentials and local cheeses.' },
    { name: 'Yoghurts', icon: '🥣', desc: 'Creamy local yoghurts in various flavors.' },
    { name: 'Sausages & Bacon', icon: '🥓', desc: 'Premium meats for the perfect breakfast.' },
    { name: 'Bread', icon: '🍞', desc: 'Freshly baked artisan loaves and daily bread.' },
    { name: 'Potatoes', icon: '🥔', desc: 'Local sack potatoes and seasonal spuds.' },
    { name: 'Milkshakes', icon: '🥤', desc: 'Deliciously thick and creamy shakes.' },
    { name: 'Tea & Coffee', icon: '☕', desc: 'Premium blends and everyday essentials.' },
    { name: 'Bottled Water', icon: '💧', desc: 'Still and sparkling mineral water.' },
    { name: 'Fruit Juices', icon: '🍊', desc: 'Freshly squeezed taste in every bottle.' },
    { name: 'Compost', icon: '🪴', desc: 'Quality garden compost for your plants.' },
    { name: 'Bird Seed', icon: '🐦', desc: 'Wild bird food and specialized seeds.' },
    { name: 'Cakes and Jams', icon: '🍰', desc: 'Sweet treats and locally made preserves.' },
  ];

  return (
    <div className="flex-col flex gap-8 mt-4">
      <section>
        <div className="flex items-center gap-3 mb-2">
          <ShoppingBag className="text-primary" size={28} />
          <h1 className="font-bold text-4xl">Our Products</h1>
        </div>
        <p className="text-muted text-lg max-w-2xl">
          Everything you need, delivered fresh to your door. From our famous local 
          milk to everyday household essentials.
        </p>
      </section>

      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '1.5rem'
      }}>
        {categories.map((cat, i) => (
          <div key={i} className="card flex items-start gap-4 hover-lift" style={{padding: '1.25rem'}}>
            <div style={{fontSize: '2.5rem', background: 'var(--color-bg)', padding: '0.75rem', borderRadius: 'var(--radius-md)'}}>
              {cat.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
              <p className="text-xs text-muted leading-relaxed mb-3">{cat.desc}</p>
              <button className="text-primary font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all" style={{background: 'none'}}>
                View Products <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-8 p-8 text-center" style={{background: 'var(--color-primary)', color: 'white', border: 'none'}}>
        <h2 className="font-bold text-2xl mb-2">Ready to order?</h2>
        <p className="mb-6 opacity-90">Sign up in minutes to start your local delivery round.</p>
        <button className="btn" style={{background: 'white', color: 'var(--color-primary)'}}>Start Your Delivery</button>
      </div>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }
      `}</style>
    </div>
  );
};

export default Products;
