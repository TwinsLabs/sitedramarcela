import React from 'react';
import LandingProductPanel from '@/components/sections/LandingProductPanel';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ProdutoPage() {
  return (
    <>
      <Header />
      <main>
        <LandingProductPanel />
      </main>
      <Footer />
    </>
  );
}
