import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { ChatFeature } from '@/app/components/ChatFeature';
import { MoodTracking } from '@/app/components/MoodTracking';
import { AnalyticsShowcase } from '@/app/components/AnalyticsShowcase';
import { InsightsSection } from '@/app/components/InsightsSection';
import { PricingSection } from '@/app/components/PricingSection';
import { SecuritySection } from '@/app/components/SecuritySection';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ChatFeature />
      <MoodTracking />
      <AnalyticsShowcase />
      <InsightsSection />
      <PricingSection />
      <SecuritySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
