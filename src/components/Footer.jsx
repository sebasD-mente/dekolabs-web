import React from 'react';
import { Bot, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(6, 9, 14, 0.95)',
      fontSize: '0.9rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'var(--grad-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Bot size={18} color="#06090e" />
          </div>
          <div>
            <span style={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem' }}>DeKo Labs</span>
            <span style={{ marginLeft: '8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              • De Emprendedores para Emprendedores
            </span>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>Soluciones</a>
          <a href="#simulador" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>Simulador</a>
          <a href="#qr-tool" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>QR Tool</a>
          <a href="#contacto" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>Contacto</a>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} DeKo Labs. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
