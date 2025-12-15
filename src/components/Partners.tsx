import React from 'react';

export function Partners() {
  // Mock partner logos - Replace these with actual logo images
  const partners = [
    { name: 'UNDP', logo: 'UNDP' },
    { name: 'UNEP', logo: 'UNEP' },
    { name: 'WWF', logo: 'WWF' },
    { name: 'GEF', logo: 'GEF' },
    { name: 'EU', logo: 'EU' },
    { name: 'ECOWAS', logo: 'ECOWAS' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-green-800 mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow h-24"
            >
              <div className="text-gray-400 text-center">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-8 max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-center text-gray-700 text-sm">
            <strong>💡 Note for website manager:</strong> Replace the partner placeholders above with actual logo images. 
            You can upload logo files and use ImageWithFallback component to display them.
          </p>
        </div> */}
      </div>
    </section>
  );
}