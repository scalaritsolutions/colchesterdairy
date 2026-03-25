import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card mb-2" style={{padding: '0.75rem 1.25rem', cursor: 'pointer', border: '1px solid var(--border-light)'}} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-sm">{question}</h4>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {isOpen && <p className="text-sm text-muted mt-3">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    { q: "What time do you deliver?", a: "Most of our customers receive their delivery by 7 AM. This ensures you have your fresh milk and bread in time for breakfast!" },
    { q: "How do I pay my bill?", a: "Existing customers can pay via our new portal under the 'Billing' tab. We support Direct Debit and all major credit cards." },
    { q: "Can I manage my own holiday pauses?", a: "Yes! Use the 'Holiday Pause' tool in your dashboard to stop and resume deliveries instantly." },
    { q: "What is your refund policy?", a: "If you are unhappy with any product, please contact us within 24 hours of delivery and we will issue a full credit to your account." },
    { q: "Do you deliver on Bank Holidays?", a: "Yes, we deliver 365 days a year, including all bank holidays, except for Christmas Day, Boxing Day, and New Year's Day." },
    { q: "Is there a minimum order?", a: "No, there is no minimum order requirement, but we do encourage supporting your local milkround regularly!" },
  ];

  return (
    <div className="flex-col flex gap-8 mt-4">
      <section>
        <h1 className="font-bold text-4xl mb-4">Frequently Asked Questions</h1>
        <p className="text-muted text-lg mb-6">
          Everything you need to know about your local delivery.
        </p>
      </section>

      <div style={{maxWidth: '800px'}}>
        <h3 className="font-bold text-xl mb-4 flex gap-2 items-center">
           <HelpCircle className="text-primary" size={20} /> General Questions
        </h3>
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>

      <div className="card p-6 mt-8" style={{background: 'var(--color-bg)', border: 'none'}}>
        <h4 className="font-bold mb-2">Still have questions?</h4>
        <p className="text-sm text-muted mb-4">Our friendly team is here to help clarify any details.</p>
        <button className="btn btn-primary btn-sm">Contact Support</button>
      </div>
    </div>
  );
};

export default FAQs;
