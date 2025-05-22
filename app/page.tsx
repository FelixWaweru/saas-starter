import { HeroSection } from '@/components/landing/hero-section';
import { NetworkAnimation } from '@/components/landing/network-animation';
import { Features } from '@/components/landing/features';
import { Testimonials } from '@/components/landing/testimonials';
import { PartnerLogos } from '@/components/landing/partner-logos';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <NetworkAnimation />
      <PartnerLogos />
      <Features />
      <Testimonials />
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              Built by CodeFundi
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}