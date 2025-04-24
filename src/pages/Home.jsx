import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Building, Signpost, ClipboardCheck, FileText, ChevronRight, LayoutList } from "lucide-react";
import BannerSlider from '../components/BannerSlider';
import About from './About';
import Officials from './Officials';
import UpdatesLinks from './UpdatesLinks';
import SchemesSection from './SchemesSection';
import GallerySection from './GallerySection';

export default function Home() {
  const { t } = useTranslation();

  const officials = t('officials', { returnObjects: true });
  const updates = t('updates', { returnObjects: true });
  const links = t('links', { returnObjects: true });
  const schemes = t('schemes', { returnObjects: true });

  const colors = ['bg-cyan-100', 'bg-pink-100', 'bg-green-100', 'bg-orange-100'];

  return (
    <>
      <BannerSlider />
      <About />
      <Officials officials={officials} colors={colors} />
      <UpdatesLinks updates={updates} links={links} />
      <SchemesSection schemes={schemes} />
      <GallerySection />
    </>
  );
}