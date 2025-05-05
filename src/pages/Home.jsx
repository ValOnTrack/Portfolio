import React from 'react';
import DisplayedSection from '../components/DisplayedText'; 
import AboutSection from '../components/About';

const LazySupport = React.lazy(() => import('../components/Support'));

export default function Home() {
  return (
    <section>
      <DisplayedSection />
      <AboutSection />
      <LazySupport />
    </section>
  );
}
