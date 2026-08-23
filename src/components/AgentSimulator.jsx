import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, Check, ArrowRight, Image as ImageIcon, Mic, RefreshCw, Layers } from 'lucide-react';

const PRESET_PROMPTS = [
  {
    id: 1,
    title: "🛍️ Registrar Venta",
    prompt: "Vendí 2 cuadros Grandes a Q125 cada uno y 1 Mini a Q25 por transferencia"
  },
  {
    id: 2,
    title: "📊 Reporte Financiero",
    prompt: "¿Cuál es el resumen de ventas y flujo de caja de hoy en el stand?"
  },
  {
    id: 3,
    title: "📱 Generar QR de Cobro",
    prompt: "Crea un código QR para el catálogo digital con link a WhatsApp"
  }
];

export default function AgentSimulator() {
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: '¡Hola! Soy el Agente Autónomo de DeKo Labs. ¿Qué movimiento de tu negocio deseas registrar hoy?',
      card: null
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (userText) => {
    const text = userText || inputVal;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let response = {
        sender: 'agent',
        text: '',
        card: null
      };

      const lower = text.toLowerCase();

      if (lower.includes('vendí') || lower.includes('venta') || lower.includes('cuadro') || lower.includes('grande')) {
        response.text = '✅ ¡Venta procesada y registrada en el sistema contable en tiempo real!';
        response.card = {
          type: 'sale',
          title: 'Resumen de Transacción #DK-8492',
          items: [
            { name: 'Cuadro Grande (45x60cm)', qty: 2, price: 'Q 250.00' },
            { name: 'Cuadro Mini (14x21cm)', qty: 1, price: 'Q 25.00' }
          ],
          total: 'Q 275.00',
          method: 'Transferencia Bancaria',
          status: 'Inventario y Caja Actualizados'
        };
      } else if (lower.includes('resumen') || lower.includes('reporte') || lower.includes('caja') || lower.includes('stand')) {
        response.text = '📊 Aquí tienes el estado financiero en vivo de tu jornada:';
        response.card = {
          type: 'report',
          title: 'Cierre Parcial - Stand Convención',
          metrics: [
            { label: 'Total Ventas', value: 'Q 1,845.00' },
            { label: 'Unidades Vendidas', value: '18 posters' },
            { label: 'Efectivo en Caja', value: 'Q 920.00' },
            { label: 'Transferencias', value: 'Q 925.00' }
          ]
        };
      } else if (lower.includes('qr') || lower.includes('catalogo') || lower.includes('cobro')) {
        response.text = '📱 Código QR dinámico generado y listo para ser escaneado por tus clientes:';
        response.card = {
          type: 'qr',
          title: 'QR Interactivo Generado',
          link: 'https://decovintage.online/catalogo',
          note: 'Escaneo directo optimizado para móviles'
        };
      } else {
        response.text = `Entendido. He procesado tu solicitud: "${text}". Los datos han sido sincronizados con tu base de datos y panel de gestión.`;
      }

      setMessages([...newMessages, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'agent',
        text: '¡Hola! Soy el Agente Autónomo de DeKo Labs. ¿Qué movimiento de tu negocio deseas registrar hoy?',
        card: null
      }
    ]);
  };

  return (
    <section id="simulador" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge">
            <Sparkles size={14} />
            <span>EXPERIENCIA EN VIVO</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Simulador del <span className="text-gradient">Agente Multimodal</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Prueba cómo interactúa un emprendedor con el ecosistema de DeKo Labs. Escribe en lenguaje común o prueba los ejemplos sugeridos:
          </p>
        </div>

        {/* Simulator Terminal Card */}
        <div className="glass-card" style={{
          maxWidth: '850px',
          margin: '0 auto',
          padding: '0',
          overflow: 'hidden',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.1)'
        }}>
          {/* Terminal Window Header */}
          <div style={{
            background: 'rgba(13, 17, 23, 0.95)',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ marginLeft: '12px', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                dekolabs-ai-agent-v2.0
              </span>
            </div>
            <button
              onClick={handleReset}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
              title="Reiniciar chat"
            >
              <RefreshCw size={14} />
              <span>Reiniciar</span>
            </button>
          </div>

          {/* Chat Body */}
          <div style={{
            padding: '24px',
            minHeight: '340px',
            maxHeight: '440px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background: 'rgba(6, 9, 14, 0.8)'
          }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                {m.sender === 'agent' && (
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--grad-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Bot size={20} color="#06090e" />
                  </div>
                )}

                <div>
                  <div style={{
                    padding: '12px 18px',
                    borderRadius: '16px',
                    background: m.sender === 'user' ? 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)' : 'rgba(22, 27, 34, 0.9)',
                    color: m.sender === 'user' ? '#06090e' : '#f0f6fc',
                    fontWeight: m.sender === 'user' ? 600 : 400,
                    border: m.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.95rem'
                  }}>
                    {m.text}
                  </div>

                  {/* Dynamic Interactive Card rendered by Agent */}
                  {m.card && (
                    <div style={{
                      marginTop: '12px',
                      padding: '16px',
                      borderRadius: '14px',
                      background: 'rgba(13, 17, 23, 0.95)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                    }}>
                      <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Sparkles size={16} />
                        {m.card.title}
                      </div>

                      {m.card.type === 'sale' && (
                        <div>
                          {m.card.items.map((it, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#c9d1d9', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                              <span>{it.qty}x {it.name}</span>
                              <span style={{ fontWeight: 600 }}>{it.price}</span>
                            </div>
                          ))}
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginTop: '8px', paddingTop: '6px', fontSize: '0.95rem', color: '#00f5a0' }}>
                            <span>Total Registrado:</span>
                            <span>{m.card.total}</span>
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                            Método: {m.card.method} • {m.card.status}
                          </div>
                        </div>
                      )}

                      {m.card.type === 'report' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                          {m.card.metrics.map((met, i) => (
                            <div key={i} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px 12px', borderRadius: '8px' }}>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{met.label}</div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{met.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {m.card.type === 'qr' && (
                        <div style={{ textAlign: 'center', padding: '10px' }}>
                          <div style={{
                            display: 'inline-block',
                            padding: '12px',
                            background: '#fff',
                            borderRadius: '10px',
                            marginBottom: '8px'
                          }}>
                            {/* Visual QR Placeholder representation */}
                            <div style={{
                              width: '100px',
                              height: '100px',
                              background: 'repeating-linear-gradient(45deg, #000 0, #000 8px, #fff 8px, #fff 16px)',
                              borderRadius: '4px'
                            }} />
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{m.card.link}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{m.card.note}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                <Bot size={16} className="pulse-dot" />
                <span>DeKo Agent procesando en lenguaje natural...</span>
              </div>
            )}
          </div>

          {/* Preset Prompts Quick Chips */}
          <div style={{
            padding: '12px 20px',
            background: 'rgba(13, 17, 23, 0.95)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto'
          }}>
            {PRESET_PROMPTS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSend(p.prompt)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-secondary)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(0, 242, 254, 0.15)';
                  e.target.style.borderColor = 'var(--accent-cyan)';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div style={{
            padding: '16px 20px',
            background: 'rgba(6, 9, 14, 0.95)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <input
              type="text"
              placeholder="Escribe aquí en lenguaje natural (ej: 'Vendí 3 cuadros hoy...')"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'var(--font-body)'
              }}
            />
            <button
              onClick={() => handleSend()}
              className="btn-primary"
              style={{ padding: '12px 20px' }}
            >
              <Send size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
