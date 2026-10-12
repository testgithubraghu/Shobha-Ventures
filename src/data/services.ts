// src/data/services.ts
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'residential-construction',
    title: 'Residential Construction',
    shortDescription: 'Building dream homes with superior quality materials and expert craftsmanship that stand the test of time.',
    fullDescription: 'At Shobha Ventures, we specialize in creating beautiful residential spaces that reflect your lifestyle and aspirations. From luxury villas to modern apartments, our residential construction services encompass everything from initial planning to final handover. We use premium quality materials and employ skilled craftsmen to ensure every detail meets our exacting standards.',
    image: '../images/residential-constructions.png',
    features: [
      'Custom Home Design & Planning',
      'Villa & Independent House Construction',
      'Apartment & Flat Construction',
      'Duplex & Triplex Buildings',
      'Farmhouse Construction',
      'Premium Quality Materials',
      'Earthquake Resistant Structures',
      'Modern Amenities Integration',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understanding your vision, requirements, and budget for the perfect home.' },
      { step: 2, title: 'Design & Planning', description: 'Creating detailed architectural plans and 3D visualizations.' },
      { step: 3, title: 'Approval & Permits', description: 'Handling all legal documentation and building permits.' },
      { step: 4, title: 'Construction', description: 'Expert execution with quality materials and skilled labor.' },
      { step: 5, title: 'Quality Check', description: 'Rigorous inspection at every stage of construction.' },
      { step: 6, title: 'Handover', description: 'Final walkthrough and key handover with complete documentation.' },
    ],
  },
  {
    id: '2',
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    shortDescription: 'Creating impactful commercial spaces that drive business growth with innovative design solutions.',
    fullDescription: 'Our commercial construction services cater to businesses of all sizes. We build offices, retail spaces, showrooms, warehouses, and industrial buildings with a focus on functionality, aesthetics, and compliance. Our team ensures timely delivery without compromising on quality.',
    image: '../images/construction-building.avif',
    features: [
      'Office Buildings & Corporate Spaces',
      'Retail Stores & Shopping Complexes',
      'Warehouse & Industrial Buildings',
      'Restaurant & Hospitality Spaces',
      'Healthcare Facilities',
      'Educational Institutions',
      'Energy Efficient Designs',
      'Smart Building Solutions',
    ],
    process: [
      { step: 1, title: 'Site Analysis', description: 'Comprehensive analysis of the commercial site and its potential.' },
      { step: 2, title: 'Concept Design', description: 'Creating innovative commercial designs that maximize ROI.' },
      { step: 3, title: 'Detailed Engineering', description: 'Complete structural and MEP engineering designs.' },
      { step: 4, title: 'Construction Phase', description: 'Systematic construction with milestone tracking.' },
      { step: 5, title: 'Interior Finishing', description: 'Premium interior finishes for professional spaces.' },
      { step: 6, title: 'Project Delivery', description: 'On-time delivery with all certifications and warranties.' },
    ],
  },
  {
    id: '3',
    slug: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Transforming spaces into stunning living and working environments with creative interior solutions.',
    fullDescription: 'Our interior design team brings creativity and functionality together to transform ordinary spaces into extraordinary environments. From concept to completion, we handle every aspect of interior design including space planning, furniture selection, lighting design, and decor styling.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    features: [
      'Space Planning & Layout Design',
      'Modular Kitchen Design',
      'Living Room & Bedroom Interiors',
      'Office Interior Design',
      'False Ceiling & Lighting',
      'Custom Furniture Design',
      'Flooring & Wall Treatments',
      'Home Automation Integration',
    ],
    process: [
      { step: 1, title: 'Design Consultation', description: 'Understanding your style preferences and functional needs.' },
      { step: 2, title: 'Mood Board Creation', description: 'Visual representation of the proposed design direction.' },
      { step: 3, title: '3D Visualization', description: 'Photorealistic renders of the proposed interiors.' },
      { step: 4, title: 'Material Selection', description: 'Curating the best materials and finishes.' },
      { step: 5, title: 'Execution', description: 'Expert installation and craftsmanship.' },
      { step: 6, title: 'Styling & Handover', description: 'Final styling touches and project completion.' },
    ],
  },
  {
    id: '4',
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    shortDescription: 'Breathing new life into existing structures with modern upgrades and expert renovation services.',
    fullDescription: 'Give your property a fresh new look with our renovation and remodeling services. Whether its a complete structural overhaul or cosmetic upgrades, our team handles every aspect of the renovation process with minimal disruption to your daily life.',
    image: '../images/rennovation-remodeling.png',
    features: [
      'Complete Home Renovation',
      'Kitchen & Bathroom Remodeling',
      'Structural Modifications',
      'Electrical & Plumbing Upgrades',
      'Painting & Wall Treatments',
      'Roof Repair & Waterproofing',
      'Floor Replacement',
      'Extension & Add-on Construction',
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Thorough evaluation of the existing structure and renovation needs.' },
      { step: 2, title: 'Renovation Plan', description: 'Detailed plan with timeline and cost breakdown.' },
      { step: 3, title: 'Demolition', description: 'Careful removal of existing elements to be replaced.' },
      { step: 4, title: 'Reconstruction', description: 'Building and installing new elements and systems.' },
      { step: 5, title: 'Finishing', description: 'Premium finishing touches and quality inspection.' },
      { step: 6, title: 'Final Review', description: 'Walkthrough and handover of the renovated space.' },
    ],
  },
  {
    id: '5',
    slug: 'industrial-construction',
    title: 'Industrial Construction',
    shortDescription: 'Engineering robust industrial facilities built for heavy-duty operations, safety, and long-term performance.',
    fullDescription: 'We design and build industrial facilities engineered for demanding, round-the-clock operations. From factories and manufacturing units to warehouses and cold storage facilities, our industrial construction services focus on structural strength, efficient layout planning, and full compliance with safety and regulatory standards. We work closely with plant operators and logistics teams to ensure every facility is built to support smooth, uninterrupted business operations.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    features: [
      'Factory & Manufacturing Unit Construction',
      'Industrial Warehouses & Godowns',
      'Cold Storage Facilities',
      'Heavy-Duty RCC & Steel Structures',
      'Industrial Shed Construction',
      'Loading Dock & Logistics Planning',
      'Fire & Safety Compliance',
      'Power & Utility Infrastructure Planning',
    ],
    process: [
      { step: 1, title: 'Site & Feasibility Study', description: 'Assessing land, load requirements, and operational needs for the facility.' },
      { step: 2, title: 'Structural & MEP Design', description: 'Engineering heavy-duty structural, electrical, and utility systems.' },
      { step: 3, title: 'Regulatory & Safety Approvals', description: 'Securing industrial permits and fire & safety clearances.' },
      { step: 4, title: 'Foundation & Structural Construction', description: 'Building strong foundations and load-bearing industrial structures.' },
      { step: 5, title: 'Utility & Infrastructure Installation', description: 'Installing power, water, and logistics infrastructure.' },
      { step: 6, title: 'Handover & Compliance Certification', description: 'Final inspection, safety certification, and facility handover.' },
    ],
  },
];