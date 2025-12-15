import React from 'react';
import { TreePine, Users, School, Droplets } from 'lucide-react';

export function ImpactStats() {
  const stats = [
    {
      icon: TreePine,
      value: '50,000+',
      label: 'Trees Planted',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Users,
      value: '25+',
      label: 'Communities Reached',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: School,
      value: '45',
      label: 'Green Schools',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Droplets,
      value: '15',
      label: 'Water Sources Protected',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="#059669" strokeWidth="1" />
              <circle cx="30" cy="30" r="10" fill="#10b981" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-800 mb-4 text-3xl md:text-4xl font-bold">Our Impact in Numbers</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Together, we're making a measurable difference for The Gambia's environment and communities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg`}>
                  <Icon className="size-7 md:size-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
