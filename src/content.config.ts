/**
 * İçerik modeli: rehberler ayrı yönetilebilir kayıtlardır (src/content/rehberler/*.mdx).
 *
 * Yayın durumu:
 * - taslak:    üretim derlemesine girmez.
 * - inceleme:  sayfa açılır ama aramaya kapalıdır (noindex) ve site haritasında yoktur.
 *              Uzman incelemesi bekleyen içerik bu durumda kalır.
 * - yayinda:   indekslenir. "inceleyen" alanı dolu olmalıdır.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** 'genel': tek bir hizmete bağlı olmayan yazılar (dijital pazarlama, ajans seçimi). */
const hizmet = z.enum(['google-ads', 'meta', 'seo', 'geo', 'web', 'genel']);

const rehberler = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/rehberler' }),
  schema: z.object({
    /** PRD bölüm 8'deki sıra numarası. Ön yüzde gösterilmez; yayın planıyla eşleştirme içindir. */
    no: z.number().int(),
    /** H1: sorunun kendisi. */
    soru: z.string(),
    /** Arama başlığı: sorunun kısa, doğal biçimi (marka eki şablonda eklenir). */
    baslik: z.string(),
    aciklama: z.string().max(170),
    /** Kapak sahnesi: src/assets/blog/<ad>.jpg dosyasının adı (uzantısız). Dizin kartında ve yazının üst alanında görünür. */
    kapak: z.string().optional(),
    kapakAlt: z.string().optional(),
    /** Yazının yanıtladığı aramalar: okurun Google'a yazdığı biçimde, en çok dört ifade. Üst alanda arama kutusu olarak görünür. */
    aramalar: z.array(z.string()).max(4).default([]),
    /** İlk paragraf: soruyu doğrudan yanıtlar. */
    kisaCevap: z.string(),
    /** Okurun eline geçen özgün malzeme (liste sayfasında görünür). */
    elinizeGecen: z.string(),
    hizmetler: z.array(hizmet).min(1),
    /** Hizmet sayfasındaki konuya özgü bölüm. */
    hizmetBaglantisi: z.object({ etiket: z.string(), url: z.string() }),
    /** Bir sonraki soru: başka bir rehberin dosya adı (uzantısız). */
    sonraki: z.string().optional(),
    /** İlgili proje kimliği (src/data/projeler.ts). */
    proje: z.string().optional(),
    /** Yalnız gerçekten görev alan kişiler yazılır. */
    yazar: z.string().optional(),
    inceleyen: z.string().optional(),
    yayinTarihi: z.coerce.date(),
    sonKontrol: z.coerce.date(),
    durum: z.enum(['taslak', 'inceleme', 'yayinda']),
    okumaDk: z.number().int().positive(),
    kaynaklar: z
      .array(
        z.object({
          ad: z.string(),
          url: z.string().url(),
          /** resmi: platformun kendi belgesi. topluluk: kullanıcı sorusu. ornek: aynı konuyu işleyen başka yayın. */
          tur: z.enum(['resmi', 'topluluk', 'ornek']),
        }),
      )
      .default([]),
  }),
});

export const collections = { rehberler };
