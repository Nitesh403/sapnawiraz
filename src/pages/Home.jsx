import React, { Suspense, lazy } from 'react';
import Hero from '../pages/Hero';


// Lazy-loaded components
const Indowestern = lazy(() => import('../components/Indowestern'));
const Cordset = lazy(() => import('../components/Cordset'));
const Kaftan = lazy(() => import('../components/Kaftan'));
const Rupatta = lazy(() => import('../components/Rupatta'));

const Home = () => {
  return (
    <div>
  
      <Hero />

      <Suspense fallback={<div className="text-center py-6">Loading Indowestern...</div>}>
        <Indowestern />
      </Suspense>

      <Suspense fallback={<div className="text-center py-6">Loading Cordset...</div>}>
        <Cordset />
      </Suspense>

      <Suspense fallback={<div className="text-center py-6">Loading Kaftan...</div>}>
        <Kaftan />
      </Suspense>

      <Suspense fallback={<div className="text-center py-6">Loading Rupatta...</div>}>
        <Rupatta />
      </Suspense>

  
    </div>
  );
};

export default Home;
