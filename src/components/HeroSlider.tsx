import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1448099940878-e0c48ea3a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1iaWElMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzY1Nzg4NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Building a Sustainable Future for Gambia',
      description: 'Join us in our mission to protect the environment, promote sustainability, and create a greener Gambia for generations to come.',
      cta: 'Get Involved',
      ctaLink: '/volunteer',
    },
    {
      image: 'https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NjU3ODg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: '50,000+ Trees Planted Nationwide',
      description: 'Our tree planting campaign is transforming communities across The Gambia, one tree at a time.',
      cta: 'View Projects',
      ctaLink: '/projects',
    },
    {
      image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NjU3NDcwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Empowering Communities Through Green Solutions',
      description: 'Promoting renewable energy and sustainable practices for a cleaner, brighter future.',
      cta: 'Explore Solutions',
      ctaLink: '/green-solutions',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="green-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#059669" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#10b981" strokeWidth="0.5" />
              <path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="#34d399" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#green-pattern)" />
        </svg>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-700/80"></div>
          </div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-4xl">
              <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-green-800 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                  asChild
                >
                  <Link to={slide.ctaLink}>
                    {slide.cta}
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-6 backdrop-blur-sm bg-white/10 transition-all"
                  onClick={scrollToContact}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
