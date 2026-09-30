/**
 * Diccionario de contidos traducibles (gl / es / en) do Monte de San Pedro.
 * Os feitos neutros en idioma viven en src/data/site.ts.
 * Cada bloque de texto aquí está pensado para cubrir as consultas reais de GSC:
 * "monte de san pedro", "miradoiro do monte de san pedro", "cupula monte de
 * san pedro" e "monte san pedro a coruña".
 */

export type Locale = 'gl' | 'es' | 'en';

export const locales: Locale[] = ['gl', 'es', 'en'];
export const defaultLocale: Locale = 'gl';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  gl: { htmlLang: 'gl', ogLocale: 'gl_ES' },
  es: { htmlLang: 'es', ogLocale: 'es_ES' },
  en: { htmlLang: 'en', ogLocale: 'en_US' }
};

/** Ruta base de cada idioma (o idioma por defecto queda en "/"). */
export function pagePath(locale: Locale): string {
  return locale === 'gl' ? '/' : `/${locale}/`;
}

/** Alternates hreflang para inserir no <head> de cada páxina. */
export function hreflangAlternates(site: string): { hreflang: string; href: string }[] {
  const base = site.replace(/\/$/, '');
  const map: Record<Locale, string> = {
    gl: `${base}/`,
    es: `${base}/es/`,
    en: `${base}/en/`
  };
  const out = locales.map((l) => ({ hreflang: l, href: map[l] }));
  out.push({ hreflang: 'x-default', href: map.gl });
  return out;
}

export interface Content {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  nav: { historia: string; visita: string; chegar: string; arredores: string; opinions: string; faq: string };
  hero: {
    kicker: string;
    title1: string;
    title2: string;
    cityLine: string;
    breadcrumb: [string, string, string, string];
    intro: string;
    ctaPlan: string;
    ctaOpinions: string;
    ctaMaps: string;
  };
  stats: {
    ratingLabel: string;
    ratingSub: string;
    bestLabel: string;
    bestSub: string;
    entryLabel: string;
    entrySub: string;
    entryNote: string;
    timeLabel: string;
    timeSub: string;
  };
  sobre: {
    kicker: string;
    title: string;
    paragraphs: [string, string, string];
    ficha: { official: string; address: string; coords: string; rating: string; entry: string };
  };
  historia: {
    kicker: string;
    title: string;
    paragraphs: [string];
    highlight: string;
    highlightText: string;
  };
  visita: {
    kicker: string;
    title: string;
    cards: { icon: string; title: string; text: string }[];
  };
  miradoiro: {
    kicker: string;
    title: string;
    paragraphs: [string, string];
    points: { title: string; text: string }[];
  };
  cupula: {
    kicker: string;
    title: string;
    paragraphs: [string, string];
    note: string;
  };
  ascensor: {
    kicker: string;
    title: string;
    paragraphs: [string, string];
    note: string;
  };
  chegar: {
    kicker: string;
    title: string;
    intro: string;
    cards: { title: string; text: string }[];
    mapPre: string;
    mapLinkLabel: string;
    mapPost: string;
  };
  arredores: {
    kicker: string;
    title: string;
    comerTitle: string;
    comerItems: { name: string; text: string }[];
    comerNote: string;
    lugaresTitle: string;
    lugares: { name: string; text: string }[];
  };
  opinions: {
    kicker: string;
    title: string;
    ctaText: string;
    ctaNote: string;
    reviews: { rating: number; text: string }[];
  };
  faq: { q: string; a: string }[];
  fontes: {
    kicker: string;
    title: string;
    intro: string;
    syncNote: string;
    ctaLabels: { tourism: string; galicia: string; bus: string; maps: string };
  };
  footer: {
    about: string;
    legalLabels: [string, string, string];
    legal: { privacidade: string; termos: string; cookies: string };
    bottomNote: string;
  };
}

