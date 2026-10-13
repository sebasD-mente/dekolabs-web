import fs from 'fs';
import path from 'path';

/**
 * 📏 [DEKO LABS] Auditor de Monolitos y Regla de Oro Anti-Ravioli
 * 
 * Filosofía:
 * 1. Cohesión de dominio mata a micro-despiece ciego.
 * 2. Dividir un archivo sano únicamente porque supera 200 líneas produce
 *    "código ravioli" (docenas de archivitos huérfanos que rompen mantenibilidad).
 * 3. Se establecen techos idiomáticos por capa y una matriz DOMAIN_CEILINGS
 *    para archivos cohesivos que legítimamente necesitan más espacio.
 */

console.info('📏 [DEKO LABS] Auditando límites de tamaño y deuda monolítica con criterios de dominio...');

const rootDir = process.cwd();
const dirsToScan = ['src', 'server', 'lib', 'app'];

// 🛡️ 1. Techos específicos por archivo con cohesión autorizada
// Si un archivo de dominio transaccional sano crece, se registra aquí con su justificación técnica:
export const DOMAIN_CEILINGS = {
  'src/components/AgentSimulator.jsx': { max: 500, reason: 'Simulador interactivo de agentes de DeKo Labs' },
};

// 🛡️ 2. Techos Idiomáticos por Defecto según Capa Arquitectónica
export const LAYER_DEFAULT_CEILINGS = {
  semantic: 800,      // Diccionarios declarativos, regex y gramáticas estáticas
  services: 500,      // Servicios de dominio transaccional en backend
  routes: 500,        // Manifiestos centrales de enrutamiento
  controllers: 350,   // Controladores HTTP y orquestación REST
  hooks: 350,         // Hooks de estado complejo y contextos React
  validators: 250,    // Esquemas declarativos Zod / Joi
  components: 280,    // Componentes de interfaz de usuario (React, Vue, Svelte)
  default: 350,       // Techo general por defecto
};

function getLayerDefaultCeiling(relativePath) {
  const norm = relativePath.replace(/\\/g, '/');
  if (norm.includes('/semantic/') || norm.includes('/dictionaries/')) return LAYER_DEFAULT_CEILINGS.semantic;
  if (norm.includes('/services/')) return LAYER_DEFAULT_CEILINGS.services;
  if (norm.includes('/controllers/')) return LAYER_DEFAULT_CEILINGS.controllers;
  if (norm.includes('/routes/')) return LAYER_DEFAULT_CEILINGS.routes;
  if (norm.includes('/validators/') || norm.includes('/schemas/')) return LAYER_DEFAULT_CEILINGS.validators;
  if (norm.includes('/hooks/') || norm.includes('/context/')) return LAYER_DEFAULT_CEILINGS.hooks;
  if (norm.includes('/components/')) return LAYER_DEFAULT_CEILINGS.components;
  return LAYER_DEFAULT_CEILINGS.default;
}

function countLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.split('\n').length;
}

const allViolations = [];
const orphanServiceFiles = []; // Alerta anti-ravioli: archivos de servicio < 40 líneas

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      if (!['node_modules', 'dist', 'build', '.git', 'coverage', '.agents', 'tests', 'scripts'].includes(entry.name)) {
        scanDir(fullPath);
      }
    } else if (/\.(js|jsx|ts|tsx|vue|svelte)$/i.test(entry.name)) {
      const lines = countLines(fullPath);
      const isCustomCeiling = DOMAIN_CEILINGS[relPath];
      const maxAllowed = isCustomCeiling ? isCustomCeiling.max : getLayerDefaultCeiling(relPath);

      if (lines > maxAllowed) {
        allViolations.push({
          file: relPath,
          lines,
          max: maxAllowed,
          excess: lines - maxAllowed,
          isCustom: !!isCustomCeiling,
          reason: isCustomCeiling ? isCustomCeiling.reason : 'Límite por capa',
        });
      }

      // Alerta anti-ravioli: Si alguien creó un archivo de servicio minúsculo (<40 líneas) solo para evadir líneas
      if (relPath.includes('/services/') && lines < 40 && !entry.name.includes('index')) {
        orphanServiceFiles.push({ file: relPath, lines });
      }
    }
  }
}

for (const dir of dirsToScan) {
  scanDir(path.join(rootDir, dir));
}

// 1. Mostrar archivos con techos autorizados
const customKeys = Object.keys(DOMAIN_CEILINGS);
if (customKeys.length > 0) {
  console.info('\n🟢 Archivos con Cohesión Autorizada:');
  for (const k of customKeys) {
    const p = path.join(rootDir, k);
    if (fs.existsSync(p)) {
      const lines = countLines(p);
      console.info(`  ✅ ${k} (${lines}/${DOMAIN_CEILINGS[k].max} líneas) — ${DOMAIN_CEILINGS[k].reason}`);
    }
  }
}

// 2. Alertas Anti-Ravioli
if (orphanServiceFiles.length > 0) {
  console.info('\n🍝 Alerta Informativa Anti-Ravioli (Servicios micro-fragmentados <40 líneas):');
  for (const o of orphanServiceFiles) {
    console.info(`  ℹ️ ${o.file} (${o.lines} líneas) — Evaluar si pertenece a un servicio cohesivo mayor.`);
  }
}

// 3. Evaluar violaciones reales
if (allViolations.length > 0) {
  console.error('\n🚨 [DEKO LABS] Archivos que exceden los límites arquitectónicos permitidos:');
  for (const v of allViolations) {
    console.error(`  ❌ ${v.file}: ${v.lines} líneas (Máximo permitido: ${v.max} | Exceso: +${v.excess} líneas)`);
    console.error(`     Regla: ${v.reason}`);
  }
  console.error('\n👉 Protocolo ante excedentes:');
  console.error('   1. Si el archivo mezcla capas (ej. HTML en servicios o SQL en vistas), refactoriza separando responsabilidades.');
  console.error('   2. Si el archivo pertenece 100% a su dominio y no mezcla capas, regístralo con justificación en DOMAIN_CEILINGS.');
  console.error('   3. JAMÁS lo despedaces a ciegas en micro-archivos ravioli.\n');
  process.exit(1);
}

console.info('\n✨ ¡Excelente! Cero archivos exceden sus límites arquitectónicos.');
console.info('💡 Total archivos que exceden su límite: 0\n');
process.exit(0);
