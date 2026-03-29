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
  notionPageId?: string;
  team: { role: string; name: string }[];
}

export const PROJECTS: Project[] = [
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
    notionPageId: '32e8a599ff278037bc01d8da158c1b7b',
    team: [
      { role: 'Director', name: 'Sean Stone' },
      { role: 'Executive Producer', name: 'Oliver Stone' },
      { role: 'Executive Producer', name: 'Mel Gibson' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '002',
    slug: '99',
    title: '"99"',
    genre: 'FILM',
    image: '/film-99-poster.jpg',
    description: 'An action-packed narrative featuring Sylvester Stallone, set against a backdrop of urban grit and redemption.',
    details: 'Featuring Sylvester Stallone — Deal Memo Available',
    stats: 'Budget: $12M | Allocation Open: $4M',
    status: 'Financing Close',
    subStatus: 'IN DEVELOPMENT',
    deckUrl: 'https://drive.google.com/file/d/1_placeholder_deck_link/view?usp=sharing',
    previewImages: [
      '/film-99-poster.jpg',
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80',
      'https://images.unsplash.com/photo-1601513057803-52a0ad1222b4?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&sat=-100'
    ],
    positioning: 'Sylvester Stallone returns to his gritty roots in this high-octane urban thriller.',
    budgetRange: '$12M–$15M',
    equityAvailable: '$4M',
    taxIncentives: '40% Malta Film Rebate',
    salesStrategy: 'Pre-sales at AFM/Cannes; Major theatrical release in key territories.',
    targetROI: '20% ROI Plus 20% Backend Participation',
    comparables: ['The Town', 'Hell or High Water', 'Gran Torino'],
    marketPositioning: 'Star-driven action thriller with strong international appeal and franchise potential.',
    audience: 'Action fans, Stallone loyalists, and urban drama audiences (Ages 18-45).',
    timingRelevance: 'Capitalizes on the resurgence of elevated "Dad Cinema" and star-driven action.',
    commercialStrengths: [
      'Stallone lead ensures massive international value and guaranteed SVOD placement.',
      'Proven genre with high historical ROI for mid-budget action.',
      'Strong pre-sale potential in key European and Asian markets.'
    ],
    dataRoomUrl: 'https://notion.so/99-investment-data-room',
    team: [
      { role: 'Director', name: 'Steven C. Miller' },
      { role: 'Lead Cast', name: 'Sylvester Stallone' },
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
  },
  {
    id: '004',
    slug: 'a-town-called-consequence',
    title: 'A Town Called Consequence',
    genre: 'FILM',
    image: '/consequence-poster.jpg',
    description: 'A gritty western starring Kiefer Sutherland, where every choice has a price and every town has a secret.',
    details: 'Starring Kiefer Sutherland',
    stats: 'Budget: $8M | Allocation Open: $2M',
    status: 'Funded',
    subStatus: 'Packaging Phase — Fully Financed',
    statusColor: 'var(--green-funded)',
    previewImages: [
      '/consequence-poster.jpg',
      'https://images.unsplash.com/photo-1533167649158-6d508895b980?w=800&q=80',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80'
    ],
    positioning: 'Kiefer Sutherland anchors a brutal, modern deconstruction of the classic Western.',
    budgetRange: '$8M–$10M',
    equityAvailable: 'Fully Funded',
    taxIncentives: 'New Mexico Film Credit',
    salesStrategy: 'Festival circuit followed by premium VOD and cable syndication.',
    targetROI: '18% Fixed Return',
    comparables: ['Unforgiven', 'Bone Tomahawk', 'Hostiles'],
    marketPositioning: 'Elevated Western with strong critical appeal and cult potential.',
    audience: 'Western fans, Kiefer Sutherland fans, and indie cinema enthusiasts.',
    timingRelevance: 'Riding the wave of the Western genre resurgence (Yellowstone effect).',
    commercialStrengths: [
      'Low budget vs. high-profile lead creates a safe investment floor.',
      'Kiefer Sutherland\'s strong TV and film following ensures SVOD interest.',
      'Genre resurgence provides multiple distribution pathways.'
    ],
    dataRoomUrl: 'https://notion.so/consequence-data-room',
    team: [
      { role: 'Lead Cast', name: 'Kiefer Sutherland' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '005',
    slug: '400xy',
    title: '400XY (Napoleon Street)',
    genre: 'Sci-Fi Epic',
    image: '/400xy-art.jpg',
    description: 'Three cities. One frequency. Zero boundaries. A premium sci-fi feature in active financing discussions with established partners.',
    urgent: 'EXTREMELY URGENT',
    details: 'Dir: Alastair Paton | EP & Art Direction: Daniel Stanford',
    stats: 'Co-Production Financing — Active',
    subStatus: 'Select Equity Considered',
    status: 'Financing Close',
    statusColor: 'var(--red-urgent)',
    deckUrl: '/400XY_Investment_Dossier.pdf',
    previewImages: [],
    positioning: 'Financing & Co-Production Partners Under Review',
    budgetRange: 'Strategic Co-Production',
    equityAvailable: 'Select equity participation where appropriate',
    taxIncentives: 'Canada–China Film Co-Production Treaty + Greek Film Centre. Ontario CRS eligible.',
    salesStrategy: 'Multi-territory pre-sales via treaty rights. Festival circuit + streaming.',
    targetROI: 'Co-production revenue share per treaty',
    comparables: ['Arrival', 'The Great Wall', 'Annihilation'],
    marketPositioning: '400XY is a premium sci-fi feature currently in active financing discussions with established partners. The project is structured to leverage international production incentives and is evaluating select co-financing and strategic equity participation opportunities where appropriate.\n\nQualified investors and industry partners may inquire for confidential materials under NDA.',
    audience: 'Sci-fi and international cinema audiences. Institutional and HNW investors with film sector experience.',
    timingRelevance: 'Financing Partner Secured — Select Equity Considered. Multi-territory treaty production with built-in market access across Canada, China, and Greece.',
    commercialStrengths: [
      'Canada–China Film Co-Production Treaty bypasses Chinese import quotas.',
      'Greek Film Centre support + Ontario CRS tax credit eligibility.',
      'Structured to leverage international production incentives — reducing investor risk exposure.',
      'Multi-territory pre-sales via treaty rights provide downside protection.'
    ],
    dataRoomUrl: '/400XY_Investment_Dossier.pdf',
    team: [
      { role: 'IP Owner / Director', name: 'Alastair Paton' },
      { role: 'Executive Producer', name: 'Daniel Stanford' }
    ]
  },
  {
    id: '006',
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
  }
];
;
