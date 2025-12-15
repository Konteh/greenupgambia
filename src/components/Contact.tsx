import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Thank you for contacting us! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@greenupgambia.org',
      link: 'mailto:info@greenupgambia.org',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+220 XXX XXXX',
      link: 'tel:+220XXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Banjul, The Gambia',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', label: 'Facebook' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Instagram, link: '#', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-green-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how you'd like to get involved..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                        <Icon className="size-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-gray-900 hover:text-green-600 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-gray-900 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="bg-green-100 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors text-green-600"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
