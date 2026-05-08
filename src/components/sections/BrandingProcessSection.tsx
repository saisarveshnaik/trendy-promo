import { Brush, ClipboardCheck, PackageCheck, Send } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const steps = [
  { icon: Brush, title: 'Upload Logo', text: 'Share logo files and brand notes directly from product or quote pages.' },
  { icon: ClipboardCheck, title: 'Approve Mockup', text: 'Review visual proofs with placement, colors, and print method details.' },
  { icon: PackageCheck, title: 'Production', text: 'We coordinate manufacturing with quality checkpoints and timeline updates.' },
  { icon: Send, title: 'Delivery', text: 'Receive bulk shipments or split distribution with trackable logistics.' },
]

const BrandingProcessSection = () => {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          kicker="Process"
          title="Custom Branding Workflow"
          description="A premium production flow designed for fast approvals and dependable execution."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.09}>
              <article className="light-panel floating-card relative rounded-[1.6rem] p-6 text-center">
                <span className="absolute right-4 top-4 text-xs font-semibold text-slate-500">0{index + 1}</span>
                <span className="neu-chip mx-auto inline-flex rounded-xl p-2 text-blue-600">
                  <step.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandingProcessSection
