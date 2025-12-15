import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageBanner } from '../components/PageBanner';
import { Heart, Users, Globe, Award, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interests: '',
    availability: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest! We\'ll contact you soon about volunteer opportunities.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      interests: '',
      availability: '',
      message: '',
    });
  };

  const reasons = [
    {
      icon: Heart,
      title: 'Make a Real Impact',
      description: 'Your time and effort directly contribute to environmental conservation and community development.',
    },
    {
      icon: Users,
      title: 'Join a Community',
      description: 'Connect with like-minded individuals who share your passion for protecting the environment.',
    },
    {
      icon: Globe,
      title: 'Protect Our Planet',
      description: 'Be part of the global movement to combat climate change and preserve nature for future generations.',
    },
    {
      icon: Award,
      title: 'Gain Experience',
      description: 'Develop valuable skills in environmental conservation, project management, and community engagement.',
    },
  ];

  const opportunities = [
    'Tree planting campaigns',
    'Beach and coastal clean-ups',
    'Environmental education in schools',
    'Community outreach programs',
    'Waste management initiatives',
    'Social media and communications',
    'Event organization and coordination',
    'Fundraising activities',
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <PageBanner
        title="Volunteer With Us"
        description="Join our team of passionate volunteers making a difference for The Gambia's environment and communities."
        backgroundImage="https://images.unsplash.com/photo-1710093072215-65070f9cf93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBjb21tdW5pdHklMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjU3ODg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Why Volunteer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-green-800 mb-4">Why Volunteer?</h2>
            <p className="text-gray-600">
              Volunteering with Green Up Gambia is more than just giving your time—it's about being part of a movement that creates lasting positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="size-7 text-green-600" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdm9sdW50ZWVycyUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU0NjcxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteers working together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white">Community volunteers making a difference</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Environmental education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white">Educating the next generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-800 mb-4">Volunteer Opportunities</h2>
              <p className="text-gray-600">
                We welcome volunteers with diverse skills and interests. Here are some ways you can contribute:
              </p>
            </div>

            <Card className="p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-4">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{opportunity}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-green-800 mb-4">Join Our Team</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get in touch with you about volunteer opportunities that match your interests and availability.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+220 XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="City/Region in The Gambia"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm text-gray-700 mb-2">
                    Areas of Interest *
                  </label>
                  <Input
                    id="interests"
                    type="text"
                    placeholder="e.g., Tree planting, Education, Social media"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm text-gray-700 mb-2">
                    Availability *
                  </label>
                  <Input
                    id="availability"
                    type="text"
                    placeholder="e.g., Weekends, Evenings, Full-time"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Tell us about yourself
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Share your motivation for volunteering and any relevant experience..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}