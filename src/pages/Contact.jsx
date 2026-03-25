import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex-col flex gap-12 mt-4">
      <section>
        <h1 className="font-bold text-4xl mb-4">Get in Touch</h1>
        <p className="text-muted text-lg max-w-2xl">
          Whether you're a new customer with a question or a local business 
          looking for wholesale pricing, we'd love to hear from you.
        </p>
      </section>

      <div className="flex gap-12" style={{flexWrap: 'wrap'}}>
        {/* Contact Form */}
        <div className="flex-1" style={{minWidth: '350px'}}>
          <div className="card p-8">
            <h3 className="font-bold text-xl mb-6">Send us a Message</h3>
            <form className="flex-col gap-4 flex" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-4">
                <div className="flex-col flex flex-1">
                  <label className="text-xs font-semibold mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" style={inputStyle} />
                </div>
                <div className="flex-col flex flex-1">
                  <label className="text-xs font-semibold mb-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" style={inputStyle} />
                </div>
              </div>
              <div className="flex-col flex">
                <label className="text-xs font-semibold mb-1">Subject</label>
                <input type="text" placeholder="Wholesale Inquiry" style={inputStyle} />
              </div>
              <div className="flex-col flex">
                <label className="text-xs font-semibold mb-1">Message</label>
                <textarea rows="4" placeholder="How can we help?" style={inputStyle}></textarea>
              </div>
              <button className="btn btn-primary" style={{width: '100%'}}>
                <Send size={16} className="mr-2" style={{marginRight: '0.5rem'}}/> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="flex-col gap-6 flex" style={{minWidth: '250px'}}>
          <div className="flex gap-4 items-center">
            <div style={iconBoxStyle}><Phone size={20} /></div>
            <div>
              <p className="text-xs text-muted">Call us</p>
              <p className="font-bold">01206 555 123</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div style={iconBoxStyle}><Mail size={20} /></div>
            <div>
              <p className="text-xs text-muted">Email us</p>
              <p className="font-bold">info@colchesterdairy.co.uk</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div style={iconBoxStyle}><MapPin size={20} /></div>
            <div>
              <p className="text-xs text-muted">Visit our Yard</p>
              <p className="font-bold">Historic St, Colchester, CO1 1XX</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div style={iconBoxStyle}><Clock size={20} /></div>
            <div>
              <p className="text-xs text-muted">Administrative Hours</p>
              <p className="font-bold text-sm">Mon-Fri: 8 AM - 4 PM</p>
              <p className="font-bold text-sm">Sat: 8 AM - 12 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = { padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit', outline: 'none' };
const iconBoxStyle = { background: 'var(--color-bg)', color: 'var(--color-primary)', padding: '0.75rem', borderRadius: 'var(--radius-md)' };

export default Contact;
