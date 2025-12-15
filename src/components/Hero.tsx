import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1NDY1NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gambia Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6">
            Building a Sustainable Future for Gambia
          </h1>
          <p className="text-white/90 text-xl mb-8">
            Join us in our mission to protect the environment, promote sustainability, and create a greener Gambia for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-gray-100"
              asChild
            >
              <Link to="/volunteer">
                Get Involved
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={scrollToContact}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}