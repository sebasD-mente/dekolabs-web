import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, QrCode, BarChart3, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(6, 9, 14, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
      padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
          }}>
            <Bot size={22} color="#06090e" strokeWidth={2.5} />
          </div>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}>
              DeKo <span className="text-gradient">Labs</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              AI Ecosystem
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-links">
          <a href="#soluciones" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00f2fe'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Soluciones
          </a>
          <a href="#simulador" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00f2fe'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Simulador IA
          </a>
          <a href="#qr-tool" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00f2fe'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Generador QR
          </a>
          <a href="#contacto" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#00f2fe'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Contacto
          </a>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#simulador" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            <Sparkles size={16} />
            <span>Probar Agente</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-links { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
