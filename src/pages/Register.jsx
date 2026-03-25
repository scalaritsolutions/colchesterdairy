import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft, MapPin, CreditCard, User, Mail, Phone } from 'lucide-react';
import '../login.css';

const Register = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    postcode: '',
    name: '',
    email: '',
    phone: '',
    card: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-50 text-blue-600 rounded-full mb-4"><MapPin size={28} /></div>
              <h2 className="text-2xl font-bold text-slate-800">Check Your Area</h2>
              <p className="text-slate-500 mt-2 mb-6">We deliver to Historic Colchester (CO1-CO4).</p>
            </div>
            <div className="form-group">
              <label className="form-label">Postcode</label>
              <input 
                type="text" 
                placeholder="e.g. CO1 1XX" 
                className="login-input" 
                style={{ paddingLeft: '1.25rem', textAlign: 'center', fontSize: '1.25rem', textTransform: 'uppercase' }}
                value={formData.postcode}
                onChange={(e) => setFormData({...formData, postcode: e.target.value})}
              />
            </div>
            <button 
              onClick={() => {
                if (formData.postcode.toUpperCase().startsWith('CO')) nextStep();
                else alert('Sorry, we don\'t deliver there yet!');
              }}
              className="login-btn-submit"
            >
              Check Availability <ArrowRight size={20} />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 text-left">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Your Details</h2>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" size={20} />
                <input type="text" placeholder="John Doe" className="login-input" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input type="email" placeholder="john@example.com" className="login-input" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <div className="input-wrapper">
                <Phone className="input-icon" size={20} />
                <input type="tel" placeholder="07123 456789" className="login-input" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            <div className="flex gap-4" style={{ marginTop: '2rem' }}>
              <button onClick={prevStep} className="btn btn-outline" style={{ flex: 1, padding: '1.25rem', borderRadius: '1rem', border: '2px solid #f1f5f9' }}>Back</button>
              <button onClick={nextStep} className="login-btn-submit" style={{ flex: 2, marginTop: 0 }}>Continue</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-4"><CreditCard size={28} /></div>
              <h2 className="text-2xl font-bold text-slate-800">Secure Payment</h2>
              <p className="text-slate-500 mt-2">Set up your account for automated billing.</p>
            </div>
            <div className="p-5 border-2 border-primary bg-primary/5 rounded-2xl flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <CreditCard size={24} className="text-primary" />
                <div className="text-left">
                  <p className="font-bold text-slate-800 text-sm">Direct Debit</p>
                  <p className="text-xs text-slate-500">Industry standard security</p>
                </div>
              </div>
              <CheckCircle size={24} className="text-primary" />
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="btn btn-outline" style={{ flex: 1, padding: '1.25rem', borderRadius: '1rem', border: '2px solid #f1f5f9' }}>Back</button>
              <button onClick={nextStep} className="login-btn-submit" style={{ flex: 2, marginTop: 0 }}>Set up Payment</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-6 py-4">
            <div className="inline-flex p-6 bg-emerald-100 text-emerald-600 rounded-full"><CheckCircle size={56} /></div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-800">All Set!</h2>
              <p className="text-slate-500 mt-2 text-lg">Your account is ready. Welcome to the family.</p>
            </div>
            <button onClick={onComplete} className="login-btn-submit" style={{ fontSize: '1.25rem', padding: '1.5rem' }}>
              Go to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card" style={{ maxWidth: step === 4 ? '500px' : '440px' }}>
        {step < 4 && (
          <div className="flex gap-2 mb-10">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i <= step ? 'bg-primary' : 'bg-slate-100'}`} />
            ))}
          </div>
        )}
        {renderStep()}
      </div>
    </div>
  );
};

export default Register;
