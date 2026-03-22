import { AboutUs } from '@/components/modules/homepage/AboutUs'
import { CTASection } from '@/components/modules/homepage/CtaSection'
import { HeroSection } from '@/components/modules/homepage/HeroSection'
import { ImpactStats } from '@/components/modules/homepage/ImpactStats'
import { KeyActivities } from '@/components/modules/homepage/KeyActivities'
import { CampaignsPreview } from '@/components/modules/homepage/OngoingCampaigns'
import { Testimonials } from '@/components/modules/homepage/Testimonials'

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <KeyActivities></KeyActivities>
      <ImpactStats></ImpactStats>
      <CampaignsPreview></CampaignsPreview>
      <Testimonials></Testimonials>
      <CTASection></CTASection>
    </>
  )
}

export default HomePage