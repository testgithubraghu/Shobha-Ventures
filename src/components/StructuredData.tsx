export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Shobha Ventures',
    url: 'https://shobhaventures.com',
    telephone: '+91-9945949949',
    email: 'shobhaventures1@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, 1721, Muddinapalya Main Rd, Sir M Vishweshwaraiah Layout, 8th Block',
      addressLocality: 'Annapurneshwari Nagar, Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560091',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9634,   // replace with your exact GBP pin coordinates
      longitude: 77.5106,
    },
    founder: { '@type': 'Person', name: 'Manoj.N' },
    foundingDate: '2016',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '12',
    },
    areaServed: [
      'Annapurneshwari Nagar',
      'Nagarbhavi',
      'Vijayanagar',
      'Rajarajeshwari Nagar',
      'Kengeri',
      'Basaveshwar Nagar',
      'Mahalakshmipuram',
      'Bengaluru',
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
    ],
    sameAs: [
      // add real URLs once your social links are live — see earlier note about href="#"
       'https://www.facebook.com/people/Shobha-Ventures/pfbid0riqw8vbePj6uXJjaeCyXBFNtRuUiRLpPamsvFdVf7uhUkYmvkxrAWJf6BeNCNhVel/?rdid=vf6c807qxpiUNHJk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Uqw3sXAWk%2F',
       'https://www.instagram.com/shobhaventures?igsh=MWR4emhtMXl6b2p6Mg%3D%3D',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}