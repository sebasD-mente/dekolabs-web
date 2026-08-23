import React, { useState } from 'react';
import { MessageSquare, Mail, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending / whatsapp redirect
    const text = encodeURIComponent(`¡Hola DeKo Labs! Mi nombre es ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" style={{ padding: '90px 0', position: 'relative' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(157, 78, 221, 0.1) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="glass-card" style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '48px',
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(22, 27, 34, 0.8) 100%)',
          border: '1px solid rgba(0, 242, 254, 0.25)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            
            {/* Left Column */}
            <div>
              <div className="badge">
                <Sparkles size={14} />
                <span>IMPULSA TU NEGOCIO</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
                ¿Listo para integrar <span className="text-gradient">Agentes de IA</span> en tu empresa?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Conversemos sobre cómo adaptar el ecosistema de DeKo Labs a tus procesos de venta, catálogos, stands o control de inventarios.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#c9d1d9', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="#00f5a0" />
                  <span>Implementación rápida sin interrumpir tus ventas</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#c9d1d9', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="#00f5a0" />
                  <span>Soporte personalizado de emprendedor a emprendedor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#c9d1d9', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="#00f5a0" />
                  <span>Ecosistema modular que escala con tu negocio</span>
                </div>
              </div>
            </div>

            {/* Right Form / WhatsApp Card */}
            <div style={{
              background: 'rgba(6, 9, 14, 0.7)',
              padding: '32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(0, 245, 160, 0.15)',
                    color: '#00f5a0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>¡Mensaje Iniciado!</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Se ha abierto tu chat para comunicarte directamente con nosotros.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Tu Nombre / Emprendimiento:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Sebastián / Deco Vintage"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        outline: 'none',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      ¿En qué te podemos ayudar?
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Cuéntanos brevemente sobre tu negocio y qué te gustaría automatizar..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        outline: 'none',
                        fontSize: '0.9rem',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  >
                    <MessageSquare size={18} />
                    <span>Iniciar Contacto vía WhatsApp</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
