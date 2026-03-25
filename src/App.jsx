import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Home, Calendar, ShoppingCart, CreditCard, Palmtree, Settings, Users, Truck, MessageSquareQuote, HelpCircle, Mail, ArrowLeft } from 'lucide-react'

import Dashboard from './pages/Dashboard'
import Schedule from './pages/Schedule'
import Holiday from './pages/Holiday'
import Admin from './pages/Admin'
import MobileDemo from './pages/MobileDemo'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Shop from './pages/Shop'
import Billing from './pages/Billing'
import Login from './pages/Login'
import Register from './pages/Register'



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register onComplete={() => setIsLoggedIn(true)} />} />
        <Route path="*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
    )
  }
  const accountItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/schedule', label: 'My Schedule', icon: Calendar },
    { path: '/shop', label: 'Shop', icon: ShoppingCart },
    { path: '/billing', label: 'Billing', icon: CreditCard },
    { path: '/holiday', label: 'Holiday Pause', icon: Palmtree },
  ]

  const infoItems = [
    { path: '/products', label: 'Our Products', icon: ShoppingCart },
    { path: '/about', label: 'About Us', icon: Users },
    { path: '/services', label: 'Our Services', icon: Truck },
    { path: '/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
    { path: '/faqs', label: 'FAQs', icon: HelpCircle },
    { path: '/contact', label: 'Contact Us', icon: Mail },
  ]


  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <img src="/logo.png" alt="Colchester Dairy" width="64" height="64" style={{borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '2px solid white'}} />
            <span style={{fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--color-primary)'}}>COLCHESTER DAIRY</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <span className="text-muted" style={{fontSize: '12px'}}>Next Delivery</span> 
              <span className="font-semibold text-primary">Tomorrow, 6 AM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-content">
        {/* Desktop Sidebar */}
        <aside className="sidebar">
          <div className="card mb-6" style={{background: 'var(--color-cream)', border: '1px solid #EBD9B4', padding: '1rem'}}>
             <p className="text-xs font-bold text-primary mb-2">CLIENT DEMO</p>
             <NavLink to="/mobile-demo" className="btn btn-primary btn-sm" style={{width: '100%', fontSize: '11px'}}>
               Preview Mobile App
             </NavLink>
          </div>
          
          <div className="text-xs font-bold text-muted mb-2 px-4 uppercase tracking-wider">My Account</div>
          {accountItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}

          <div className="text-xs font-bold text-muted mb-2 px-4 mt-6 uppercase tracking-wider">Information</div>
          {infoItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
          <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
            <NavLink to="/admin" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              <Settings size={20} />
              Admin
            </NavLink>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="nav-link w-full text-left" 
              style={{background: 'none', color: '#ef4444', marginTop: '0.5rem'}}
            >
              <ArrowLeft size={20} />
              Sign Out
            </button>
          </div>

        </aside>

        {/* Page Content */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/holiday" element={<Holiday />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/mobile-demo" element={<MobileDemo />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>



        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        {accountItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <item.icon />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default App
