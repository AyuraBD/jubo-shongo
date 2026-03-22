import { MissionVision } from '@/components/modules/aboutPage/MissionVision'
import { TeamSection } from '@/components/modules/aboutPage/TeamSection'
import { ValuesSection } from '@/components/modules/aboutPage/ValueSection'
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
    </>
  )
}

export default AboutPage