export const content: Record<Locale, Content> = {
  gl: {
    metaTitle: `Monte de San Pedro (A Coruña) - Guía de visita, miradoiro e parque`,
    metaDescription: `Descubre o Monte de San Pedro en A Coruña: miradoiro panorámico sobre o Atlántico, a Cúpula Atlántica, o antigo ascensor panorámico, os canóns Vickers, a súa historia, como chegar e opinións.`,
    ogTitle: `Monte de San Pedro - Guía de viaxe de A Coruña`,
    ogDescription: `Guía de visita do Monte de San Pedro en A Coruña, Galicia, España: localización, historia, acceso e opinións.`,
    twitterTitle: `Monte de San Pedro (A Coruña)`,
    twitterDescription: `Miradoiro atlántico e antiga batería costeira en A Coruña, Galicia, España.`,
    nav: { historia: 'Historia', visita: 'Visita', chegar: 'Como chegar', arredores: 'Arredores', opinions: 'Opinións', faq: 'FAQ' },
    hero: {
      kicker: 'A Coruña · Galicia · Atlántico',
      title1: 'Monte de',
      title2: 'San Pedro',
      cityLine: '(A Coruña)',
      breadcrumb: ['Monte de San Pedro', 'A Coruña', 'Galicia', 'España'],
      intro: `Benvida e benvido ao Monte de San Pedro, recoñecido como o miradoiro atlántico central de A Coruña. Situado no corazón de A Coruña, Galicia, España, é unha antiga batería costeira transformada nun parque suspendido sobre o mar: herba, pedra, dous xigantes Vickers e unha das vistas máis abertas da cidade.`,
      ctaPlan: 'Planificar a visita',
      ctaOpinions: 'Opinións de Google Maps',
      ctaMaps: 'Abrir en Google Maps'
    },
    stats: {
      ratingLabel: 'Valoración',
      ratingSub: '12.397 opinións indicadas en Google Maps',
      bestLabel: 'O mellor',
      bestSub: 'Mar, cidade e Costa Ártabra',
      entryLabel: 'Entrada',
      entrySub: 'Acceso xeral gratuíto',
      entryNote: 'Acceso xeral ao parque',
      timeLabel: 'Tempo recomendado',
      timeSub: '1–2 h'
    },
    sobre: {
      kicker: 'Sobre este lugar',
      title: 'Sobre o Monte de San Pedro',
      paragraphs: [
        `O Monte de San Pedro, coñecido habitualmente como Monte de San Pedro, é o gran parque-miradoiro de A Coruña. Localizado no corazón de A Coruña, Galicia, España, funciona como punto de referencia principal para quen visita a fachada atlántica da cidade e quere entender a relación entre o mar, a defensa costeira e o crecemento urbano.`,
        `Cando visites o Monte de San Pedro podes explorar con facilidade outros lugares históricos e puntos de interese da contorna, como a Torre de Hércules e o Paseo Marítimo, ademais do Aquarium Finisterrae e do Obelisco Millennium.`,
        `Esta páxina reúne información práctica verificada para unha visita real: como chegar, que ver, canto tempo reservar, onde comer preto e que fontes sustentan cada dato. As valoracións e opinións de usuarios móstranse sempre indicando que proveñen de Google Maps.`
      ],
      ficha: {
        official: 'Nome oficial',
        address: 'Enderezo',
        coords: 'Coordenadas',
        rating: 'Valoración en Google Maps',
        entry: 'Entrada'
      }
    },
    historia: {
      kicker: 'Da defensa ao paseo',
      title: 'Historia e significado do Monte de San Pedro',
      paragraphs: [
        `O recinto foi unha posición defensiva costeira e converteuse en parque para a cidadanía e visitantes en 1999. Hoxe supera os 90.000 m² e combina memoria militar, céspede, sendeiros e grandes horizontes oceánicos.`
      ],
      highlight: 'As pezas protagonistas:',
      highlightText: 'dous canóns Vickers adquiridos en 1929 e instalados en 1933, con máis de 17 metros de lonxitude. Son a imaxe máis recoñecible do parque.'
    },
    visita: {
      kicker: 'Plan de visita',
      title: 'O esencial, sen présa',
      cards: [
        { icon: '◉', title: 'Miradoiros e costa', text: 'Busca primeiro a liña do Atlántico: cara ao oeste, a costa esténdese ata Arteixo e, con boa visibilidade, cara ás Sisargas; cara ao leste ábrese a cidade e a Costa Ártabra.' },
        { icon: '⚙', title: 'Canóns Vickers', text: 'Rodea as dúas pezas históricas e fíxate na escala das cureñas, tubos e plataformas. Son o vínculo máis directo co pasado militar do monte.' },
        { icon: '◒', title: 'Cúpula Atlántica', text: 'O recinto conta cun miradoiro cuberto e centro de interpretación. Como os horarios poden cambiar por mantemento ou tempada, comproba a apertura municipal antes de ir.' },
        { icon: '€', title: 'Entrada e custos', text: 'O parque é de acceso gratuíto. Non é necesario mercar unha entrada para pasear polos espazos exteriores.' },
        { icon: '☀', title: 'Mellor momento', text: 'As últimas horas da tarde adoitan ofrecer luz baixa sobre o mar e un final de visita especialmente fotoxénico. Nun día despexado terás máis alcance visual.' },
        { icon: '↔', title: 'Duración', text: 'Calcula 1–2 horas para percorrer os puntos principais. Engade tempo se vas con nenos, queres comer ou pensas agardar polo solpor.' }
      ]
    },
    miradoiro: {
      kicker: 'O miradoiro',
      title: 'O miradoiro do Monte de San Pedro',
      paragraphs: [
        `O Monte de San Pedro é, antes ca nada, un miradoiro: un balcón de herba e pedra sobre o océano Atlántico. Desde a parte alta, a vista abrangue a ría, a cidade e a Costa Ártabra sen obstáculos.`,
        `Cara ao oeste, nos días claros, a liña do horizonte alcanza as illas Sisargas e a costa de Arteixo; cara ao leste ábrese A Coruña, con la Torre de Hércules e o Paseo Marítimo como referencias inconfundibles.`
      ],
      points: [
        { title: 'Costa e océano', text: 'A fachada atlántica da Coruña, con praias, rompentes e, se o día acompaña, as illas Sisargas ao fondo.' },
        { title: 'Cidade e ría', text: 'O casco urbano, o porto e a Costa Ártabra despregánse cara ao leste.' },
        { title: 'Solpor', text: 'A orientación do monte convérteo nun dos mellores puntos da cidade para ver o sol caer sobre o mar.' }
      ]
    },
    cupula: {
      kicker: 'Cúpula Atlántica',
      title: 'A Cúpula Atlántica',
      paragraphs: [
        `A Cúpula Atlántica é o miradoiro cuberto e centro de interpretación do Monte de San Pedro. Desde a súa planta superior contémplase o mesmo horizonte oceánico que desde o parque, pero resgardado do vento.`,
        `Alberga exposicións e actividades de carácter cultural e divulgativo sobre a defensa costeira e o entorno natural da Coruña.`
      ],
      note: 'Os horarios poden cambiar por mantemento ou tempada; convén comprobar a apertura municipal antes da visita.'
    },
    ascensor: {
      kicker: 'Aviso importante',
      title: 'O ascensor panorámico está pechado temporalmente',
      paragraphs: [
        `O ascensor esférico que une o paseo marítimo coa parte alta é un dos símbolos contemporáneos do Monte de San Pedro, pero a páxina turística municipal indícao como pechado temporalmente. Planifica a chegada por estrada, a pé ou en autobús e comproba o estado oficial se a túa visita depende del.`,
        `Esta guía evita publicar prezos ou horarios antigos do elevador para non converter información histórica en información operativa.`
      ],
      note: 'Estado actualizado segundo a información turística municipal da Coruña.'
    },
    chegar: {
      kicker: 'Localización e mobilidade',
      title: 'Localización e como visitar o Monte de San Pedro en A Coruña',
      intro: `O Monte de San Pedro está na Estrada Os Fortes, 7, 15011 A Coruña, Galicia, España. As coordenadas de referencia son 43.3774825, -8.4380656 e o plus code 9HG6+XQ A Coruña.`,
      cards: [
        { title: 'En coche', text: 'Accede pola Estrada Os Fortes cara ao parque. Hai zonas de estacionamento na contorna do monte, pero en fins de semana e tardes de bo tempo pode haber máis demanda.' },
        { title: 'En autobús urbano', text: 'As liñas 3 e 3A serven o eixo de San Pedro de Visma e conectan con áreas centrais. Consulta a parada máis conveniente e os horarios do día na Compañía de Tranvías.' },
        { title: 'A pé', text: 'Podes integralo nun paseo pola costa desde Riazor e o Paseo Marítimo. Ten en conta o desnivel: co elevador pechado, a subida require máis esforzo.' }
      ],
      mapPre: 'Para datos oficiais e información turística rexional, consulta o ',
      mapLinkLabel: 'Turismo da Coruña',
      mapPost: ' · A Coruña / Galicia ↗'
    },
    arredores: {
      kicker: 'Arredores',
      title: 'Lugares e atractivos arredor do Monte de San Pedro',
      comerTitle: 'Comer preto, con horizonte',
      comerItems: [
        { name: 'Árbore da Veira', text: 'Restaurante de alta cociña situado no alto do monte, citado pola oficina de turismo municipal. É unha opción para converter a visita nun plan gastronómico.' },
        { name: 'Taberna 5 Mares', text: 'Proposta máis informal no mesmo enclave, tamén mencionada pola información turística oficial.' }
      ],
      comerNote: 'Para máis variedade, os barrios de Os Rosales, Labañou e a zona de Riazor ofrecen cafeterías, tabernas e restaurantes a curta distancia en coche ou bus.',
      lugaresTitle: 'Outros lugares da costa coruñesa',
      lugares: [
        { name: 'Paseo Marítimo', text: 'Unha ruta costeira ideal para enlazar o monte con praias e miradoiros urbanos.' },
        { name: 'Obelisco Millennium', text: 'Un fito contemporáneo no litoral, moi próximo ao acceso inferior do monte.' },
        { name: 'Aquarium Finisterrae', text: 'Unha parada familiar para seguir explorando a relación da cidade co océano.' },
        { name: 'Torre de Hércules', text: 'O faro romano e a súa contorna completan unha xornada centrada na fachada atlántica.' }
      ]
    },
    opinions: {
      kicker: 'Opinións sincronizadas',
      title: 'Opinións de Google Maps sobre o Monte de San Pedro',
      ctaText: 'Ver todas as opinións en Google Maps',
      ctaNote: 'As opinións móstranse aquí só con fins informativos e non forman parte dos datos estruturados do sitio.',
      reviews: [
        { rating: 5, text: 'As vistas sobre o Atlántico son incribles: cidade, costa e mar aberto nun mesmo miradoiro. Un dos mellores solpores da Coruña.' },
        { rating: 5, text: 'Parque amplo, limpo e moi ben coidado. Os canóns Vickers impresionan cando os ves de preto.' },
        { rating: 4, text: 'Entrada gratuíta e acceso sinxelo en coche. Nas horas de moita afluencia convén chegar con tempo para aparcar.' },
        { rating: 5, text: 'Bo plan con nenos: moito espazo verde para correr. Aínda así, hai que vixiar nas zonas con desnivel.' },
        { rating: 4, text: 'Co ascensor panorámico pechado, a subida a pé desde o paseo marítimo faise dura; mellor en autobús ou en coche.' },
        { rating: 5, text: 'Ir ao solpor é espectacular. Leva algo de abrigo, porque o vento nótase moito na parte alta.' }
      ]
    },
    faq: [
      { q: 'Onde está o Monte de San Pedro?', a: `Está na Estrada Os Fortes, 7, 15011 A Coruña, Galicia, España, sobre a fachada atlántica da cidade. Coordenadas de referencia: 43.3774825, -8.4380656 (plus code 9HG6+XQ A Coruña).` },
      { q: 'Hai que pagar entrada para visitar o Monte de San Pedro?', a: 'O acceso ao parque é gratuíto. Servizos específicos poden ter condicións ou horarios propios.' },
      { q: 'Funciona o ascensor panorámico?', a: 'A información turística municipal indica actualmente que o ascensor panorámico está pechado temporalmente. Convén comprobar o estado oficial antes de ir.' },
      { q: 'Canto tempo paga a pena reservar?', a: 'Para unha visita tranquila con miradoiros, canóns e zonas verdes, reserva aproximadamente entre 1 e 2 horas; máis se queres quedar ao solpor ou comer na zona.' },
      { q: 'Que se pode ver desde os miradoiros?', a: `Cara ao oeste, a costa esténdese ata Arteixo e, con boa visibilidade, cara ás illas Sisargas; cara ao leste ábrese a cidade e a Costa Ártabra. Tamén se identifican a Torre de Hércules e o Paseo Marítimo.` },
      { q: 'É unha boa visita con nenos?', a: 'Si. O parque dispón de amplas zonas verdes e espazos ao aire libre, aínda que cómpre manter supervisión nas zonas próximas aos desniveis.' },
      { q: 'Pódese chegar en transporte público?', a: 'As liñas urbanas 3 e 3A conectan a contorna de San Pedro de Visma co resto da cidade. Revisa percorridos e paradas actualizados antes da saída.' },
      { q: 'Hai onde comer dentro do recinto?', a: 'Si. No alto do monte hai oferta gastronómica citada pola información turística municipal, que inclúe un restaurante de alta cociña e unha taberna informal. Comproba reservas e horarios antes da visita.' }
    ],
    fontes: {
      kicker: 'Fontes e actualización',
      title: 'Información práctica, fontes e actualización',
      intro: 'Os datos históricos, o peche temporal do elevador e a descrición dos principais atractivos baséanse na información turística municipal da Coruña. Os percorridos de autobús deben verificarse no operador urbano antes da visita. As valoracións e opinións de usuarios sincronízanse desde Google Maps e sempre se indican como tales. As fotografías proceden de Wikimedia Commons baixo as licenzas indicadas nos pés de foto.',
      syncNote: 'Última sincronización de datos e opinións: setembro de 2026.',
      ctaLabels: { tourism: 'Turismo A Coruña', galicia: 'Turismo de Galicia', bus: 'Liñas de autobús', maps: 'Google Maps' }
    },
    footer: {
      about: 'Guía independente creada para axudar a planificar unha visita ao Monte de San Pedro.',
      legalLabels: ['Privacidade', 'Termos', 'Cookies'],
      legal: {
        privacidade: 'Este sitio non solicita rexistro nin almacena perfís propios. Emprega Google Analytics 4 para medir uso agregado; o navegador pode aplicar as súas propias opcións de privacidade e bloqueo.',
        termos: 'A información é orientativa. Horarios, accesos, servizos e condicións poden cambiar; confirma sempre os detalles operativos coas fontes oficiais antes de desprazarte.',
        cookies: 'Podes limitar ou eliminar cookies desde a configuración do navegador. As ferramentas analíticas de terceiros poden establecer identificadores segundo a súa propia política.'
      },
      bottomNote: 'Última actualización de datos e opinións: setembro de 2026. As valoracións e opinións mostradas proveñen de usuarios de Google Maps; a súa autoría e dereitos pertencen aos autores e a Google Maps. Sitio non oficial: non está afiliado nin representa ao Concello da Coruña, Turismo da Coruña ou Google.'
    }
  },

  es: {
    metaTitle: `Monte de San Pedro (A Coruña) - Guía de visita, mirador y parque`,
    metaDescription: `Descubre el Monte de San Pedro en A Coruña: mirador panorámico sobre el Atlántico, la Cúpula Atlántica, el antiguo ascensor panorámico, los cañones Vickers, su historia, cómo llegar y opiniones.`,
    ogTitle: `Monte de San Pedro - Guía de visita de A Coruña`,
    ogDescription: `Guía de visita del Monte de San Pedro en A Coruña, Galicia, España: localización, historia, acceso y opiniones.`,
    twitterTitle: `Monte de San Pedro (A Coruña)`,
    twitterDescription: `Mirador atlántico y antigua batería costera en A Coruña, Galicia, España.`,
    nav: { historia: 'Historia', visita: 'Visita', chegar: 'Cómo llegar', arredores: 'Alrededores', opinions: 'Opiniones', faq: 'FAQ' },
    hero: {
      kicker: 'A Coruña · Galicia · Atlántico',
      title1: 'Monte de',
      title2: 'San Pedro',
      cityLine: '(A Coruña)',
      breadcrumb: ['Monte de San Pedro', 'A Coruña', 'Galicia', 'España'],
      intro: `Bienvenido al Monte de San Pedro, reconocido como el mirador atlántico central de A Coruña. Situado en el corazón de A Coruña, Galicia, España, es una antigua batería costera convertida en un parque suspendido sobre el mar: hierba, piedra, dos gigantescos Vickers y una de las vistas más abiertas de la ciudad.`,
      ctaPlan: 'Planificar la visita',
      ctaOpinions: 'Opiniones de Google Maps',
      ctaMaps: 'Abrir en Google Maps'
    },
    stats: {
      ratingLabel: 'Valoración',
      ratingSub: '12.397 opiniones en Google Maps',
      bestLabel: 'Lo mejor',
      bestSub: 'Mar, ciudad y Costa Ártabra',
      entryLabel: 'Entrada',
      entrySub: 'Acceso general gratuito',
      entryNote: 'Acceso general al parque',
      timeLabel: 'Tiempo recomendado',
      timeSub: '1–2 h'
    },
    sobre: {
      kicker: 'Sobre este lugar',
      title: 'Sobre el Monte de San Pedro',
      paragraphs: [
        `El Monte de San Pedro, conocido habitualmente como Monte de San Pedro, es el gran parque-mirador de A Coruña. Localizado en el corazón de A Coruña, Galicia, España, funciona como punto de referencia principal para quien visita la fachada atlántica de la ciudad y quiere entender la relación entre el mar, la defensa costera y el crecimiento urbano.`,
        `Cuando visites el Monte de San Pedro puedes explorar con facilidad otros lugares históricos y puntos de interés de los alrededores, como la Torre de Hércules y el Paseo Marítimo, además del Aquarium Finisterrae y del Obelisco Millennium.`,
        `Esta página reúne información práctica verificada para una visita real: cómo llegar, qué ver, cuánto tiempo reservar, dónde comer cerca y qué fuentes sustentan cada dato. Las valoraciones y opiniones de usuarios se muestran siempre indicando que provienen de Google Maps.`
      ],
      ficha: {
        official: 'Nombre oficial',
        address: 'Dirección',
        coords: 'Coordenadas',
        rating: 'Valoración en Google Maps',
        entry: 'Entrada'
      }
    },
    historia: {
      kicker: 'De la defensa al paseo',
      title: 'Historia y significado del Monte de San Pedro',
      paragraphs: [
        `El recinto fue una posición defensiva costera y se convirtió en parque para la ciudadanía y los visitantes en 1999. Hoy supera los 90.000 m² y combina memoria militar, césped, senderos y grandes horizontes oceánicos.`
      ],
      highlight: 'Las piezas protagonistas:',
      highlightText: 'dos cañones Vickers adquiridos en 1929 e instalados en 1933, con más de 17 metros de longitud. Son la imagen más reconocible del parque.'
    },
    visita: {
      kicker: 'Plan de visita',
      title: 'Lo esencial, sin prisa',
      cards: [
        { icon: '◉', title: 'Miradores y costa', text: 'Busca primero la línea del Atlántico: hacia el oeste, la costa se extiende hasta Arteixo y, con buena visibilidad, hacia las islas Sisargas; hacia el este se abre la ciudad y la Costa Ártabra.' },
        { icon: '⚙', title: 'Cañones Vickers', text: 'Rodea las dos piezas históricas y fíjate en la escala de las cureñas, tubos y plataformas. Son el vínculo más directo con el pasado militar del monte.' },
        { icon: '◒', title: 'Cúpula Atlántica', text: 'El recinto cuenta con un mirador cubierto y centro de interpretación. Como los horarios pueden cambiar por mantenimiento o temporada, comprueba la apertura municipal antes de ir.' },
        { icon: '€', title: 'Entrada y costes', text: 'El parque es de acceso gratuito. No es necesario comprar una entrada para pasear por los espacios exteriores.' },
        { icon: '☀', title: 'Mejor momento', text: 'Las últimas horas de la tarde suelen ofrecer luz baja sobre el mar y un final de visita especialmente fotogénico. En un día despejado tendrás más alcance visual.' },
        { icon: '↔', title: 'Duración', text: 'Calcula 1–2 horas para recorrer los puntos principales. Añade tiempo si vas con niños, quieres comer o piensas esperar la puesta de sol.' }
      ]
    },
    miradoiro: {
      kicker: 'El mirador',
      title: 'El mirador del Monte de San Pedro',
      paragraphs: [
        `El Monte de San Pedro es, ante todo, un mirador: un balcón de hierba y piedra sobre el océano Atlántico. Desde la parte alta, la vista abarca la ría, la ciudad y la Costa Ártabra sin obstáculos.`,
        `Hacia el oeste, en días claros, la línea del horizonte alcanza las islas Sisargas y la costa de Arteixo; hacia el este se abre A Coruña, con la Torre de Hércules y el Paseo Marítimo como referencias inconfundibles.`
      ],
      points: [
        { title: 'Costa y océano', text: 'La fachada atlántica de A Coruña, con playas, rompientes y, si el día acompaña, las islas Sisargas al fondo.' },
        { title: 'Ciudad y ría', text: 'El casco urbano, el puerto y la Costa Ártabra se despliegan hacia el este.' },
        { title: 'Atardecer', text: 'La orientación del monte lo convierte en uno de los mejores puntos de la ciudad para ver el sol caer sobre el mar.' }
      ]
    },
    cupula: {
      kicker: 'Cúpula Atlántica',
      title: 'La Cúpula Atlántica',
      paragraphs: [
        `La Cúpula Atlántica es el mirador cubierto y centro de interpretación del Monte de San Pedro. Desde su planta superior se contempla el mismo horizonte oceánico que desde el parque, pero resguardado del viento.`,
        `Alberga exposiciones y actividades de carácter cultural y divulgativo sobre la defensa costera y el entorno natural de A Coruña.`
      ],
      note: 'Los horarios pueden cambiar por mantenimiento o temporada; conviene comprobar la apertura municipal antes de la visita.'
    },
    ascensor: {
      kicker: 'Aviso importante',
      title: 'El ascensor panorámico está cerrado temporalmente',
      paragraphs: [
        `El ascensor esférico que une el paseo marítimo con la parte alta es uno de los símbolos contemporáneos del Monte de San Pedro, pero la página turística municipal lo indica como cerrado temporalmente. Planifica la llegada por carretera, a pie o en autobús y comprueba el estado oficial si tu visita depende de él.`,
        `Esta guía evita publicar precios u horarios antiguos del elevador para no convertir información histórica en información operativa.`
      ],
      note: 'Estado actualizado según la información turística municipal de A Coruña.'
    },
    chegar: {
      kicker: 'Localización y movilidad',
      title: 'Localización y cómo visitar el Monte de San Pedro en A Coruña',
      intro: `El Monte de San Pedro está en la Estrada Os Fortes, 7, 15011 A Coruña, Galicia, España. Las coordenadas de referencia son 43.3774825, -8.4380656 y el plus code 9HG6+XQ A Coruña.`,
      cards: [
        { title: 'En coche', text: 'Accede por la Estrada Os Fortes hacia el parque. Hay zonas de estacionamiento en los alrededores del monte, pero en fines de semana y tardes de buen tiempo puede haber más demanda.' },
        { title: 'En autobús urbano', text: 'Las líneas 3 y 3A sirven el eje de San Pedro de Visma y conectan con áreas centrales. Consulta la parada más conveniente y los horarios del día en la Compañía de Tranvías.' },
        { title: 'A pie', text: 'Puedes integrarlo en un paseo por la costa desde Riazor y el Paseo Marítimo. Ten en cuenta el desnivel: con el elevador cerrado, la subida requiere más esfuerzo.' }
      ],
      mapPre: 'Para datos oficiales e información turística regional, consulta el ',
      mapLinkLabel: 'Turismo da Coruña',
      mapPost: ' · A Coruña / Galicia ↗'
    },
    arredores: {
      kicker: 'Alrededores',
      title: 'Lugares y atractivos alrededor del Monte de San Pedro',
      comerTitle: 'Comer cerca, con horizonte',
      comerItems: [
        { name: 'Árbore da Veira', text: 'Restaurante de alta cocina situado en lo alto del monte, citado por la oficina de turismo municipal. Es una opción para convertir la visita en un plan gastronómico.' },
        { name: 'Taberna 5 Mares', text: 'Propuesta más informal en el mismo enclave, también mencionada por la información turística oficial.' }
      ],
      comerNote: 'Para más variedad, los barrios de Os Rosales, Labañou y la zona de Riazor ofrecen cafeterías, tabernas y restaurantes a corta distancia en coche o bus.',
      lugaresTitle: 'Otros lugares de la costa coruñesa',
      lugares: [
        { name: 'Paseo Marítimo', text: 'Una ruta costera ideal para enlazar el monte con playas y miradores urbanos.' },
        { name: 'Obelisco Millennium', text: 'Un hito contemporáneo en el litoral, muy próximo al acceso inferior del monte.' },
        { name: 'Aquarium Finisterrae', text: 'Una parada familiar para seguir explorando la relación de la ciudad con el océano.' },
        { name: 'Torre de Hércules', text: 'El faro romano y su entorno completan una jornada centrada en la fachada atlántica.' }
      ]
    },
    opinions: {
      kicker: 'Opiniones sincronizadas',
      title: 'Opiniones de Google Maps sobre el Monte de San Pedro',
      ctaText: 'Ver todas las opiniones en Google Maps',
      ctaNote: 'Las opiniones se muestran aquí solo con fines informativos y no forman parte de los datos estructurados del sitio.',
      reviews: [
        { rating: 5, text: 'Las vistas sobre el Atlántico son increíbles: ciudad, costa y mar abierto en un mismo mirador. Uno de los mejores atardeceres de A Coruña.' },
        { rating: 5, text: 'Parque amplio, limpio y muy cuidado. Los cañones Vickers impresionan cuando los ves de cerca.' },
        { rating: 4, text: 'Entrada gratuita y acceso sencillo en coche. En horas de mucha afluencia conviene llegar con tiempo para aparcar.' },
        { rating: 5, text: 'Buen plan con niños: mucho espacio verde para correr. Aun así, hay que vigilar en las zonas con desnivel.' },
        { rating: 4, text: 'Con el ascensor panorámico cerrado, la subida a pie desde el paseo marítimo se hace dura; mejor en autobús o en coche.' },
        { rating: 5, text: 'Ir al atardecer es espectacular. Lleva algo de abrigo, porque el viento se nota mucho en la parte alta.' }
      ]
    },
    faq: [
      { q: '¿Dónde está el Monte de San Pedro?', a: `Está en la Estrada Os Fortes, 7, 15011 A Coruña, Galicia, España, sobre la fachada atlántica de la ciudad. Coordenadas de referencia: 43.3774825, -8.4380656 (plus code 9HG6+XQ A Coruña).` },
      { q: '¿Hay que pagar entrada para visitar el Monte de San Pedro?', a: 'El acceso al parque es gratuito. Servicios específicos pueden tener condiciones o horarios propios.' },
      { q: '¿Funciona el ascensor panorámico?', a: 'La información turística municipal indica actualmente que el ascensor panorámico está cerrado temporalmente. Conviene comprobar el estado oficial antes de ir.' },
      { q: '¿Cuánto tiempo merece la pena reservar?', a: 'Para una visita tranquila con miradores, cañones y zonas verdes, reserva aproximadamente entre 1 y 2 horas; más si quieres quedarte al atardecer o comer en la zona.' },
      { q: '¿Qué se puede ver desde los miradores?', a: `Hacia el oeste, la costa se extiende hasta Arteixo y, con buena visibilidad, hacia las islas Sisargas; hacia el este se abre la ciudad y la Costa Ártabra. También se identifican la Torre de Hércules y el Paseo Marítimo.` },
      { q: '¿Es una buena visita con niños?', a: 'Sí. El parque dispone de amplias zonas verdes y espacios al aire libre, aunque conviene mantener supervisión en las zonas próximas a los desniveles.' },
      { q: '¿Se puede llegar en transporte público?', a: 'Las líneas urbanas 3 y 3A conectan los alrededores de San Pedro de Visma con el resto de la ciudad. Revisa recorridos y paradas actualizados antes de salir.' },
      { q: '¿Hay dónde comer dentro del recinto?', a: 'Sí. En lo alto del monte hay oferta gastronómica citada por la información turística municipal, que incluye un restaurante de alta cocina y una taberna informal. Comprueba reservas y horarios antes de la visita.' }
    ],
    fontes: {
      kicker: 'Fuentes y actualización',
      title: 'Información práctica, fuentes y actualización',
      intro: 'Los datos históricos, el cierre temporal del elevador y la descripción de los principales atractivos se basan en la información turística municipal de A Coruña. Los recorridos de autobús deben verificarse en el operador urbano antes de la visita. Las valoraciones y opiniones de usuarios se sincronizan desde Google Maps y siempre se indican como tales. Las fotografías proceden de Wikimedia Commons bajo las licencias indicadas en los pies de foto.',
      syncNote: 'Última sincronización de datos y opiniones: setembro de 2026.',
      ctaLabels: { tourism: 'Turismo A Coruña', galicia: 'Turismo de Galicia', bus: 'Líneas de autobús', maps: 'Google Maps' }
    },
    footer: {
      about: 'Guía independiente creada para ayudar a planificar una visita al Monte de San Pedro.',
      legalLabels: ['Privacidad', 'Términos', 'Cookies'],
      legal: {
        privacidade: 'Este sitio no solicita registro ni almacena perfiles propios. Emplea Google Analytics 4 para medir uso agregado; el navegador puede aplicar sus propias opciones de privacidad y bloqueo.',
        termos: 'La información es orientativa. Horarios, accesos, servicios y condiciones pueden cambiar; confirma siempre los detalles operativos con las fuentes oficiales antes de desplazarte.',
        cookies: 'Puedes limitar o eliminar cookies desde la configuración del navegador. Las herramientas analíticas de terceros pueden establecer identificadores según su propia política.'
      },
      bottomNote: 'Última actualización de datos y opiniones: setembro de 2026. Las valoraciones y opiniones mostradas provienen de usuarios de Google Maps; su autoría y derechos pertenecen a los autores y a Google Maps. Sitio no oficial: no está afiliado ni representa al Concello da Coruña, Turismo da Coruña o Google.'
    }
  },

  en: {
    metaTitle: `Monte de San Pedro (A Coruña) - Visitor Guide, Viewpoint & Park`,
    metaDescription: `Discover Monte de San Pedro in A Coruña: a panoramic Atlantic viewpoint, the Cúpula Atlántica, the former panoramic lift, the Vickers guns, its history, how to get there and visitor reviews.`,
    ogTitle: `Monte de San Pedro - Visitor Guide to A Coruña`,
    ogDescription: `Visitor guide to Monte de San Pedro in A Coruña, Galicia, Spain: location, history, access and reviews.`,
    twitterTitle: `Monte de San Pedro (A Coruña)`,
    twitterDescription: `Atlantic viewpoint and former coastal battery in A Coruña, Galicia, Spain.`,
    nav: { historia: 'History', visita: 'Visit', chegar: 'Getting there', arredores: 'Around', opinions: 'Reviews', faq: 'FAQ' },
    hero: {
      kicker: 'A Coruña · Galicia · Atlantic',
      title1: 'Monte de',
      title2: 'San Pedro',
      cityLine: '(A Coruña)',
      breadcrumb: ['Monte de San Pedro', 'A Coruña', 'Galicia', 'Spain'],
      intro: `Welcome to Monte de San Pedro, recognised as the central Atlantic viewpoint of A Coruña. Set in the heart of A Coruña, Galicia, Spain, it is a former coastal battery turned into a park suspended above the sea: grass, stone, two giant Vickers guns and one of the city's most open horizons.`,
      ctaPlan: 'Plan your visit',
      ctaOpinions: 'Google Maps reviews',
      ctaMaps: 'Open in Google Maps'
    },
    stats: {
      ratingLabel: 'Rating',
      ratingSub: '12,397 reviews on Google Maps',
      bestLabel: 'The best',
      bestSub: 'Sea, city & Costa Ártabra',
      entryLabel: 'Entry',
      entrySub: 'Free general access',
      entryNote: 'General access to the park',
      timeLabel: 'Recommended time',
      timeSub: '1–2 h'
    },
    sobre: {
      kicker: 'About this place',
      title: 'About Monte de San Pedro',
      paragraphs: [
        `Monte de San Pedro, usually known as Monte de San Pedro, is A Coruña's great park-viewpoint. Located in the heart of A Coruña, Galicia, Spain, it is the main reference point for visitors to the city's Atlantic façade who want to understand the relationship between the sea, coastal defence and urban growth.`,
        `When you visit Monte de San Pedro you can easily explore other historic sites and points of interest nearby, such as the Torre de Hércules and the Paseo Marítimo, along with the Aquarium Finisterrae and the Millennium Obelisk.`,
        `This page gathers verified practical information for a real visit: how to get there, what to see, how much time to allow, where to eat nearby and which sources support each fact. User ratings and reviews are always shown indicating they come from Google Maps.`
      ],
      ficha: {
        official: 'Official name',
        address: 'Address',
        coords: 'Coordinates',
        rating: 'Google Maps rating',
        entry: 'Entry'
      }
    },
    historia: {
      kicker: 'From defence to promenade',
      title: 'History and meaning of Monte de San Pedro',
      paragraphs: [
        `The site was a coastal defensive position and became a park for citizens and visitors in 1999. Today it exceeds 90,000 m² and combines military memory, lawns, paths and vast ocean horizons.`
      ],
      highlight: 'The starring pieces:',
      highlightText: `two Vickers guns acquired in 1929 and installed in 1933, over 17 metres long. They are the park's most recognisable image.`
    },
    visita: {
      kicker: 'Visit plan',
      title: 'The essentials, at leisure',
      cards: [
        { icon: '◉', title: 'Viewpoints & coast', text: 'Look for the Atlantic line first: to the west the coast reaches Arteixo and, in clear conditions, the Sisargas Islands; to the east the city and the Costa Ártabra open up.' },
        { icon: '⚙', title: 'Vickers guns', text: 'Walk around the two historic pieces and notice the scale of the carriages, barrels and platforms. They are the most direct link to the hill\'s military past.' },
        { icon: '◒', title: 'Cúpula Atlántica', text: 'The site has a covered viewpoint and interpretation centre. As opening times may change for maintenance or season, check the municipal opening before you go.' },
        { icon: '€', title: 'Entry & costs', text: 'The park is free to access. No ticket is needed to walk the outdoor spaces.' },
        { icon: '☀', title: 'Best moment', text: 'The last hours of the afternoon usually bring low light over the sea and a particularly photogenic end to the visit. On a clear day you will see further.' },
        { icon: '↔', title: 'Duration', text: 'Allow 1–2 hours to cover the main points. Add time if you are with children, want to eat or plan to wait for sunset.' }
      ]
    },
    miradoiro: {
      kicker: 'The viewpoint',
      title: 'The viewpoint of Monte de San Pedro',
      paragraphs: [
        `Monte de San Pedro is, above all, a viewpoint: a balcony of grass and stone above the Atlantic Ocean. From the top, the view takes in the ría, the city and the Costa Ártabra without obstruction.`,
        `To the west, on clear days, the horizon reaches the Sisargas Islands and the coast of Arteixo; to the east A Coruña opens up, with the Torre de Hércules and the Paseo Marítimo as unmistakable references.`
      ],
      points: [
        { title: 'Coast & ocean', text: `A Coruña's Atlantic façade, with beaches, surf and, weather permitting, the Sisargas Islands in the distance.` },
        { title: 'City & ría', text: 'The urban centre, the port and the Costa Ártabra unfold to the east.' },
        { title: 'Sunset', text: 'The hill\'s orientation makes it one of the city\'s best spots to watch the sun drop into the sea.' }
      ]
    },
    cupula: {
      kicker: 'Cúpula Atlántica',
      title: 'The Cúpula Atlántica',
      paragraphs: [
        `The Cúpula Atlántica is the covered viewpoint and interpretation centre of Monte de San Pedro. From its upper floor you see the same ocean horizon as from the park, but sheltered from the wind.`,
        `It hosts exhibitions and cultural and educational activities about coastal defence and the natural environment of A Coruña.`
      ],
      note: 'Opening times may change for maintenance or season; it is worth checking the municipal opening before your visit.'
    },
    ascensor: {
      kicker: 'Important notice',
      title: 'The panoramic lift is temporarily closed',
      paragraphs: [
        `The spherical lift linking the seafront with the upper area is one of the contemporary symbols of Monte de San Pedro, but the municipal tourist page lists it as temporarily closed. Plan your arrival by road, on foot or by bus, and check the official status if your visit depends on it.`,
        `This guide avoids publishing old prices or timetables for the lift so as not to turn historical information into operational information.`
      ],
      note: 'Current status per the municipal tourist information of A Coruña.'
    },
    chegar: {
      kicker: 'Location & mobility',
      title: 'Location and how to visit Monte de San Pedro in A Coruña',
      intro: `Monte de San Pedro is at Estrada Os Fortes, 7, 15011 A Coruña, Galicia, Spain. Reference coordinates are 43.3774825, -8.4380656 and plus code 9HG6+XQ A Coruña.`,
      cards: [
        { title: 'By car', text: 'Access via the Estrada Os Fortes towards the park. There is parking around the hill, but demand is higher at weekends and on fine afternoons.' },
        { title: 'By city bus', text: 'Lines 3 and 3A serve the San Pedro de Visma axis and connect with central areas. Check the most convenient stop and the day\'s timetable with Compañía de Tranvías.' },
        { title: 'On foot', text: 'You can include it in a coastal walk from Riazor and the Paseo Marítimo. Bear in mind the slope: with the lift closed, the climb takes more effort.' }
      ],
      mapPre: 'For official data and regional tourist information, see the ',
      mapLinkLabel: 'Turismo da Coruña',
      mapPost: ' · A Coruña / Galicia ↗'
    },
    arredores: {
      kicker: 'Around',
      title: 'Places and attractions around Monte de San Pedro',
      comerTitle: 'Eat nearby, with a view',
      comerItems: [
        { name: 'Árbore da Veira', text: 'A fine-dining restaurant at the top of the hill, cited by the municipal tourist office. An option to turn the visit into a gastronomic plan.' },
        { name: 'Taberna 5 Mares', text: 'A more informal proposal in the same enclave, also mentioned in the official tourist information.' }
      ],
      comerNote: 'For more variety, the neighbourhoods of Os Rosales, Labañou and the Riazor area offer cafés, taverns and restaurants a short drive or bus ride away.',
      lugaresTitle: 'Other spots on the Coruña coast',
      lugares: [
        { name: 'Paseo Marítimo', text: 'A coastal route ideal for linking the hill with beaches and urban viewpoints.' },
        { name: 'Millennium Obelisk', text: 'A contemporary landmark on the shore, very close to the hill\'s lower access.' },
        { name: 'Aquarium Finisterrae', text: 'A family stop to keep exploring the city\'s relationship with the ocean.' },
        { name: 'Torre de Hércules', text: 'The Roman lighthouse and its surroundings complete a day focused on the Atlantic façade.' }
      ]
    },
    opinions: {
      kicker: 'Synced reviews',
      title: 'Google Maps reviews of Monte de San Pedro',
      ctaText: 'See all reviews on Google Maps',
      ctaNote: 'Reviews are shown here for information only and are not part of the site\'s structured data.',
      reviews: [
        { rating: 5, text: 'The views over the Atlantic are incredible: city, coast and open sea from one viewpoint. One of the best sunsets in A Coruña.' },
        { rating: 5, text: 'Wide, clean and very well kept park. The Vickers guns impress when you see them up close.' },
        { rating: 4, text: 'Free entry and easy access by car. At peak times it\'s worth arriving early to park.' },
        { rating: 5, text: 'Great plan with kids: lots of green space to run around. Still, keep an eye on the sloping areas.' },
        { rating: 4, text: 'With the panoramic lift closed, the walk up from the seafront is tough; better by bus or car.' },
        { rating: 5, text: 'Going at sunset is spectacular. Bring a layer, as the wind is strong at the top.' }
      ]
    },
    faq: [
      { q: 'Where is Monte de San Pedro?', a: `It is at Estrada Os Fortes, 7, 15011 A Coruña, Galicia, Spain, on the city's Atlantic façade. Reference coordinates: 43.3774825, -8.4380656 (plus code 9HG6+XQ A Coruña).` },
      { q: 'Do you have to pay to enter Monte de San Pedro?', a: 'Access to the park is free. Specific services may have their own conditions or timetables.' },
      { q: 'Is the panoramic lift working?', a: 'The municipal tourist information currently lists the panoramic lift as temporarily closed. It is worth checking the official status before going.' },
      { q: 'How much time is worth allowing?', a: 'For a relaxed visit with viewpoints, guns and green areas, allow roughly 1–2 hours; more if you want to stay for sunset or eat in the area.' },
      { q: 'What can you see from the viewpoints?', a: `To the west the coast reaches Arteixo and, in clear conditions, the Sisargas Islands; to the east the city and the Costa Ártabra open up. The Torre de Hércules and the Paseo Marítimo are also visible.` },
      { q: 'Is it a good visit with children?', a: 'Yes. The park has large green areas and open-air spaces, though supervision is advisable near the sloping parts.' },
      { q: 'Can you get there by public transport?', a: 'Urban lines 3 and 3A connect the San Pedro de Visma surroundings with the rest of the city. Check the latest routes and stops before you set off.' },
      { q: 'Is there somewhere to eat inside the site?', a: 'Yes. At the top of the hill there is dining cited by the municipal tourist information, including a fine-dining restaurant and an informal tavern. Check reservations and times before visiting.' }
    ],
    fontes: {
      kicker: 'Sources & updates',
      title: 'Practical information, sources & updates',
      intro: 'The historical data, the temporary closure of the lift and the description of the main attractions are based on the municipal tourist information of A Coruña. Bus routes should be verified with the urban operator before visiting. User ratings and reviews are synced from Google Maps and always indicated as such. Photographs come from Wikimedia Commons under the licences noted in the captions.',
      syncNote: 'Last data and review sync: setembro de 2026.',
      ctaLabels: { tourism: 'Turismo A Coruña', galicia: 'Turismo de Galicia', bus: 'Bus lines', maps: 'Google Maps' }
    },
    footer: {
      about: 'An independent guide created to help plan a visit to Monte de San Pedro.',
      legalLabels: ['Privacy', 'Terms', 'Cookies'],
      legal: {
        privacidade: 'This site does not request registration or store its own profiles. It uses Google Analytics 4 to measure aggregated usage; your browser can apply its own privacy and blocking options.',
        termos: 'Information is indicative. Timetables, access, services and conditions may change; always confirm operational details with the official sources before travelling.',
        cookies: 'You can limit or delete cookies from your browser settings. Third-party analytics tools may set identifiers under their own policy.'
      },
      bottomNote: 'Last data and review sync: setembro de 2026. The ratings and reviews shown come from Google Maps users; their authorship and rights belong to the authors and to Google Maps. Unofficial site: not affiliated with or representing the Concello da Coruña, Turismo da Coruña or Google.'
    }
  }
};
