import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { ImpactStats } from '../components/ImpactStats';
import { About } from '../components/About';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Partners } from '../components/Partners';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <HeroSlider />
      <ImpactStats />
      <About />
      <FeaturedProjects />
      <Partners />
      <Contact />
    </>
  );
}