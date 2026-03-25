import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'James Wilson', role: 'Residential Customer', text: "The best milk service in Colchester. Reliable, local, and now the new portal makes it so easy to add eggs at the last minute!", rating: 5 },
    { name: 'The Corner Cafe', role: 'B2B Wholesale', text: "We rely on Colchester Dairy for our daily milk. The quality is exceptional and the delivery is always on time for our morning rush.", rating: 5 },
    { name: 'Sarah Miller', role: 'Residential Customer', text: "Love the glass bottle tradition. It feels great to support a local family business while reducing plastic waste.", rating: 5 },
    { name: 'Thomas Wright', role: 'Residential Customer', text: "The variety of produce is surprising. I can get my bird seed and compost delivered with my milk!", rating: 4 },
  ];

  return (
    <div className="flex-col flex gap-8 mt-4">
      <section>
        <h1 className="font-bold text-4xl mb-4">What Our Neighbors Say</h1>
        <p className="text-muted text-lg">
          We pride ourselves on the relationships we've built over generations.
        </p>
      </section>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem'}}>
        {reviews.map((rev, i) => (
          <div key={i} className="card flex-col flex gap-4">
            <div className="flex text-amber-500 gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill={j < rev.rating ? "#f59e0b" : "none"} color="#f59e0b" />
              ))}
            </div>
            <MessageSquareQuote size={32} className="text-primary opacity-20" style={{marginBottom: '-1.5rem'}} />
            <p className="text-lg italic" style={{position: 'relative', zIndex: 1}}>&ldquo;{rev.text}&rdquo;</p>
            <div className="mt-4">
              <p className="font-bold">{rev.name}</p>
              <p className="text-xs text-muted">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card text-center p-8 bg-cream" style={{background: 'var(--color-bg)', border: '1px dashed var(--color-primary)'}}>
        <h4 className="font-bold mb-2">Want to leave a review?</h4>
        <p className="text-sm text-muted mb-4">We'd love to hear from you. Contact us or tag us on social media!</p>
        <button className="btn btn-outline btn-sm">Send Feedback</button>
      </div>
    </div>
  );
};

export default Testimonials;
