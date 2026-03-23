import { CampaignsList } from '@/components/modules/campaigns/campaignList'
import { QuickDonateBar } from '@/components/modules/campaigns/QuickDonatebar'
import { PageHeroBanner } from '@/components/modules/others/PageHeroBanner'

const CampaignsPage = () => {
  return (
    <>
      <PageHeroBanner 
        title="Active Campaigns"
        subtitle="Every taka you give is verified, tracked, and delivered to those who need it most."
        breadcrumbs={[
          { label: "Campaigns", href: "/campaigns" }             
        ]}
        ></PageHeroBanner>
      <QuickDonateBar></QuickDonateBar>
      <CampaignsList></CampaignsList>
    </>
  )
}

export default CampaignsPage