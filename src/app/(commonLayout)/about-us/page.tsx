import { MissionVision } from '@/components/modules/aboutPage/MissionVision'
import { TeamSection } from '@/components/modules/aboutPage/TeamSection'
import { ValuesSection } from '@/components/modules/aboutPage/ValueSection'
import { CTASection } from '@/components/modules/homepage/CtaSection'
import { ImpactStats } from '@/components/modules/homepage/ImpactStats'
import { PageHeroBanner } from '@/components/modules/others/PageHeroBanner'

const AboutPage = () => {
  return (
    <>
      <PageHeroBanner 
      title="About page"
      subtitle="A story of young hearts refusing to accept indifference — choosing action, faith, and community instead."
      breadcrumbs={[
        { label: "About", href: "/about-us" }             
      ]}
      ></PageHeroBanner>
      <MissionVision></MissionVision>
      <ValuesSection></ValuesSection>
      <TeamSection></TeamSection>
      <ImpactStats></ImpactStats>
      <CTASection></CTASection>
    </>
  )
}

export default AboutPage