import React from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, Bot, Layers, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow circle */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(157, 78, 221, 0.05) 50%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Top Badge */}
        <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
          <div className="badge">
            <span className="pulse-dot"></span>
            <span>AHORA LA SOLUCIÓN ES PARA TODOS</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
          fontWeight: '900',
          lineHeight: '1.1',
          marginBottom: '24px',
          letterSpacing: '-0.03em'
        }}>
          Democratizando la <span className="text-gradient">Inteligencia Artificial</span> <br />
          para Emprendedores en Latinoamérica
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '780px',
          margin: '0 auto 36px auto',
          lineHeight: '1.6'
        }}>
          Transformamos la gestión de ventas, compras e inventarios mediante un <strong>ecosistema multiagente multimodal</strong>. Registra y administra todo en lenguaje natural: por fotos, audios o texto.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
          <a href="#simulador" className="btn-primary" style={{ padding: '15px 32px', fontSize: '1rem' }}>
            <Sparkles size={18} />
            <span>Probar Simulador de Agente</span>
            <ArrowRight size={18} />
          </a>
          <a href="#soluciones" className="btn-secondary" style={{ padding: '15px 30px', fontSize: '1rem' }}>
            <Layers size={18} />
            <span>Ver Ecosistema</span>
          </a>
        </div>

        {/* Value Highlights Pill Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-cyan)' }}>
              <Bot size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#fff' }}>Lenguaje Natural</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sin formularios complejos</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(157, 78, 221, 0.1)', color: 'var(--accent-purple)' }}>
              <Zap size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#fff' }}>Multimodalidad Total</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Fotos, audio de voz y chat</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 245, 160, 0.1)', color: 'var(--accent-emerald)' }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#fff' }}>Control Financiero</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Cero invisibilidad de caja</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
