import {
  ATTRACTION_FULL_NAME,
  CITY_NAME,
  STATE_PROVINCE,
  COUNTRY_NAME,
  COUNTRY_CODE_2LETTER,
  POSTAL_CODE,
  STREET_ADDRESS,
  PLUS_CODE,
  LATITUDE,
  LONGITUDE,
  MAPS_SHARE_URL,
  GOVT_TOURISM_URL
} from '../data/site';
import type { Content } from '../i18n';

/** JSON-LD TouristAttraction + Park. A mesma entidade (#attraction) en todos os idiomas. */
export function attractionSchema(canonical: string, ogImage: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': `${canonical}#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [
      `${CITY_NAME} ${ATTRACTION_FULL_NAME}`,
      'Monte San Pedro',
      `Parque do ${ATTRACTION_FULL_NAME}`,
      `${ATTRACTION_FULL_NAME} (${CITY_NAME})`
    ],
    description: `Visitor guide to ${ATTRACTION_FULL_NAME} in ${CITY_NAME}, ${STATE_PROVINCE}, ${COUNTRY_NAME}: Atlantic viewpoints, the Cúpula Atlántica, Vickers guns, history, access and reviews.`,
    url: canonical,
    image: [ogImage],
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET_ADDRESS,
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER
    },
    geo: { '@type': 'GeoCoordinates', latitude: LATITUDE, longitude: LONGITUDE },
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ]
  };
}

/** JSON-LD FAQPage a partir das FAQ do idioma activo. */
export function faqSchema(faqs: Content['faq']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };
}
