import React from 'react';
import { Truck, Package, Clock, ShieldCheck } from 'lucide-react';

const Services = () => {
  const categories = [
    { title: 'Dairy Essentials', desc: 'Fresh milk, cream, and butter delivered in glass or poly.', icon: '🥛' },
    { title: 'Breakfast & Bakery', desc: 'Free-range eggs, artisan bread, and local jams.', icon: '🍞' },
    { title: 'Fresh Produce', desc: 'Potted potatoes and seasonal vegetables.', icon: '🥔' },
    { title: 'Household & Garden', desc: 'Compost, bird seed, and eco-friendly cleaning.', icon: '🪴' },
  ];

  return (
    <div className="flex-col flex gap-12 mt-4">
      <section>
        <h1 className="font-bold text-4xl mb-4">Our Services</h1>
        <p className="text-muted text-lg max-w-2xl">
          More than just a milkround. We provide a comprehensive local grocery 
          service designed for modern life.
        </p>
      </section>

      <div className="flex gap-6" style={{flexWrap: 'wrap'}}>
        {categories.map((cat, i) => (
          <div key={i} className="card flex-1" style={{minWidth: '250px'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{cat.icon}</div>
            <h3 className="font-bold text-xl mb-2">{cat.title}</h3>
            <p className="text-muted text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>

      <section className="flex gap-8 items-center" style={{flexWrap: 'wrap'}}>
        <div className="flex-1" style={{minWidth: '300px'}}>
          <div className="flex-col gap-6 flex">
            <div className="flex gap-4">
              <Truck className="text-primary" size={24} />
              <div>
                <h4 className="font-bold">Reliable Delivery</h4>
                <p className="text-sm text-muted">Our rounds cover the whole of Colchester, ensuring your goods are on your doorstep by 7 AM.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary" size={24} />
              <div>
                <h4 className="font-bold">Flexible Orders</h4>
                <p className="text-sm text-muted">Change your order up until 10 PM the night before delivery via our new portal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="text-primary" size={24} />
              <div>
                <h4 className="font-bold">Secure Billing</h4>
                <p className="text-sm text-muted">Automated payments with full itemized invoicing for B2C and B2B customers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1" style={{minWidth: '300px'}}>
          <div className="card" style={{padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-lg)'}}>
            <div style={{background: 'var(--color-primary)', color: 'white', padding: '1.5rem'}}>
              <h4 className="font-bold text-xl">Service Area</h4>
              <p className="text-sm opacity-90">Historic Colchester & Surrounding Areas</p>
            </div>
            <div className="p-6">
              <p className="text-sm mb-4">Check if we deliver to your postcode:</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="CO1 1XX" 
                  id="postcode-input"
                  style={{flex: 1, padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)'}} 
                />
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    const val = document.getElementById('postcode-input').value.toUpperCase();
                    if (val.startsWith('CO')) {
                      alert('Great News! We deliver to ' + val + '. You can sign up today!');
                    } else {
                      alert('Sorry, we don\'t deliver to ' + val + ' yet. We are expanding soon!');
                    }
                  }}
                >
                  Check
                </button>
              </div>
              <p className="text-[10px] text-muted mt-4">* We currently cover CO1, CO2, CO3, and CO4 postcodes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
