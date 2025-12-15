import React from 'react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageBanner } from '../components/PageBanner';
import { Linkedin, Mail, Award } from 'lucide-react';

export function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Kemo Fatty',
      role: 'Executive Director',
      image: 'images/kemo.jpeg',
      bio: 'Fatou is a passionate environmentalist with over 15 years of experience in sustainable development. She founded Green Up Gambia in 2018 with a vision to create a greener, more sustainable future for The Gambia.',
      impact: 'Under her leadership, Green Up Gambia has planted over 50,000 trees, engaged 15,000+ community members, and established partnerships with international organizations. She has been instrumental in shaping national environmental policies and inspiring a new generation of environmental advocates.',
      achievements: [
        'Environmental Leadership Award 2023',
        'Featured in BBC Africa Documentary',
        'Advisor to Ministry of Environment',
      ],
      email: 'fatou@greenupgambia.org',
      linkedin: '#',
    },
    {
      id: 2,
      name: 'Lamin Ceesay',
      role: 'Director of Programs',
      image: 'images/kemo.jpeg',
      bio: 'Lamin brings expertise in project management and community development. His background in environmental science and passion for grassroots organizing drives our field programs.',
      impact: 'Lamin has successfully coordinated 45+ tree planting campaigns across all regions of The Gambia. He developed our Green Schools Initiative, which now reaches over 12,000 students annually. His community-based approach ensures long-term sustainability and local ownership of environmental projects.',
      achievements: [
        'Managed 100+ community projects',
        'Trained 500+ volunteer coordinators',
        'Established 3 recycling centers',
      ],
      email: 'lamin@greenupgambia.org',
      linkedin: '#',
    },
    {
      id: 3,
      name: 'Mariama Sanneh',
      role: 'Education & Outreach Coordinator',
      image: 'images/kemo.jpeg',
      bio: 'Mariama is an educator who believes in empowering young people to become environmental stewards. She designs curricula and leads workshops that make environmental education engaging and accessible.',
      impact: 'Through her innovative teaching methods, Mariama has made environmental education exciting for thousands of students. She created the "Young Green Leaders" program that has trained 200+ youth ambassadors who are now leading environmental clubs in their schools and communities. Her work has significantly increased environmental awareness among young Gambians.',
      achievements: [
        'Developed award-winning curriculum',
        'Reached 45 schools nationwide',
        'Youth Environmental Award 2024',
      ],
      email: 'mariama@greenupgambia.org',
      linkedin: '#',
    },
    {
      id: 4,
      name: 'Ousman Jatta',
      role: 'Coastal Conservation Specialist',
      image: 'images/kemo.jpeg',
      bio: 'Ousman is a marine biologist dedicated to protecting Gambia\'s coastal ecosystems. His research and conservation work focuses on combating coastal erosion and marine pollution.',
      impact: 'Ousman has led critical research on coastal erosion patterns and developed evidence-based solutions that are now being implemented along the Gambian coast. His beach cleanup initiatives have removed over 100 tons of plastic waste, and he has established marine protected zones in collaboration with fishing communities to ensure sustainable resource management.',
      achievements: [
        'Published 5 research papers',
        'Established 3 marine protected areas',
        'Ocean Conservation Award 2023',
      ],
      email: 'ousman@greenupgambia.org',
      linkedin: '#',
    },
    {
      id: 5,
      name: 'Aminata Drammeh',
      role: 'Communications Manager',
      image: 'images/kemo.jpeg',
      bio: 'Aminata is a storyteller who uses media and communications to amplify our environmental message. Her creative campaigns have significantly raised awareness about climate action.',
      impact: 'Aminata\'s compelling storytelling has brought national and international attention to environmental issues in The Gambia. She has produced 15+ documentary films, grown our social media following to 50,000+ engaged supporters, and secured media coverage that has inspired thousands to take climate action. Her "Green Stories" campaign won the Best Environmental Campaign Award in 2024.',
      achievements: [
        'Produced 15+ environmental films',
        'Grew social media reach by 300%',
        'Best Campaign Award 2024',
      ],
      email: 'aminata@greenupgambia.org',
      linkedin: '#',
    },
    {
      id: 6,
      name: 'Bakary Sanyang',
      role: 'Renewable Energy Advisor',
      image: 'images/kemo.jpeg',
      bio: 'Bakary is an engineer specializing in renewable energy solutions. He leads our initiatives to bring clean, affordable energy to rural communities through solar and wind power.',
      impact: 'Bakary has designed and implemented solar energy systems that have brought electricity to 15 previously off-grid villages, improving quality of life for over 5,000 people. His work includes training local technicians to maintain these systems, creating jobs and ensuring sustainability. He has also conducted feasibility studies for wind energy projects along the coast.',
      achievements: [
        'Installed 50+ solar systems',
        'Trained 30 solar technicians',
        'Green Energy Innovation Award',
      ],
      email: 'bakary@greenupgambia.org',
      linkedin: '#',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <PageBanner
        title="Our Team"
        description="Meet the dedicated individuals working tirelessly to create a sustainable future for The Gambia."
        backgroundImage="https://images.unsplash.com/photo-1710093072215-65070f9cf93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBjb21tdW5pdHklMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjU3ODg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`grid md:grid-cols-5 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`md:col-span-2 relative h-96 md:h-auto ${!isEven ? 'md:order-2' : ''}`}>
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:col-span-3 p-8 md:p-12 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                      <div className="mb-6">
                        <h2 className="text-green-800 mb-2">{member.name}</h2>
                        <p className="text-green-600">{member.role}</p>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{member.bio}</p>
                      
                      <div className="mb-6">
                        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="size-5 text-green-600" />
                          Impact & Achievements
                        </h3>
                        <p className="text-gray-600 mb-4">{member.impact}</p>
                        
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Contact */}
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <Mail className="size-4" />
                          <span className="text-sm">Email</span>
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <Linkedin className="size-4" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-green-800 mb-4">Join Our Team</h2>
            <p className="text-gray-700 mb-8">
              We're always looking for passionate individuals who share our commitment to environmental conservation. Check our volunteer and career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Volunteer With Us
              </a>
              <a href="/#contact" className="inline-block px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}