import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageBanner } from '../components/PageBanner';
import { Sun, Wind, Leaf, Droplets, Recycle, Home, Zap, Trees } from 'lucide-react';

export function GreenSolutionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const solutions = [
    {
      icon: Sun,
      title: 'Solar Energy Adoption',
      description: 'Promoting solar panels and solar-powered devices to reduce dependence on fossil fuels and provide clean energy to rural communities.',
      benefits: ['Reduces carbon emissions', 'Provides reliable power', 'Lower energy costs'],
    },
    {
      icon: Wind,
      title: 'Wind Energy Development',
      description: 'Harnessing coastal winds to generate clean, renewable energy for communities near the Atlantic coast.',
      benefits: ['Sustainable energy source', 'Creates green jobs', 'Reduces air pollution'],
    },
    {
      icon: Trees,
      title: 'Reforestation Programs',
      description: 'Large-scale tree planting initiatives to restore degraded forests and increase carbon sequestration.',
      benefits: ['Absorbs CO2', 'Prevents soil erosion', 'Restores biodiversity'],
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Implementing rainwater harvesting, drip irrigation, and water-efficient practices to preserve precious water resources.',
      benefits: ['Saves water', 'Reduces flooding', 'Improves agriculture'],
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Creating systems where waste is minimized through recycling, upcycling, and composting programs.',
      benefits: ['Reduces landfill waste', 'Creates economic opportunities', 'Conserves resources'],
    },
    {
      icon: Home,
      title: 'Sustainable Building',
      description: 'Promoting eco-friendly construction materials and energy-efficient building designs adapted to tropical climate.',
      benefits: ['Lower energy consumption', 'Better indoor climate', 'Uses local materials'],
    },
    {
      icon: Leaf,
      title: 'Organic Agriculture',
      description: 'Supporting farmers to transition to organic farming methods that protect soil health and reduce chemical use.',
      benefits: ['Healthier food', 'Protects soil', 'Reduces water pollution'],
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Teaching households and businesses to reduce energy waste through efficient appliances and practices.',
      benefits: ['Lower electricity bills', 'Reduces emissions', 'Extends power availability'],
    },
  ];

  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjU0MTcxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Solar Energy Solutions',
    },
    {
      url: 'https://images.unsplash.com/photo-1656444159297-ffe2dcb2c030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBncmVlbiUyMGVuZXJneXxlbnwxfHx8fDE3NjUzNDk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wind Energy',
    },
    {
      url: 'https://images.unsplash.com/photo-1604467724518-6d95b083c84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB0cmVlJTIwcGxhbnRpbmd8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tree Planting Initiatives',
    },
    {
      url: 'https://images.unsplash.com/photo-1744726010540-bf318d4a691f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwYWZyaWNhfGVufDF8fHx8MTc2NTQ2NzE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Sustainable Agriculture',
    },
    {
      url: 'https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjUzOTgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Recycling Programs',
    },
    {
      url: 'https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Natural Conservation',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <PageBanner
        title="Green Solutions"
        description="Explore sustainable solutions and innovative approaches to combat climate change and build a greener future for The Gambia."
        backgroundImage="https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NjU3NDcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-green-800 mb-4">Proposed Climate Solutions</h2>
            <p className="text-gray-600">
              These are practical, scalable solutions that can make a real difference in reducing our carbon footprint and adapting to climate change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="size-7 text-green-600" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-600">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-green-800 mb-4">Solutions in Action</h2>
            <p className="text-gray-600">
              Visual stories of green solutions being implemented across The Gambia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.url)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}