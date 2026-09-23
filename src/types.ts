/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  genre: string;
  image: string;
  description: string;
  status: 'Development' | 'Packaging' | 'Funded' | 'Financing Close' | 'Funding Open';
  statusColor?: string;
  urgent?: string;
  details: string;
  stats: string;
  pos?: string;
  subStatus?: string;
  deckUrl?: string;
  previewImages?: string[];
  // New Investment Funnel Fields
  positioning: string;
  budgetRange: string;
  equityAvailable: string;
  taxIncentives?: string;
  salesStrategy: string;
  targetROI: string;
  comparables: string[];
  marketPositioning: string;
  audience: string;
  timingRelevance: string;
  commercialStrengths: string[];
  dataRoomUrl: string;
  taxCreditDocumentsUrl?: string;
  dataRoomGatedPath?: string;
  notionPageId?: string;
  youtubeId?: string;
  trailerYoutubeId?: string;
  storyboardVideo?: string;
  team: { role: string; name: string }[];
  // Extended investment fields
  number?: string;
  shortTitle?: string;
  urgency?: boolean;
  closed?: boolean;
  timeSensitive?: boolean;
  timeSensitiveLabel?: string;
  distributionOpen?: boolean;
  director?: string;
  ep?: string;
  talent?: string;
  logline?: string;
  budget?: string;
  investmentAsk?: string;
  position?: string;
  returnTarget?: string;
  comparableFilms?: string;
  investmentNote?: string;
  disclaimer?: string;
  heroImage?: string;
  highlightColor?: string;
}

