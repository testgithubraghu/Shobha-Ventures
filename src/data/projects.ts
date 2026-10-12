// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'Completed' | 'Ongoing';
  location: string;
  plotSize: string;
  floors: string;
  facing: string;
  year: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  client: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sir M Visvesvaraya Layout Residence',
    category: 'Residential',
    status: 'Completed',
    location: 'Sir M Visvesvaraya Layout, Bangalore',
    plotSize: '30 × 40 ft',
    floors: 'Ground + 2',
    facing: 'West Facing',
    year: '2025',
    description:
      'Our completed flagship residence in Sir M Visvesvaraya Layout — a west-facing home on a 30×40 plot, designed and executed end-to-end by our own team. This is the project our office is headquartered next to, and it reflects the exact standard of finish and structural quality we bring to every home we build.',
    shortDescription: 'Our completed 30×40 west-facing home in Sir M Visvesvaraya Layout.',
    image: '../images/Visvesvaraya-Layout-Residence/vihsweshvaraya-layout-1.jpeg',
    gallery: [
      '../images/Visvesvaraya-Layout-Residence/vihsweshvaraya-layout-1.jpeg',
      '../images/Visvesvaraya-Layout-Residence/vihsweshvaraya-layout-2.jpeg',
    ],
    features: ['West-Facing Plot Optimisation', 'RCC Frame Structure', 'Premium Elevation Finish', 'Vaastu-Compliant Layout', 'Quality Fittings Throughout'],
    client: 'Private Residence',
  },
  {
    id: '2',
    title: 'Upkar Layout Nature-Friendly Home',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Upkar Layout, Bangalore',
    plotSize: '40 × 60 ft',
    floors: 'Ground + 3',
    facing: 'North Facing',
    year: 'In Progress',
    description:
      'An ongoing G+3 residence on a spacious 40×60 plot in Upkar Layout, built using nature-friendly mud brick construction. This project blends sustainable, breathable building materials with modern structural engineering — giving the family better thermal comfort and a lower environmental footprint without compromising on strength or scale.',
    shortDescription: 'Ongoing 40×60 G+3 home built with nature-friendly mud bricks.',
    image: '../images/upkar-layout/upkar-layout-1.jpeg',
    gallery: [
      '../images/upkar-layout/upkar-layout-2.jpeg',
      '../images/upkar-layout/upkar-layout-3.jpeg',
      '../images/upkar-layout/upkar-layout-4.jpeg',
    ],
    features: ['Nature-Friendly Mud Brick Construction', 'Superior Thermal Comfort', 'Ground + 3 RCC-Supported Structure', 'Sustainable Material Sourcing', 'Breathable Wall System'],
    client: 'Private Residence',
    highlight: 'Nature-Friendly Mud Brick Construction',
  },
  {
    id: '3',
    title: 'Kengeri Residence',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Kengeri, Bangalore',
    plotSize: '30 × 40 ft',
    floors: 'Ground + 3',
    facing: 'South Facing',
    year: 'In Progress',
    description:
      'A Ground+3 residential build currently under construction in Kengeri. On a compact 30×40 footprint, the design maximises vertical living space across four levels while keeping the structural plan efficient and cost-effective for the client.',
    shortDescription: 'Ongoing 30×40 G+3 residence under construction in Kengeri.',
    image: '../images/kengeri-residency/kengeri-residency-1.jpeg',
    gallery: [
      '../images/kengeri-residency/kengeri-residency-1.jpeg',
      '../images/kengeri-residency/kengeri-residency-2.jpeg',
    ],
    features: ['Ground + 3 Vertical Planning', 'Compact Plot Optimisation', 'RCC Frame Structure', 'Future Rental-Unit Ready', 'Site Supervision by In-House Engineers'],
    client: 'Private Residence',
  },
  {
    id: '4',
    title: 'Railway Layout Residence',
    category: 'Residential',
    status: 'Completed',
    location: 'Railway Layout, Bangalore',
    plotSize: 'Independent Plot',
    floors: 'Ground + 2',
    facing: 'East Facing',
    year: '2024',
    description:
      'A completed Ground+2 residential project in Railway Layout, Bangalore. Delivered end-to-end from foundation to finishing, this home showcases our standard approach to structural durability paired with clean, modern interior detailing.',
    shortDescription: 'Completed Ground+2 residence in Railway Layout, Bangalore.',
    image: '../images/railway-layout-residence/railway-layout-residence-1.jpeg',
    gallery: [
      '../images/railway-layout-residence/railway-layout-residence-1.jpeg',
      '../images/railway-layout-residence/railway-layout-residence-2.jpeg',
    ],
    features: ['Ground + 2 RCC Structure', 'Modern Elevation Design', 'Modular Kitchen', 'Quality Flooring & Finishes', 'On-Time Handover'],
    client: 'Private Residence',
  },
  {
    id: '5',
    title: 'Bangalore Residence with Lift',
    category: 'Residential',
    status: 'Completed',
    location: 'Bangalore',
    plotSize: '30 × 50 ft',
    floors: 'Ground + 3',
    facing: 'East Facing',
    year: '2024',
    description:
      'A completed Ground+3 home on a 30×50 east-facing site, fitted with a private passenger lift for easy access across all floors. This project was designed for multi-generational living, combining vertical scale with everyday convenience.',
    shortDescription: 'Completed 30×50 G+3 east-facing home with a private lift.',
    image: '../images/bangalore-residence/bangalore-residency-lift-1.jpeg',
    gallery: [
      '../images/bangalore-residence/bangalore-residency-lift-1.jpeg',
      '../images/bangalore-residence/bangalore-residency-lift-2.jpeg',
      '../images/bangalore-residence/bangalore-residency-lift-3.jpeg',
    ],
    features: ['Private Passenger Lift', 'Ground + 3 RCC Structure', 'East-Facing Vaastu Layout', 'Multi-Generational Floor Planning', 'Premium Elevation Finish'],
    client: 'Private Residence',
    highlight: 'Fitted with Private Lift',
  },
];

export const projectCategories = ['All', 'Completed', 'Ongoing'];
