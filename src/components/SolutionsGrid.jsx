import React from 'react';
import { Bot, BarChart3, QrCode, Cloud, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Bot,
    color: '#00f2fe',
    title: 'Ecosistema de Agentes de IA',
    description: 'Agentes conversacionales que interpretan comprobantes de pago por foto, audios de voz o texto para registrar ventas y actualizar inventarios al instante.',
    tag: 'Multimodal AI'
  },
  {
    icon: BarChart3,
    color: '#9d4edd',
    title: 'Monitor & Dashboard de Ventas',
    description: 'Panel de gestión para eventos, stands y ventas online con control de cajas, usuarios, historial de auditoría y seguimiento de producción.',
    tag: 'Real-time Analytics'
  },
  {
    icon: QrCode,
    color: '#00f5a0',
    title: 'Generador de QR Dinámicos',
    description: 'Creación de códigos QR instantáneos y enlaces cortos para catálogos digitales, cobros por transferencia y puntos de venta masivos.',
    tag: 'QR Tools'
  },
  {
    icon: Cloud,
    color: '#4facfe',
    title: 'Infraestructura Cloud Escalable',
    description: 'Arquitectura en contenedores Docker y proxy seguro Traefik para garantizar alta disponibilidad, certificados SSL y despliegue rápido.',
    tag: 'Cloud Power'
  }
];

export default function SolutionsGrid() {
  return (
    <section id="soluciones" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge">
            <Zap size={14} />
            <span>NUESTRO ARSENAL TECNOLÓGICO</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Soluciones Diseñadas para <span className="text-gradient">Crecer Contigo</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Aprovechando la versatilidad de la inteligencia artificial moderna, creamos herramientas modulares que eliminan el trabajo operativo pesado.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px',
          maxWidth: '1150px',
          margin: '0 auto'
        }}>
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: `rgba(${sol.color === '#00f2fe' ? '0, 242, 254' : sol.color === '#9d4edd' ? '157, 78, 221' : sol.color === '#00f5a0' ? '0, 245, 160' : '79, 172, 254'}, 0.12)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: sol.color
                    }}>
                      <Icon size={28} />
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      {sol.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                    {sol.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {sol.description}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '6px', color: sol.color, fontSize: '0.85rem', fontWeight: 600 }}>
                  <span>Ver detalles</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
