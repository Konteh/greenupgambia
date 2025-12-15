import React from 'react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageBanner } from '../components/PageBanner';
import { TreePine, Recycle, GraduationCap, Droplets, Calendar, MapPin } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'National Tree Planting Campaign',
      description: 'Our flagship initiative aimed at combating deforestation across The Gambia. We work with local communities, schools, and organizations to plant indigenous tree species that are well-adapted to our climate.',
      fullDescription: 'Since 2018, our tree planting campaign has grown from a small community initiative to a nationwide movement. We focus on planting indigenous species such as Mahogany, Baobab, and Neem trees that provide multiple benefits - from carbon sequestration to fruit production. Our approach involves community education, providing seedlings, and ongoing maintenance support. Each planting site is carefully selected in collaboration with local leaders to ensure long-term success.',
      impact: '50,000+ trees planted across 25 communities',
      location: 'Nationwide',
      startDate: '2018',
      image: 'https://images.unsplash.com/photo-1604467724518-6d95b083c84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB0cmVlJTIwcGxhbnRpbmd8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: TreePine,
    },
    {
      id: 2,
      title: 'Coastal Clean-Up & Waste Management',
      description: 'Addressing plastic pollution and waste management challenges along Gambia\'s beautiful coastline and in urban areas.',
      fullDescription: 'The Gambian coastline is vital to our economy and ecosystem, but faces increasing threats from plastic pollution and improper waste disposal. Our coastal clean-up program organizes monthly beach clean-ups, installs waste collection points, and partners with local businesses to reduce single-use plastics. We\'ve also established recycling centers in three major communities, creating jobs while protecting the environment. Educational workshops teach residents about proper waste segregation and the importance of keeping our beaches clean.',
      impact: '100+ tons of waste collected and recycled',
      location: 'Coastal regions & urban areas',
      startDate: '2019',
      image: 'https://images.unsplash.com/photo-1642402806417-e451280d845b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjUzOTgwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Recycle,
    },
    {
      id: 3,
      title: 'Green Schools Initiative',
      description: 'Empowering the next generation through environmental education and sustainable practices in schools.',
      fullDescription: 'Children are our future environmental stewards. The Green Schools Initiative brings environmental education to primary and secondary schools across The Gambia. We provide curriculum materials, organize eco-clubs, establish school gardens, and train teachers in environmental pedagogy. Students learn practical skills like composting, organic gardening, and renewable energy basics. Each participating school commits to reducing waste, conserving water, and maintaining a tree nursery. To date, 45 schools have joined the program, reaching over 12,000 students annually.',
      impact: '45 schools, 12,000+ students educated',
      location: 'Greater Banjul Area & rural districts',
      startDate: '2020',
      image: 'https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: GraduationCap,
    },
    {
      id: 4,
      title: 'Clean Water & Wetland Protection',
      description: 'Safeguarding water sources and protecting vital wetland ecosystems throughout The Gambia.',
      fullDescription: 'The Gambia\'s wetlands and water sources are under pressure from pollution, overuse, and climate change. Our Clean Water initiative focuses on protecting these critical resources through community-based conservation. We work with villages to establish buffer zones around water sources, prevent pollution from agricultural runoff, and restore degraded wetland areas. The program includes training local water management committees, installing bio-sand filters for clean drinking water, and monitoring water quality. We\'ve also partnered with traditional leaders to revive indigenous water conservation practices.',
      impact: '15 water sources protected, 8 wetland areas restored',
      location: 'River Gambia basin',
      startDate: '2021',
      image: 'https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Droplets,
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <PageBanner
        title="Our Projects"
        description="Discover the initiatives that are making a real difference in protecting Gambia's environment and empowering communities for a sustainable future."
        backgroundImage="https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjU3ODg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`relative h-80 md:h-auto ${!isEven ? 'md:order-2' : ''}`}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                    </div>
                    
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-600 p-3 rounded-full">
                          <Icon className="size-6 text-white" />
                        </div>
                        <h2 className="text-green-800">{project.title}</h2>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      
                      <p className="text-gray-600 mb-6">{project.fullDescription}</p>
                      
                      <div className="space-y-3 border-t pt-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="size-4 text-green-600" />
                          <span>Started: {project.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="size-4 text-green-600" />
                          <span>{project.location}</span>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg mt-4">
                          <p className="text-green-800">
                            <strong>Impact:</strong> {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}