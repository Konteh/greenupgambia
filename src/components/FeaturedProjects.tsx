import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, TreePine, Recycle, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'National Tree Planting Campaign',
      description: 'Combating deforestation across The Gambia with indigenous tree species.',
      image: 'https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjU3ODg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: TreePine,
      gradient: 'from-green-600 to-emerald-700',
    },
    {
      id: 2,
      title: 'Coastal Clean-Up & Waste Management',
      description: 'Addressing plastic pollution along Gambia\'s beautiful coastline.',
      image: 'https://images.unsplash.com/photo-1630839138341-af5a6a012f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNsZWFudXAlMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzY1Nzg4NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Recycle,
      gradient: 'from-blue-600 to-cyan-700',
    },
    {
      id: 3,
      title: 'Green Schools Initiative',
      description: 'Empowering the next generation through environmental education.',
      image: 'https://images.unsplash.com/photo-1710093072215-65070f9cf93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBjb21tdW5pdHklMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjU3ODg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: GraduationCap,
      gradient: 'from-emerald-600 to-teal-700',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-800 mb-4 text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our key initiatives that are creating lasting positive change across The Gambia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                    <Icon className="size-6 text-green-700" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 mb-3 font-bold text-xl">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 shadow-lg"
            asChild
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
