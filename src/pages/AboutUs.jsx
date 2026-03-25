import React from 'react';
import { Heart, Users, MapPin, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex-col flex gap-12 mt-4">
      <section className="text-center">
        <h1 className="font-bold text-4xl mb-4">Born & Bred in Colchester</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          We are a local, independent family-run dairy in the heart of historic Colchester, 
          dedicated to bringing the freshest produce straight to your doorstep.
        </p>
      </section>

      <div className="flex gap-8 items-center" style={{flexWrap: 'wrap'}}>
        <div className="flex-1" style={{minWidth: '300px'}}>
          <h2 className="font-bold text-2xl mb-4 text-primary">Our Heritage</h2>
          <p className="mb-4">
            For generations, the "milkround" has been a staple of British community life. 
            At Colchester Dairy, we've taken that tradition and brought it into the digital age.
          </p>
          <p>
            We don't just deliver milk; we deliver a piece of the community. Every bottle 
            of milk, every loaf of bread, and every dozen eggs is sourced with care 
            and delivered with a smile.
          </p>
        </div>
        <div className="flex-1" style={{minWidth: '300px'}}>
          <div className="card" style={{background: 'var(--color-cream)', border: '1px solid #EBD9B4', padding: '2rem'}}>
            <div className="flex-col gap-6 flex">
              <div className="flex gap-4 items-center">
                <div style={{background: 'var(--color-primary)', color: 'white', padding: '0.75rem', borderRadius: '50%'}}>
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Family Values</h4>
                  <p className="text-xs text-muted">Integrity and care in every delivery.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div style={{background: 'var(--color-accent)', color: 'white', padding: '0.75rem', borderRadius: '50%'}}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Locally Sourced</h4>
                  <p className="text-xs text-muted">Supporting local farmers and producers.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div style={{background: 'var(--color-primary-light)', color: 'white', padding: '0.75rem', borderRadius: '50%'}}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Premium Quality</h4>
                  <p className="text-xs text-muted">Only the best for our neighbors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="card p-8 text-center" style={{background: 'var(--color-primary)', color: 'white', border: 'none'}}>
        <h3 className="font-bold text-2xl mb-2">Join the Family</h3>
        <p className="mb-6 opacity-90">Experience the convenience of fresh, local delivery today.</p>
        <button className="btn" style={{background: 'white', color: 'var(--color-primary)'}}>Become a New Customer</button>
      </section>
    </div>
  );
};

export default AboutUs;
