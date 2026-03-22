import { PageHeroBanner } from '@/components/modules/others/PageHeroBanner'
import { ActivitiesDetail } from '@/components/modules/whatWeDo/Activities'
import { CTASection } from '@/components/modules/whatWeDo/ProgrameCTA'

const WhatWeDoPage = () => {
  return (
    <>
      <PageHeroBanner 
        title="What We Do"
        subtitle="Six core programs. One purpose — serving humanity with faith, dedication, and love."
        breadcrumbs={[
          { label: "What We Do", href: "/what-we-do" }             
        ]}
        >
      </PageHeroBanner>
      <ActivitiesDetail></ActivitiesDetail>
      <CTASection
  title={<>Join Our <em className="not-italic text-gold-400">Mission</em></>}
  subtitle="Choose a cause close to your heart and make a direct impact today."
  buttons={[
    { label: "Donate to a campaign",    href: "/campaigns", variant: "primary"  },
    { label: "Volunteer", href: "/contact",   variant: "outline"  },
  ]}></CTASection>
    </>
  )
}

export default WhatWeDoPage