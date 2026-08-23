import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingDown, TrendingUp, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge">
            <Sparkles size={14} />
            <span>EL IMPACTO DE DEKO LABS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            ¿Por qué la IA es urgente para las <span className="text-gradient">Pequeñas Empresas</span>?
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            ¿Piensas que los agentes de IA de última generación son inaccesibles para pequeños negocios? Hemos transformado esa realidad.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          maxWidth: '1050px',
          margin: '0 auto'
        }}>
          
          {/* Problem Card */}
          <div className="glass-card" style={{
            padding: '36px',
            borderLeft: '4px solid #ff5f56',
            background: 'rgba(25, 15, 20, 0.6)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255, 95, 86, 0.15)', color: '#ff5f56' }}>
                <TrendingDown size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                El 80% Sin Gestión Digital
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
              En los ecosistemas de comercio masivo y eventos, 8 de cada 10 emprendedores llevan sus registros en papel o notas desordenadas:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#e6edf3' }}>
                <AlertTriangle size={18} color="#ff5f56" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Invisibilidad financiera crítica:</strong> No saber cuánto se gana o cuánto queda en caja al final del día.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#e6edf3' }}>
                <AlertTriangle size={18} color="#ff5f56" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Pérdida de inventario y stock:</strong> Descontrol en reposición y pedidos no entregados.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#e6edf3' }}>
                <AlertTriangle size={18} color="#ff5f56" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Cierre prematuro de negocios</strong> por fricción y fatiga administrativa.</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="glass-card" style={{
            padding: '36px',
            borderLeft: '4px solid #00f5a0',
            background: 'rgba(10, 25, 20, 0.6)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 245, 160, 0.15)', color: '#00f5a0' }}>
                <TrendingUp size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                La Solución: Ecosistema DeKo Labs
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Desplegamos una 'navaja suiza' de inteligencia artificial que se adapta al ritmo de crecimiento de cada negocio:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#e6edf3' }}>
                <CheckCircle2 size={18} color="#00f5a0" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Registro en lenguaje natural:</strong> Dicta por audio, envía una foto del comprobante o chatea por WhatsApp.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#00f5a0' }}>
                <CheckCircle2 size={18} color="#00f5a0" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Sincronización multi-dispositivo en tiempo real:</strong> Controla stands físicos, ventas online y producción en vivo.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#00f5a0' }}>
                <CheckCircle2 size={18} color="#00f5a0" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Ventas con QR dinámicos</strong> y automatización de catálogos interactivos.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
