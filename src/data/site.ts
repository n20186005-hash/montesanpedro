/**
 * Datos neutros en idioma do Monte de San Pedro (fact sheet).
 * Cambiando estes valores reutilízase a páxina para outro destino.
 * Os textos traducibles viven en src/i18n.ts; aquí só hai feitos.
 */

export const DOMAIN_NAME = 'montesanpedro.com';

export const ATTRACTION_FULL_NAME = 'Monte de San Pedro';
export const ATTRACTION_SHORT_NAME = 'Monte de San Pedro';

export const CITY_NAME = 'A Coruña';
export const STATE_PROVINCE = 'Galicia';
export const COUNTRY_NAME = 'España';
export const COUNTRY_CODE_2LETTER = 'ES';

export const POSTAL_CODE = '15011';
export const STREET_ADDRESS = 'Estrada Os Fortes, 7';
export const PLUS_CODE = '9HG6+XQ A Coruña';

// Coordenadas de referencia do recinto (fachada atlántica da cidade).
export const LATITUDE = 43.3774825;
export const LONGITUDE = -8.4380656;

export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/m7xw47wWnHsLna2b8';
export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=15&output=embed`;

export const NEARBY_LANDMARK_1 = 'Torre de Hércules';
export const NEARBY_LANDMARK_2 = 'Paseo Marítimo da Coruña';

export const GOVT_TOURISM_URL =
  'https://www.coruna.gal/tourism/en/what-to-do-in-a-coruna/nature-and-sports/parks-and-gardens/mount-san-pedro?argIdioma=es';
export const GOVT_TOURISM_LABEL = 'Turismo da Coruña (portal oficial)';
export const GALICIA_TOURISM_URL = 'https://www.turismo.gal/';
export const TRANVIAS_URL = 'https://tranviascoruna.com/lineas-y-horarios/';
export const COMMONS_URL = 'https://commons.wikimedia.org/';

export const REVIEWS_SYNC_TIME = 'setembro de 2026';

/* Valoración sincronizada coas opinións de usuarios de Google Maps
   (última sincronización: setembro de 2026). Só se mostra na páxina,
   con atribución de orixe; non se envía en JSON-LD. */
export const RATING_VALUE_LABEL = '4,7';
export const RATING_COUNT_LABEL = '12.397';

export const RATING_SOURCE_NOTE = `Valoración e número de opinións sincronizados coas opinións de usuarios de Google Maps · ${REVIEWS_SYNC_TIME}`;
export const REVIEWS_SOURCE_NOTE = `Sincronizadas desde as opinións de usuarios de Google Maps, sincronización: ${REVIEWS_SYNC_TIME}. A autoría e os dereitos pertencen aos seus autores e a Google Maps.`;

/* Fontes linguaxe-neutrais (ligazóns estábeis). O texto descritivo de cada
   fonte tamén é neutro e vive aquí para non duplicalo en cada idioma. */
export const sources = [
  {
    name: `Turismo da Coruña · Concello da Coruña`,
    detail:
      'Descrición histórica do recinto, relación dos atractivos principais e aviso de peche temporal do ascensor panorámico.',
    url: GOVT_TOURISM_URL,
    linkLabel: 'Consultar a fonte oficial'
  },
  {
    name: 'Turismo de Galicia · Xunta de Galicia',
    detail:
      'Portal turístico oficial da comunidade autónoma, con información de contexto sobre a cidade e a costa atlántica galega.',
    url: GALICIA_TOURISM_URL,
    linkLabel: 'Consultar o portal oficial'
  },
  {
    name: 'Compañía de Tranvías da Coruña',
    detail:
      'Liñas e horarios do transporte urbano que serve a contorna de San Pedro de Visma (liñas 3 e 3A).',
    url: TRANVIAS_URL,
    linkLabel: 'Consultar liñas e horarios'
  },
  {
    name: 'Wikimedia Commons',
    detail:
      'Fotografías orixinais do Monte de San Pedro baixo licenzas CC BY-SA 2.0 (Contando Estrelas) e CC BY-SA 4.0 (Diego Delso), con crédito en cada pé de foto.',
    url: COMMONS_URL,
    linkLabel: 'Ver licenzas e autoría'
  },
  {
    name: `Opinións · sincronización: ${REVIEWS_SYNC_TIME}`,
    detail: `Valoracións e opinións sincronizadas desde as opinións de usuarios de Google Maps. A autoría e todos os dereitos sobre as opinións pertencen aos seus autores e a Google Maps.`,
    url: MAPS_SHARE_URL,
    linkLabel: 'Ver todas as opinións en Google Maps'
  }
];

/* Nome SEO por idioma: «atractivo + cidade + guía de visita». */
export const SITE_NAME: Record<'gl' | 'es' | 'en', string> = {
  gl: 'Monte de San Pedro (A Coruña) — Guía de visita',
  es: 'Monte de San Pedro (A Coruña) — Guía de visita',
  en: 'Monte de San Pedro (A Coruña) — Visitor Guide'
};
