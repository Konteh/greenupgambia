import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PageBannerProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export function PageBanner({ title, description, backgroundImage }: PageBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g opacity="0.5">
                <path d="M 0 40 Q 20 20, 40 40 T 80 40" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M 0 0 Q 20 20, 40 0 T 80 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M 40 10 L 35 30 L 45 30 Z" fill="currentColor" opacity="0.3" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-pattern)" />
        </svg>
      </div>

      {/* Optional Background Image */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <ImageWithFallback
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-emerald-800/90"></div>
        </>
      )}

      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/5 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