export const PROJECTS: Project[] = [
  {
    id: '012',
    slug: 'the-robinsons',
    title: 'The Robinsons',
    genre: 'Adventure · Survival Thriller',
    image: '/robinsons-poster.jpg',
    heroImage: '/robinsons-poster.jpg',
    description: "A family's sailing trip to Singapore turns into the adventure of a lifetime when a fierce storm hits and the family is shipwrecked on a tropical island. A modern-day retelling of the classic tale, The Swiss Family Robinson.",
    status: 'Funding Open',
    statusColor: 'var(--green-funded)',
    urgent: 'DISTRIBUTION OPEN',
    distributionOpen: true,
    details: "Dir: Harvey Lowry | Prod: Bryan Lord (M-World Films) | Shooting Barbados | A modern-day retelling of The Swiss Family Robinson.",
    stats: 'Dir. Harvey Lowry · M-World Films · Budget $6,656,021 · Barbados',
    pos: 'Position: Equity ($2.75M) — Senior Preferred, Equity + Debt Structure',
    number: '012',
    shortTitle: 'The Robinsons',
    director: 'Harvey Lowry',
    talent: 'Casting under consideration — William: Greg Kinnear / Dennis Quaid / Bobby Cannavale · Boone: Ian McShane / Ben Kingsley / Timothy Olyphant · Elizabeth: January Jones / Emmanuelle Chriqui / Yvonne Strahovski. In negotiation: Jessica Alba (starring role) — per producer, Sept 22, 2026.',
    logline: "A family's sailing trip to Singapore turns into the adventure of a lifetime when a fierce storm hits and the family is shipwrecked on a tropical island.",
    budget: '$6,656,021',
    investmentAsk: '$2,750,000 Equity',
    position: 'Equity Investment',
    returnTarget: 'Inquire for Terms',
    positioning: 'A modern-day survival-adventure retelling of The Swiss Family Robinson from director Harvey Lowry (Pirates of the Caribbean: The Curse of the Black Pearl, A Beautiful Mind, The Watchmen) and producer Bryan Lord (Blackbird, Willy\'s Wonderland, The System) under M-World Films, shooting in Barbados. Multiple A-list casting options are under consideration for the three lead roles, with Jessica Alba reported in negotiation for a starring role as of Sept 22, 2026 (per producer).',
    budgetRange: '$6,656,021 (per production budget topsheet, SAG Tier 2, Barbados)',
    equityAvailable: '$2,750,000 Equity — Senior Preferred position',
    taxIncentives: 'Barbados 40% production rebate — net ~$2,476,040 after 93% monetization (≈37.2% of budget)',
    salesStrategy: 'Arclight Films (international sales agent) · Int\'l Sales Take/Ask: $6M / $4M · Int\'l Sales Advance $2,000,000 · Equity + Debt finance plan',
    targetROI: 'Inquire for Terms',
    comparables: ['Swiss Family Robinson ($40M)', 'The Beach ($144M)', 'Cast Away ($429M)'],
    marketPositioning: 'A four-quadrant family-adventure survival thriller in the tradition of Swiss Family Robinson, The Beach, and Cast Away. The Robinsons — William, Liz, and their children Rayne and Jack — depart Marina Del Rey on what\'s meant to be a meaningful family voyage to Singapore, where Jack is set to begin a semester abroad. But their journey turns deadly when a monstrous typhoon slams into their yacht, hurling them off course and marooning them on a remote, uncharted tropical island. With no rescue in sight and their supplies dwindling, the family is forced to confront the island\'s brutal terrain, unpredictable wildlife, and the terrifying discovery that a crew of violent, unhinged treasure hunters uses the surrounding waters as their hunting ground. As the hunters close in to secure a hidden treasure, and hope fades, the Robinsons must transform from ordinary travelers into a united, battle-hardened family — fighting not just to survive, but to outsmart a threat that will stop at nothing to claim the island as their own.\n\nCasting under consideration: William (Greg Kinnear / Dennis Quaid / Bobby Cannavale), Boone (Ian McShane / Ben Kingsley / Timothy Olyphant), Elizabeth (January Jones / Emmanuelle Chriqui / Yvonne Strahovski). Casting update (Sept 22, 2026, per producer): Jessica Alba is in negotiation for a starring role.',
    audience: 'Family-adventure and survival-thriller audiences globally; broad four-quadrant theatrical and streaming appeal (Ages 12+).',
    timingRelevance: 'Production budgeted for a Q4 2026 start in Barbados (20-day shoot, SAG Tier 2). Jessica Alba in negotiation for a starring role as of Sept 22, 2026. Financing and remaining cast attachments being finalized. Contact Stanford Emporium Inc. for the full deck and latest status.',
    commercialStrengths: [
      'Director Harvey Lowry — 26 years in the industry; collaborated on Pirates of the Caribbean: The Curse of the Black Pearl, Alice in Wonderland, A Beautiful Mind, The Passion of the Christ, Hannibal, and The Watchmen.',
      "Producer Bryan Lord (M-World Films) — Blackbird (Kate Winslet, Susan Sarandon, dir. Roger Michell), Willy's Wonderland (Nicolas Cage), The System (Universal Pictures/Vertical Entertainment).",
      'Jessica Alba in negotiation for a starring role (per producer, Sept 22, 2026).',
      'Strong comparable performance: Swiss Family Robinson ($40M), The Beach ($144M), Cast Away ($429M).',
      'Barbados 40% production rebate substantially reduces net investor exposure.',
      'Arclight Films attached as international sales agent — Take/Ask $6M / $4M.',
      'Multiple A-list casting options under consideration across the remaining lead roles.',
      'Four-quadrant family-adventure genre with broad international appeal.',
    ],
    investmentNote: 'Budget finalized at $6,656,021 (Barbados, 40% rebate). Jessica Alba in negotiation for a starring role as of Sept 22, 2026 (per producer) — remaining casting and financing details being finalized. Contact Stanford Emporium Inc. for the full deck and latest status.',
    disclaimer: 'This listing does not constitute a securities offering. Interested parties should consult their legal and tax advisors. © M-World Films. All Rights Reserved.',
    highlightColor: '#2E7D8C',
    dataRoomUrl: '/docs/The_Robinsons_Deck.pdf',
    dataRoomGatedPath: '/robinsons-dataroom',
    previewImages: ['/robinsons-poster.jpg'],
    team: [
      { role: 'Director', name: 'Harvey Lowry' },
      { role: 'Producer', name: 'Bryan Lord' },
      { role: 'Production Company', name: 'M-World Films' },
      { role: 'Executive Producer', name: 'Daniel Stanford' },
    ],
  },
  {
    id: '011',
    slug: 'once-upon-a-time-in-tuscany',
    title: 'Once Upon a Time in Tuscany',
    genre: 'GANGSTER CRIME',
    image: 'https://res.cloudinary.com/dno3ruh4b/image/upload/v1783798326/PHOTO-2026-04-16-16-05-19_loxc4a.jpg',
    heroImage: 'https://res.cloudinary.com/dno3ruh4b/image/upload/v1783798326/PHOTO-2026-04-16-16-05-19_loxc4a.jpg',
    description: 'Howard Martin wants out of the life — he has a woman he loves and a child on the way. His wife disagrees. And before he can walk away, there is one last job: kill his adoptive father, surrender his inheritance, and settle the affairs of an Italian-American empire built on land, loyalty, and blood. When a naive American nephew arrives to complicate matters, Howard\'s morality and sanity are pushed to the limits.',
    status: 'Funded',
    closed: true,
    details: 'Once Upon a Time in Tuscany is a completed gangster crime feature directed by Benjamin Johns. Set in the hills of Tuscany, the film follows Howard Martin — a man trying to leave the life, given one last impossible task before he can walk free.',
    investmentNote: 'Completed project — the investment opportunity is closed.',
    stats: 'Dir. Benjamin Johns · Gangster Crime · Tuscany',
    director: 'Benjamin Johns',
    talent: 'Camille Razat · Darko Peric · Romano Orzari · Diego Cataño',
    logline: 'A gangster who wants out is given one last impossible job — kill his adoptive father, surrender his inheritance, and escape with his life intact. Set in the hills of Tuscany, where loyalty is the most dangerous currency of all.',
    budget: 'Completed',
    investmentAsk: 'Opportunity Closed',
    position: 'Completed Project',
    returnTarget: 'Not applicable',
    number: '011',
    shortTitle: 'OUTIT',
    urgency: false,
    highlightColor: '#C9971F',
    positioning: 'A completed gangster crime feature directed by Benjamin Johns, set against the cinematic landscape of Tuscany with an international ensemble cast.',
    budgetRange: 'Completed',
    equityAvailable: 'Opportunity Closed',
    taxIncentives: 'Tuscany / Italy production incentives — inquire for structure',
    salesStrategy: 'International theatrical release targeting European, North American, and Asian markets. Gangster crime genre with strong cross-territory appeal and cinematic Tuscany setting driving premium ancillary value.',
    targetROI: 'Not applicable',
    comparables: ['Sexy Beast', 'The Gentlemen', 'Once Upon a Time in America'],
    marketPositioning: 'Prestige gangster crime in the tradition of European crime cinema. Tuscany setting and international ensemble cast position this as a premium theatrical play with strong ancillary and streaming upside.',
    audience: 'Adult crime-drama audiences globally; premium streaming and theatrical across Europe, North America, and Asia.',
    timingRelevance: 'The film is completed and its investment opportunity is closed.',
    commercialStrengths: [
      'Director Benjamin Johns — emerging international voice',
      'Camille Razat — internationally recognised from Emily in Paris',
      'Darko Peric — global fan base from Money Heist / La Casa de Papel',
      'Tuscany setting — premium cinematic and ancillary value',
      'Gangster crime genre with proven international theatrical performance',
      'Original screenplay by Niccolo Cancellieri & Tim Daish',
      'Cinematography by Luca Ciuti',
    ],
    dataRoomUrl: '/investment-opportunities',
    team: [
      { role: 'Director', name: 'Benjamin Johns' },
      { role: 'Writers', name: 'Niccolo Cancellieri & Tim Daish' },
      { role: 'Producer', name: 'Bryan Lord' },
      { role: 'Cinematographer', name: 'Luca Ciuti' },
      { role: 'Composers', name: 'Franc Cinelli, Sara Tajik & Ian Tripp' },
    ],
  },
  {
    id: '010',
    slug: 'by-any-means',
    title: 'By Any Means',
    genre: 'CRIME THRILLER',
    image: 'https://res.cloudinary.com/dno3ruh4b/image/upload/v1783796251/Screen_Shot_2026-07-11_at_2.55.46_PM_br0sys.png',
    heroImage: 'https://res.cloudinary.com/dno3ruh4b/image/upload/v1783796251/Screen_Shot_2026-07-11_at_2.55.46_PM_br0sys.png',
    description: 'A notorious mafia hitman and a young Black FBI agent team up to investigate the murders of civil rights leaders in 1966 Mississippi. Directed by Elegance Bratton. Starring Yahya Abdul-Mateen II, Mark Wahlberg, and Nicole Beharie. Paramount theatrical release — September 4.',
    status: 'Funding Open',
    urgent: 'DISTRIBUTION WINDOW — SEPTEMBER 4',
    timeSensitive: true,
    timeSensitiveLabel: 'Pre-Release · Asian Rights Available · Sep 4',
    details: 'Stanford Emporium Inc. is seeking to represent Asian theatrical and ancillary distribution rights for By Any Means across Southeast Asian and East Asian territories. Given the September 4 US theatrical release, pre-release territory deals must move immediately. We bring established relationships with regional exhibitors and distribution infrastructure across key Asian markets.',
    stats: 'Dir. Elegance Bratton · Paramount Pictures · September 4',
    director: 'Elegance Bratton',
    talent: 'Yahya Abdul-Mateen II · Mark Wahlberg · Nicole Beharie',
    logline: 'A notorious mafia hitman and a young Black FBI agent team up to investigate the murders of civil rights leaders in 1966 Mississippi.',
    budget: 'Paramount Major Studio Release',
    investmentAsk: 'Distribution Inquiry',
    position: 'Asian Theatrical & Ancillary Rights',
    returnTarget: 'Territory Distribution Fee',
    number: '010',
    shortTitle: 'By Any Means',
    urgency: true,
    highlightColor: '#C9A800',
    trailerYoutubeId: 'ej8pjisr0Pc',
    positioning: 'Stanford Emporium Inc. is positioned to represent Asian theatrical and ancillary distribution rights across Southeast Asian and East Asian territories for this Paramount major studio release starring Mark Wahlberg and Yahya Abdul-Mateen II — with a September 4 US opening creating an immediate pre-release acquisition window.',
    budgetRange: 'Major Studio — Paramount Pictures',
    equityAvailable: 'Asian Territorial Rights',
    taxIncentives: 'Pre-release acquisition window — September 4 US opening',
    salesStrategy: 'Pre-release territory deals targeting Southeast Asian and East Asian theatrical and ancillary markets, leveraging Stanford Emporium\'s established relationships with regional exhibitors and sales infrastructure.',
    targetROI: 'Territory Distribution Fee',
    comparables: ['The Equalizer (Asian markets)', 'Lone Survivor', 'Black Klansman'],
    marketPositioning: 'High-profile Paramount release with a proven A-list cast offers strong theatrical and ancillary performance across Asian markets where crime-thriller and based-on-true-story narratives consistently over-index.',
    audience: 'Action and crime-thriller audiences across Southeast Asia and East Asia; Mark Wahlberg fanbase with strong existing regional draw.',
    timingRelevance: 'September 4 US theatrical release creates an immediate pre-release acquisition window for Asian territories. Stanford Emporium is positioned to move on deals before the US opening.',
    commercialStrengths: [
      'Mark Wahlberg — proven theatrical draw across Asian markets',
      'Yahya Abdul-Mateen II — critically acclaimed rising star',
      'Based on a true story — premium audience hook',
      'Paramount major studio release with full marketing support',
      'Crime-thriller genre consistently performs across Southeast Asia and East Asia',
      'Nicole Beharie — award-winning supporting cast',
    ],
    dataRoomUrl: '/investor-inquiry',
    dataRoomGatedPath: '/investor-inquiry',
    team: [
      { role: 'Director', name: 'Elegance Bratton' },
      { role: 'Writer', name: 'Sascha Penn' },
      { role: 'Stars', name: 'Yahya Abdul-Mateen II, Mark Wahlberg, Nicole Beharie' },
      { role: 'Studio', name: 'Paramount Pictures' },
      { role: 'Asian Distribution', name: 'Stanford Emporium Inc.' },
    ],
  },
  {
    id: '009',
    slug: 'lost-book-of-creation',
    number: '009',
    shortTitle: 'Lost Book of Creation',
    title: 'Lost Book of Creation',
    genre: 'Action · Adventure · Feature Film Franchise',
    image: 'https://res.cloudinary.com/dno3ruh4b/image/upload/v1783778860/nano-banana-2_Epic_cinematic_movie_poster_LOST_BOOK_OF_CREATION_in_bold_gold_weathered_serif_t-1_b4imfc.jpg',
    heroImage: 'https://res.cloudinary.com/dno3ruh4b/image/upload/v1783778860/nano-banana-2_Epic_cinematic_movie_poster_LOST_BOOK_OF_CREATION_in_bold_gold_weathered_serif_t-1_b4imfc.jpg',
    description: 'A globe-trotting action-adventure franchise in the vein of National Treasure and The Mummy. A charismatic thief and a dangerous relic hunter chase an ancient mystery across Malta, Rome, and the Red Sea — racing to find the Lost Book of Creation before a ruthless collector gets there first.',
    logline: 'A thief and a relic hunter are thrust together by fate, chasing clues tied to Alexander the Great, Julius Caesar, and Atlantis — to find the Lost Book of Creation, a mythical text said to hold the secret of existence and immortality, which resurfaces only once every 11 years.',
    status: 'Funded',
    statusColor: 'var(--green-funded)',
    subStatus: 'Financing Closed · Production Commencing',
    funded: true,
    director: 'Roel Reine',
    ep: 'Matt Hookings · Luke Croft-Faulkner',
    talent: 'Bobby Lee · Mãdãlina Ghenea · Eddie Hall · Matt Hookings · Abdu Rozik · Iron Biby',
    details: 'Dir: Roel Reiné | Cast: Bobby Lee · Eddie Hall · Mãdãlina Ghenea · Iron Biby | Prod: Camelot Films',
    stats: 'Budget: $25M | Malta Tax Rebate: 40% | Sales Estimates: $25M Ask / $14M Take',
    pos: 'Position: Equity | Pre-Sales | Malta Cash Rebate | Product Placement | Grant',
    budget: '$25M / €21.5M',
    budgetRange: '$25M / €21.5M',
    equityAvailable: 'Financing Closed',
    investmentAsk: 'Opportunity Closed',
    position: 'Financing Closed · Production Commencing',
    returnTarget: 'Malta 40% Cash Rebate + UK 25% Tax Credit · Pre-Sales already closed in Russia, Middle East, Eastern Europe, Spain. Sales Estimates: $25M Ask / $14M Take.',
    targetROI: 'Malta 40% Rebate · UK 25% Credit · Pre-Sales In Market',
    taxIncentives: 'Malta 40% Cash Rebate | UK 25% Tax Credit',
    salesStrategy: 'Theatrical + Streaming Hybrid · Noora Film (Pia Patatian) as Sales Rep · Pre-sales active: Russia, Middle East, Eastern Europe, Spain',
    comparableFilms: 'The Mummy ($409M WW) · National Treasure ($347M WW) · Indiana Jones franchise',
    comparables: ['The Mummy', 'National Treasure', 'Indiana Jones', 'Raiders of the Lost Ark'],
    positioning: 'A global four-quadrant action-adventure franchise — The Mummy meets National Treasure with a modern conspiracy edge. $25M budget. Malta production. Fully packaged and moving to greenlight.',
    marketPositioning: 'Fully packaged action-adventure franchise with A-list cast, strong international pre-sales, 40% Malta cash rebate, and a multi-film cinematic universe roadmap. Director Roel Reine has delivered for Paramount (Halo) and Marvel (Inhumans). Freeway CAMA collection account. Film Finances bond.',
    audience: 'Global four-quadrant — all ages and demographics. Action-adventure fans, mythology enthusiasts, franchise audiences.',
    timingRelevance: 'Financing is closed. Production is commencing. This opportunity is no longer available for investment.',
    commercialStrengths: [
      'Ensemble cast: Bobby Lee, Eddie Hall, Mãdãlina Ghenea, Matt Hookings, Abdu Rozik, Iron Biby.',
      'Director Roel Reine — Paramount\'s Halo, Marvel\'s Inhumans.',
      'Malta 40% cash rebate substantially reduces net equity requirement.',
      'Pre-sales already closed: Russia, Middle East, Eastern Europe, Spain.',
      'Fully packaged — Film Finances bond, Freeway CAMA collection account, Gary Raskin (legal).',
      'Multi-film franchise roadmap: cinematic universe, series expansion, video game, merchandise, toys.',
      'Theatrical + Streaming Hybrid release model maximises revenue windows.',
      'Sales estimates: $25M Ask / $14M Take — strong international market validation.',
    ],
    disclaimer: 'This listing does not constitute a securities offering. Interested parties should consult their legal and tax advisors. © Camelot Films. All Rights Reserved.',
    highlightColor: 'gold',
    investmentNote: 'Fully packaged action-adventure franchise at financing stage. Malta 40% cash rebate, UK 25% tax credit, and active pre-sales significantly de-risk equity position. Multi-film universe upside. Contact Stanford Emporium Inc. for terms.',
    dataRoomUrl: '',
    dataRoomGatedPath: '',
    previewImages: ['https://res.cloudinary.com/dno3ruh4b/image/upload/v1783778860/nano-banana-2_Epic_cinematic_movie_poster_LOST_BOOK_OF_CREATION_in_bold_gold_weathered_serif_t-1_b4imfc.jpg'],
    team: [
      { role: 'Director', name: 'Roel Reine' },
      { role: 'Cast', name: 'Bobby Lee' },
      { role: 'Cast', name: 'Mãdãlina Ghenea' },
      { role: 'Cast', name: 'Eddie Hall' },
      { role: 'Cast', name: 'Bobby Lee' },
      { role: 'Cast', name: 'Abdu Rozik' },
      { role: 'Producer', name: 'Matt Hookings' },
      { role: 'Producer', name: 'Luke Croft-Faulkner' },
      { role: 'Production Company', name: 'Camelot Films' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ],
  },
  {
    id: '006',
    slug: 'hells-kitchen',
    title: "Once Upon a Time in Hell's Kitchen",
    genre: 'Crime Drama / Period',
    image: '/hk-poster.jpg',
    description: "Hell's Kitchen, 1970s. A boxer fights for one great match to escape a neighborhood being torn apart by an Irish-Mob turf war — if loyalty doesn't drag him under first.",
    urgent: 'EXTREMELY URGENT',
    details: 'Dir: Colin Broderick | EP: Steven Spielberg · Sawyer Spielberg · Bill Strauss',
    stats: "Budget: $16.9M gross / $12.5M net | Equity Open: $1.5M | Shoot: April 20, 2026",
    pos: 'Equity participation — Revenue share on distribution',
    status: 'Funding Open',
    statusColor: 'var(--red-urgent)',
    previewImages: ['/hk-poster.jpg'],
    dataRoomGatedPath: '/hells-kitchen-dataroom',
    positioning: '$8.9M equity pool open. NY 30% tax credit reduces net budget to $12.5M. Finance plan fully structured. Shoot April 20, 2026.',
    investmentNote: 'Equity Pool position — first recoupment priority at $8,943,000. 20% premium shared pari passu across all capital participants after principal returned. 50% profit corridor on back-end. Total finance including fees: $18,146,992. Budget as of 6 April 2026.',
    budgetRange: '$16.9M · Net $12.5M after NY 30% tax credit',
    equityAvailable: '$8,943,000 total equity pool · Unsold Territory $4.4M + ½ Equity Pool $4.5M',
    taxIncentives: 'NY State Tax Credit $4,425,992 (30%) · Post + VFX Tax Credit $1,200,000 · Northern Ireland Screen Grant $50,000 · Total incentives: $5,675,992',
    salesStrategy: 'Fallbrook taking bids on tax credit loan · CVEC cashflow offered on post/VFX · Total structured debt: $9,203,992 · Finance plan fully structured',
    targetROI: '20% premium pari passu · Position 1 in revenue waterfall · 50% profit corridor after recoupment',
    comparables: ['The Fighter', 'Gangs of New York', 'Blood Brothers'],
    marketPositioning: "Goldcrest Pictures NY production entity. WGA/DGA/SAG/IATSE. 27-day shoot commencing April 20, 2026.\n\nTalent: Josh Brolin (attached) · Sawyer Spielberg · Melissa Leo (Oscar Winner) · Michael Kelly · Liam Neeson (negotiating) · Lily James (negotiating).\n\nEP: Steven Spielberg · Sawyer Spielberg · Bill Strauss (Straight Outta Compton). Strong pre-sales potential anchored by Brolin attachment and Neeson negotiation. The NY 30% tax credit reduces effective investor exposure to $12.5M net — $4.4M rebate is audit-budgeted and structured.",
    audience: 'Mainstream theatrical audiences, crime drama fans, awards circuit (Ages 25–65).',
    timingRelevance: 'Shoot commences April 20, 2026. This is a hard deadline — equity close required imminently.',
    commercialStrengths: [
      'Josh Brolin attached — proven $100M+ global box office draw.',
      'Liam Neeson negotiating — consistent international theatrical anchor.',
      'Melissa Leo (Oscar Winner) attached — awards credibility and critical press.',
      'NY 30% tax credit: $4.4M rebate reduces investor net exposure to $12.5M.',
      'Steven Spielberg as EP — unparalleled industry access and distribution authority.',
      'Sawyer Spielberg as EP — direct Spielberg Co. relationship depth.',
      'Bill Strauss (Straight Outta Compton) as EP — proven commercial hit-maker.',
      'Goldcrest Pictures NY entity — institutional production credibility.',
      'Period crime drama genre: consistent festival, theatrical, and VOD performance.'
    ],
    dataRoomUrl: '/HK_Finance_Dossier.pdf',
    team: [
      { role: 'Director', name: 'Colin Broderick' },
      { role: 'Executive Producer', name: 'Steven Spielberg' },
      { role: 'Executive Producer', name: 'Sawyer Spielberg' },
      { role: 'Executive Producer', name: 'Bill Strauss' },
      { role: 'Cast (negotiating)', name: 'Liam Neeson' },
      { role: 'Cast', name: 'Josh Brolin' },
      { role: 'Cast (negotiating)', name: 'Lily James' },
      { role: 'Cast', name: 'Melissa Leo' },
      { role: 'Cast', name: 'Michael Kelly' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: 'ugrp',
    slug: 'ugrp',
    youtubeId: 'nufP15iN4GE',
    number: '002',
    shortTitle: 'UGRP',
    title: 'In The Grey',
    genre: 'Action · Feature Film',
    image: '/ugrp-poster.jpg',
    heroImage: '/ugrp-poster.jpg',
    description: 'Exclusive through Stanford Emporium Inc. — up to $500,000 in Lifetime Participation Shares available only for a limited time in a finished, delivered Guy Ritchie action thriller. Minimum fixed return of $1.5M in 6–12 months.',
    logline: 'A pair of debt collectors for criminal organizations enlist the help of a high-level negotiator to recover $1 billion from a shady businessman, who recently had two previous debt collectors murdered on his private island.',
    urgent: 'EXCLUSIVE — STANFORD EMPORIUM INC.',
    urgency: true,
    timeSensitive: true,
    timeSensitiveLabel: 'Limited Time · Up to $500K · Lifetime Participation Shares',
    status: 'Funding Open',
    statusColor: 'var(--red-urgent)',
    director: 'Guy Ritchie',
    ep: '',
    talent: 'Henry Cavill · Jake Gyllenhaal · Eiza González',
    details: 'Dir: Guy Ritchie | Dist: Lionsgate (LGF) | Talent: Henry Cavill · Jake Gyllenhaal · Eiza González',
    stats: 'Budget: $73.8M | Up to $500K Available | Fixed $1.5M Return | 6–12 Months',
    pos: 'Position: Lifetime Participation Shares — Exclusive Through Stanford Emporium Inc.',
    budget: '$73.8M',
    equityAvailable: 'Up to $500,000 — Lifetime Participation Shares · Limited Time Offer',
    investmentAsk: 'Up to $500,000 (Inquiry)',
    position: 'Lifetime Participation Shares',
    returnTarget: 'Fixed minimum return of $1,500,000 in 6–12 months. Lifetime profit participation across all revenue windows thereafter — theatrical, streaming, VOD, broadcast, ancillary. Exclusive through Stanford Emporium Inc.',
    targetROI: 'Fixed $1.5M Minimum · 6–12 Months · Lifetime Participation',
    taxIncentives: 'Documented cost basis provides path to tax-efficient return. Finance plan: $49.4M senior lending against international pre-sales and tax credits. Fully structured.',
    salesStrategy: 'Lionsgate (LGF) — 3,500 screen major theatrical release · May 15. Black Bear International worldwide pre-sales.',
    comparableFilms: 'Aladdin ($183M budget/$1B+ WW) · The Gentlemen ($22M/$115M) · Wrath of Man ($40M/$104M) · Baby Driver ($34M/$226M)',
    comparables: ['Aladdin', 'The Gentlemen', 'Wrath of Man', 'Baby Driver'],
    investmentNote: 'Exclusive through Stanford Emporium Inc. Up to $500,000 in Lifetime Participation Shares available only for a limited time. Fixed minimum return of $1,500,000 in 6–12 months. Contact Stanford Emporium Inc. for contractual agreements.',
    disclaimer: 'This listing does not constitute a securities offering. Interested parties should consult their legal and tax advisors regarding cost basis treatment and profit participation terms. © Blackbear Pictures. All Rights Reserved. IP owned by Blackbear Pictures.',
    highlightColor: 'yellow',
    positioning: 'Exclusive through Stanford Emporium Inc. — up to $500,000 in Lifetime Participation Shares available only for a limited time in a finished, delivered Guy Ritchie action thriller. Fixed minimum return of $1,500,000 in 6–12 months.',
    budgetRange: '$73.8M',
    marketPositioning: 'Lionsgate major theatrical release — 3,500 screens · May 15. Black Bear International pre-sales. A-list cast. Film is finished and delivered. Production risk is zero.',
    audience: 'Action fans, Guy Ritchie loyalists, global theatrical audiences (Ages 18–55).',
    timingRelevance: 'Limited-time offer: up to $500,000 in Lifetime Participation Shares available only through Stanford Emporium Inc. Fixed minimum return of $1,500,000 in 6–12 months. Contact Stanford Emporium Inc. for contractual agreements.',
    commercialStrengths: [
      'LIMITED-TIME OFFER through Stanford Emporium Inc. — up to $500,000 in Lifetime Participation Shares.',
      'Film is FINISHED and DELIVERED — zero production risk.',
      'Lionsgate (LGF) releasing on 3,500 screens May 15 — high distributor confidence.',
      'Guy Ritchie — Aladdin ($1B+ WW), The Gentlemen ($115M), Wrath of Man ($104M).',
      'A-list cast: Henry Cavill, Jake Gyllenhaal, Eiza González.',
      'Lifetime participation across all revenue windows — theatrical, streaming, VOD, broadcast.',
      '$23M projected opening weekend · $60M domestic total.',
      '3rd party escrow agent pays investor directly from film revenues.'
    ],
    dataRoomUrl: '',
    dataRoomGatedPath: '/ugrp-dataroom',
    previewImages: ['/ugrp-poster.jpg'],
    team: [
      { role: 'Director', name: 'Guy Ritchie' },
      { role: 'Lead', name: 'Henry Cavill' },
      { role: 'Lead', name: 'Jake Gyllenhaal' },
      { role: 'Lead', name: 'Eiza González' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '001',
    slug: 'acnd',
    title: "A Child's Night Dream",
    genre: 'FILM',
    image: '/acnd-poster.jpg',
    description: 'A high-stakes political thriller exploring the intersection of power, media, and global influence.',
    urgent: 'EXTREMELY URGENT',
    details: 'Dir: Sean Stone | EP: Oliver Stone & Mel Gibson',
    stats: 'Budget: $8.4M | Equity Needed: $3M',
    pos: 'Position: Senior LIFO | Return: 20% premium',
    status: 'Development',
    statusColor: 'var(--red-urgent)',
    deckUrl: 'https://drive.google.com/file/d/1_placeholder_deck_link/view?usp=sharing',
    previewImages: [
      '/acnd-poster.jpg',
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80'
    ],
    positioning: 'A modern-day "All the President\'s Men" for the digital age.',
    budgetRange: '$8M–$10M',
    equityAvailable: '$3M',
    taxIncentives: '30% Georgia Film Tax Credit (Armenia)',
    salesStrategy: 'Tier 1 Festival Premiere (Sundance/TIFF) followed by global streaming acquisition (Netflix).',
    targetROI: '20% Preferred Return + 20% Backend',
    comparables: ['The Report', 'Official Secrets', 'Spotlight'],
    marketPositioning: 'High-concept political drama with built-in controversy and awards potential.',
    audience: 'Adult drama enthusiasts, political junkies, and global thriller fans (Ages 25-55).',
    timingRelevance: 'Releases during a major global election cycle, maximizing media visibility.',
    commercialStrengths: [
      'Oliver Stone attachment ensures global distribution interest and press coverage.',
      'High-stakes political subject matter with built-in media controversy.',
      'Strategic release timing aligned with global political events.'
    ],
    dataRoomUrl: 'https://www.notion.so/001-A-Child-s-Night-Dream-32e8a599ff278037bc01d8da158c1b7b',
    dataRoomGatedPath: '/acnd-dataroom',
    notionPageId: '32e8a599ff278037bc01d8da158c1b7b',
    team: [
      { role: 'Director', name: 'Sean Stone' },
      { role: 'Executive Producer', name: 'Oliver Stone' },
      { role: 'Executive Producer', name: 'Mel Gibson' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '008',
    slug: 'badlander',
    title: 'Badlander',
    genre: 'Action Horror / Thriller',
    image: '/badlander-key-art.png',
    description: 'In a decaying city, former Black Ops soldier Ray Hawkins and his elite ghost unit — the Zombie Squad — hunt a monstrous creature feeding on the innocent and evading capture through underground tunnels.',
    status: 'Funding Open',
    statusColor: 'var(--bronze)',
    details: 'Dir: Johnny Martin | Prod: Bryan Lord, Joe Di Maio, Thomas Sjolund',
    stats: 'Budget: $10M | Shoot: July/August 2026 | Location: Italy (possibly US)',
    pos: 'Equity participation — Revenue share on distribution',
    positioning: 'James Franco leads a visceral action-horror that blurs the line between myth and reality.',
    budgetRange: '$10M',
    equityAvailable: 'Allocation Open',
    taxIncentives: 'Italy production incentives available',
    salesStrategy: 'Theatrical + VOD. Strong genre pre-sales on Franco / Bacon / Fukuhara attachments.',
    targetROI: 'Revenue share on distribution',
    comparables: ['Predator', 'The Ritual', 'Bone Tomahawk'],
    marketPositioning: 'A high-concept action-horror with a proven ensemble cast. James Franco leads alongside Kevin Bacon, Josh Lucas, Alex Pettyfer, and Karen Fukuhara. Directed by Johnny Martin (Vengeance: A Love Story, Deadpool 2 stunt coordinator). Shooting July/August 2026 in Italy (US locations under consideration).\n\nAfter a brutal massacre — victims found mutilated with missing organs — Hawkins and the Zombie Squad uncover a dark legend: the Badlander, a creature hunting in the shadows and evading capture through underground tunnels. Haunted by personal loss and a failing marriage, Hawkins must confront this otherworldly predator with the help of a determined reporter and a mysterious Navajo elder.',
    audience: 'Genre horror and action fans globally; strong VOD and streaming performance in the $10M budget tier.',
    timingRelevance: 'Shoot commences July 2026. Funding window open now.',
    commercialStrengths: [
      'James Franco (lead) — proven global box office draw.',
      'Kevin Bacon — iconic genre credibility and international recognition.',
      'Josh Lucas, Alex Pettyfer, Karen Fukuhara — deep ensemble with broad demographic reach.',
      'Director Johnny Martin — action genre specialist with major studio credits.',
      '$10M budget sits in the high-performance VOD / limited theatrical sweet spot.',
      'Italy production incentives reduce effective investor exposure.',
      'High-concept creature mythology with franchise potential.',
      'Action-horror: consistently strong streaming and VOD performance globally.'
    ],
    team: [
      { role: 'Director', name: 'Johnny Martin' },
      { role: 'Producer', name: 'Bryan Lord' },
      { role: 'Producer', name: 'Joe Di Maio' },
      { role: 'Producer', name: 'Thomas Sjolund' },
      { role: 'Cast (Lead)', name: 'James Franco' },
      { role: 'Cast', name: 'Kevin Bacon' },
      { role: 'Cast', name: 'Josh Lucas' },
      { role: 'Cast', name: 'Alex Pettyfer' },
      { role: 'Cast', name: 'Karen Fukuhara' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ],
    previewImages: [
      '/badlander-key-art.png'
    ],
    dataRoomUrl: 'https://drive.google.com/file/d/1xq0uiyPgh7P163ubaUUNuEt1aZq2ymby/view',
    dataRoomGatedPath: '/badlander-dataroom',
    youtubeId: 'Xa0Sbh2tazI',
  },
  {
    id: '007',
    slug: 'epic-romance',
    title: 'Epic Romance',
    genre: 'TV SERIES',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=80',
    description: 'An intimate, unflinching romantic drama series based on a global bestseller (11M+ copies sold).',
    status: 'Funding Open',
    statusColor: 'var(--bronze)',
    details: 'Epic Romance (50 Shades of Grey style) to be disclosed (11M+ copies sold)',
    stats: 'TV Series | $50M Budget | Pilot Stage',
    positioning: 'The next global streaming obsession: An epic romance in the vein of "50 Shades of Grey".',
    budgetRange: '$50M (Full Series) | Pilot Stage',
    equityAvailable: 'Allocation Open',
    taxIncentives: '30–40% ANCINE Rebates (São Paulo)',
    salesStrategy: 'Pilot-to-Series licensing deal with major streamers (Netflix, Prime, Hulu).',
    targetROI: '5–15x Recoupment on Pilot Spend',
    comparables: ['50 Shades of Grey', 'Normal People', 'Outlander', 'Bridgerton'],
    marketPositioning: 'Fastest-growing streaming genre with the highest completion rates.',
    audience: 'Global fanbase of 11M+ readers; adult drama and romance enthusiasts.',
    timingRelevance: 'High demand for emotionally raw, adult storytelling in the streaming era.',
    commercialStrengths: [
      'Built-in global fanbase of 11 million readers.',
      'Proven literary prestige and high-completion genre.',
      'Significant cost efficiency via São Paulo production hub.',
      'Multi-season franchise potential.'
    ],
    dataRoomUrl: 'https://notion.so/epic-romance-data-room',
    team: [
      { role: 'Executive Producer', name: 'Daniel Stanford' },
      { role: 'Art Direction', name: 'Daniel Stanford' },
      { role: 'Casting', name: 'Daniel Stanford' }
    ],
    previewImages: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80'
    ]
  },
  {
    id: '005',
    slug: '400xy',
    title: '400XY (Napoleon Street)',
    genre: 'Sci-Fi Epic',
    image: '/400xy-art.jpg',
    description: 'Three cities. One frequency. Zero boundaries. A premium sci-fi feature with a live $5M equity funding opportunity against Canadian tax credits, plus a separate $600K animation-series investment layer.',
    urgent: 'LIVE OPPORTUNITY · $5M EQUITY + $600K ANIMATION',
    urgency: true,
    details: 'Dir: Alastair Paton | EP & Art Direction: Daniel Stanford',
    stats: '$5M Feature Equity | $600K Animation Series',
    subStatus: 'Canadian Tax Credits · Netflix Series Path',
    status: 'Funding Open',
    statusColor: 'var(--red-urgent)',
    deckUrl: '/400XY_Investment_Dossier.pdf',
    storyboardVideo: '/400xy-storyboard.mp4',
    previewImages: [],
    positioning: 'Live Opportunity — Feature Equity + Animation Series',
    budgetRange: '$5M Feature Equity | $600K Animation Series',
    equityAvailable: '$5M equity funding against Canadian tax credits, plus $600K for the animation series',
    taxIncentives: 'Canada–China Film Co-Production Treaty + Greek Film Centre. Ontario CRS eligible.',
    salesStrategy: 'Feature: multi-territory pre-sales via treaty rights. Animation: ongoing series planned to be lined up for Netflix.',
    targetROI: 'Feature equity and animation-series investment terms available on request',
    comparables: ['Arrival', 'The Great Wall', 'Annihilation'],
    marketPositioning: '400XY is a premium sci-fi feature with a live $5M equity funding opportunity structured against Canadian tax credits. Alongside the feature, a separate $600K investment opportunity supports an animation layer for an ongoing series planned to be lined up for Netflix.\n\nQualified investors and industry partners may inquire for confidential materials under NDA.',
    audience: 'Sci-fi and international cinema audiences. Institutional and HNW investors with film sector experience.',
    timingRelevance: 'Live opportunity: $5M feature equity funding against Canadian tax credits and $600K for the animation-series layer. Multi-territory treaty production with built-in market access across Canada, China, and Greece.',
    commercialStrengths: [
      'Canada–China Film Co-Production Treaty bypasses Chinese import quotas.',
      'Greek Film Centre support + Ontario CRS tax credit eligibility.',
      '$5M feature equity opportunity structured against Canadian tax credits.',
      '$600K animation-series investment layer, with an ongoing series planned for a Netflix path.',
      'Multi-territory pre-sales via treaty rights provide downside protection.'
    ],
    dataRoomUrl: '/400XY_Investment_Dossier.pdf',
    taxCreditDocumentsUrl: 'https://drive.google.com/drive/folders/15vOymgjiuI-By3ESevht6q_7YVifF0A3',
    team: [
      { role: 'IP Owner / Director', name: 'Alastair Paton' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '002',
    slug: '99',
    title: '"99"',
    genre: 'FILM',
    image: '/film-99-poster.png',
    description: 'Star-driven action thriller. Production active in Egypt. $3M equity opportunity now open.',
    details: 'Principal Talent: Sylvester Stallone — Deal Memo in Place',
    stats: 'Budget: $12M | Capital Committed: $9M | Equity Open: $3M',
    pos: 'Status: Live Opportunity — Equity Open',
    status: 'Funding Open',
    statusColor: 'var(--red-urgent)',
    urgent: 'LIVE OPPORTUNITY · $3M EQUITY OPEN',
    urgency: true,
    subStatus: 'Production Active — Egypt',
    deckUrl: 'https://drive.google.com/file/d/1_placeholder_deck_link/view?usp=sharing',
    previewImages: [
      '/film-99-poster.png',
    ],
    positioning: 'Active production in Egypt. $9M committed. $3M equity opportunity now open — Senior Preferred, LIFO structure.',
    budgetRange: '$12M (Fixed)',
    equityAvailable: '$3M — Senior Preferred Equity · Live Opportunity',
    taxIncentives: '40% Malta Film Rebate',
    salesStrategy: 'Pre-sales at AFM/Cannes; Major theatrical release in key territories.',
    targetROI: '20% Preferred Premium + 20% Backend — 12-Month Repayment Target',
    comparables: ['The Town', 'Hell or High Water', 'Gran Torino'],
    marketPositioning: '$9M of the $12M budget is committed and production is active in Egypt. The remaining $3M equity opportunity is live under a Senior Preferred structure — Last In, First Out (LIFO) positioning, 20% preferred premium, and a 12-month repayment target.\n\nThe Senior Preferred Equity structure gives incoming capital LIFO positioning — last capital in is first capital returned — with a 20% preferred premium and a 12-month repayment target. This is investor-protective structuring at an unusually high standard for independent film at this budget range.',
    audience: 'Action fans, Stallone loyalists, and mainstream theatrical audiences (Ages 18–55).',
    timingRelevance: 'Live opportunity: production is underway and $3M in Senior Preferred Equity is currently open. This is the final close before post-production.',
    commercialStrengths: [
      'Sylvester Stallone (Deal Memo in place) — guaranteed international theatrical and SVOD value.',
      '$9M already committed — investor enters a production-active, de-risked position.',
      'Senior Preferred LIFO — last capital in is first capital returned at 20% premium.',
      'Production in Egypt leverages significant cost advantages vs. US or European locations.',
      'Director Steven C. Miller has a proven track record delivering on-budget action features.'
    ],
    dataRoomUrl: 'https://notion.so/99-investment-data-room',
    team: [
      { role: 'Director', name: 'Steven C. Miller' },
      { role: 'Lead Cast', name: 'Sylvester Stallone' },
      { role: 'Cast', name: 'Joel Kinnaman' },
      { role: 'Cast', name: 'Ester Expósito' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '003',
    slug: 'exit-paradise',
    title: 'Exit Paradise',
    genre: 'FILM',
    image: '/exit-paradise-poster.jpg',
    description: 'A cinematic journey starring Gerard Butler, exploring the boundaries of paradise and the cost of escape.',
    details: 'Starring Gerard Butler',
    stats: 'Budget: $25M | Allocation Open: $5M',
    status: 'Funded',
    subStatus: 'Structured Financing Complete',
    statusColor: 'var(--green-funded)',
    previewImages: [
      '/exit-paradise-poster.jpg',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80'
    ],
    positioning: 'Gerard Butler leads a visually stunning survival epic in the heart of the Amazon.',
    budgetRange: '$25M–$30M',
    equityAvailable: 'Fully Funded (Limited Secondary Available)',
    taxIncentives: 'Colombia Film Law 1556 (Cash Rebate)',
    salesStrategy: 'Studio output deal; Global theatrical release.',
    targetROI: '12-18% IRR',
    comparables: ['The Revenant', 'Triple Frontier', 'The Lost City of Z'],
    marketPositioning: 'Premium survival thriller with massive scale and A-list talent.',
    audience: 'Mainstream action/adventure audiences (Ages 16-60).',
    timingRelevance: 'Post-pandemic demand for high-production value, escapist cinematic experiences.',
    commercialStrengths: [
      'Gerard Butler\'s consistent box office track record in the action genre.',
      'High production value survival epic with global theatrical appeal.',
      'Strategic use of Colombian tax incentives to maximize on-screen value.'
    ],
    dataRoomUrl: 'https://notion.so/exit-paradise-data-room',
    team: [
      { role: 'Lead Cast', name: 'Gerard Butler' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  }
];
