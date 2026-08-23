import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';

export default function QrDemo() {
  const [text, setText] = useState('https://dekolabs.org');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateQr(text);
  }, [text]);

  const generateQr = async (val) => {
    try {
      if (!val.trim()) {
        setQrDataUrl('');
        return;
      }
      const url = await QRCode.toDataURL(val, {
        width: 300,
        margin: 2,
        color: {
          dark: '#06090e',
          light: '#ffffff'
        }
      });
      setQrDataUrl(url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="qr-tool" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge">
            <QrCode size={14} />
            <span>HERRAMIENTA INTERACTIVA</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Generador de Códigos <span className="text-gradient">QR Dinámicos</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Prueba en vivo una de nuestras micro-herramientas de DeKo Labs. Ingresa cualquier enlace o texto para generar tu código QR listo para imprimir o compartir.
          </p>
        </div>

        <div className="glass-card" style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          {/* Controls */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Enlace o Contenido del QR:
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://tu-sitio.com o número de WhatsApp"
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: '16px'
              }}
            />

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button
                onClick={() => setText('https://dekolabs.org')}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                dekolabs.org
              </button>
              <button
                onClick={() => setText('https://decovintage.online')}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                decovintage.online
              </button>
              <button
                onClick={() => setText('https://wa.me/50200000000?text=Hola%20DeKo%20Labs')}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Link WhatsApp
              </button>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {qrDataUrl && (
                <a
                  href={qrDataUrl}
                  download="dekolabs-qr.png"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Download size={18} />
                  <span>Descargar PNG</span>
                </a>
              )}
              <button
                onClick={handleCopy}
                className="btn-secondary"
                style={{ padding: '12px 18px' }}
                title="Copiar texto"
              >
                {copied ? <Check size={18} color="#00f5a0" /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* QR Display Card */}
          <div style={{
            background: 'rgba(6, 9, 14, 0.8)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {qrDataUrl ? (
              <div style={{
                background: '#fff',
                padding: '16px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 242, 254, 0.2)',
                marginBottom: '14px'
              }}>
                <img
                  src={qrDataUrl}
                  alt="QR Code"
                  style={{ width: '180px', height: '180px', display: 'block' }}
                />
              </div>
            ) : (
              <div style={{ height: '212px', display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                Escribe un enlace para generar el QR
              </div>
            )}

            <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Listo para escaneo móvil
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Alta resolución y contraste optimizado
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
