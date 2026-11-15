/**
 * Sektör kayıtları. Bu klasöre eklenen her <kimlik>.ts dosyası kendiliğinden listeye girer;
 * sıra, kaydın "sira" alanına göredir. Veri modeli: ./tip.ts
 */
import type { ImageMetadata } from 'astro';
import type { Sektor } from './tip';

const dosyalar = import.meta.glob<{ sektor: Sektor }>(['./*.ts', '!./tip.ts', '!./index.ts'], { eager: true });

export const SEKTORLER: Sektor[] = Object.values(dosyalar)
  .map((d) => d.sektor)
  .filter(Boolean)
  .sort((a, b) => a.sira - b.sira);

export const sektorUrl = (s: Sektor | string) => `/sektorler/${typeof s === 'string' ? s : s.kimlik}/`;

/** Sektör sahneleri: src/assets/sektorler/<kimlik>.jpg */
const sahneler = import.meta.glob<{ default: ImageMetadata }>('../../assets/sektorler/*.jpg', { eager: true });

export const sektorGorseli = (kimlik: string): ImageMetadata => {
  const kayit = sahneler[`../../assets/sektorler/${kimlik}.jpg`];
  if (!kayit) throw new Error(`Sektör görseli bulunamadı: src/assets/sektorler/${kimlik}.jpg`);
  return kayit.default;
};

export type { Sektor } from './tip';
