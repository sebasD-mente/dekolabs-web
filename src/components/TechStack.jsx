import React from 'react';
import { Cpu, Server, Shield, Database, Sparkles } from 'lucide-react';

const TECHS = [
  { name: 'Google Cloud', desc: 'Infraestructura de cómputo y escalabilidad global' },
  { name: 'Google Gemini', desc: 'Inteligencia artificial multimodal avanzada' },
  { name: 'Docker & Traefik', desc: 'Contenedores aislados y enrutamiento con SSL automático' },
  { name: 'Ubuntu Linux VPS', desc: 'Rendimiento dedicado y alta disponibilidad' }
];

export default function TechStack() {
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(13, 17, 23, 0.4)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '32px' }}>
          POWERED BY NEXT-GEN TECHNOLOGY
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {TECHS.map((tech, i) => (
            <div
              key={i}
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={16} color="#00f2fe" />
                <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{tech.name}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
