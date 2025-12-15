import React from 'react';
import { Leaf, Users, Target } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Environmental Protection',
      description: 'We work to preserve and restore Gambia\'s natural ecosystems through tree planting, waste management, and conservation efforts.',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Empowering local communities through education, training, and collaborative environmental initiatives.',
    },
    {
      icon: Target,
      title: 'Sustainable Development',
      description: 'Promoting sustainable practices that balance environmental protection with economic and social development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-green-800 mb-6">About Green Up Gambia</h2>
          <p className="text-gray-700 text-lg">
            Green Up Gambia is a non-profit organization dedicated to environmental conservation and sustainable development in The Gambia. Through community-driven initiatives, we're creating lasting positive change for our environment and people.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Icon className="size-8 text-green-600" />
                </div>
                <h3 className="text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
