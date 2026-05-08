import Reveal from './Reveal'

type SectionHeadingProps = {
  kicker?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionHeading = ({ kicker, title, description, align = 'left' }: SectionHeadingProps) => {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {kicker ? (
        <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm text-slate-300 sm:text-base">{description}</p> : null}
    </Reveal>
  )
}

export default SectionHeading
