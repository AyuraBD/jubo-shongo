import { ContactSection } from "@/components/modules/contact/ContactSection"
import { PageHeroBanner } from "@/components/modules/others/PageHeroBanner"


const ContactPage = () => {
  return (
    <>
      <PageHeroBanner
        title="Get in Touch"
        subtitle="Have a question, want to volunteer, or ready to partner with us? We'd love to hear from you."
        breadcrumbs={[
          { label: "Contact Us", href: "/contact" }             
        ]}
        ></PageHeroBanner>
        <ContactSection></ContactSection>
    </>
  )
}

export default ContactPage