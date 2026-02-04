import type { ServiceData } from '@/types';
import { CTABannerSection, HeroSection, MethodologySection } from '@/components/sections';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { LogoCloudSection } from '@/components/sections/LogoCloudSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { OverviewSection } from '@/components/sections/OverviewSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';

type ServicePageProps = {
  data: ServiceData;
};

export default function ServicePage({ data }: ServicePageProps) {
  return (
    <>
      <HeroSection
        headline={data.title}
        subheadline={data.subtitle}
        ctaBtnText={data.cta || 'Book Consultation'}
        ctaBtnLink="/contact"
        subtitle="Professional Services"
        layout="split" // Use the new Premium Split Layout
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: data.title, path: '#' },
        ]}
        icon={data.icon && <data.icon className="h-10 w-10" />}
      />

      <LogoCloudSection />

      <OverviewSection
        description={data.description}
        deliverables={data.deliverables}
        title="What We Offer"
        subTitle="Overview"
      />

      {data.methodology && (
        <MethodologySection methodology={data.methodology} />
      )}

      {data.benefits && (
        <FeatureGrid
          features={data.benefits}
          title="Why Choose Our Services?"
          subtitle="Tangible value delivered through expertise and proven methodologies"
          badge="Value Proposition"
        />
      )}

      {data.metrics && <MetricsSection metrics={data.metrics} />}

      <TestimonialSection
        testimonials={data.testimonials}
        caseStudyTitle="Real Impact"
        caseStudy="See how we helped other companies achieve their goals."
      />

      {data.faq && <FAQSection faqs={data.faq} />}

      <CTABannerSection
        title={data.ctaHeadline || data.title}
        subtitle="Ready to transform your business operations?"
        badgeText="Get Started"
        demoBtnText={data.cta || 'Contact Us'}
        demoBtnLink="/contact"
        pricingBtnText="View Pricing"
        pricingBtnLink="/pricing"
      />
    </>
  );
}
