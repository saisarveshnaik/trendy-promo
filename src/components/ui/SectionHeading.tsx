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
        <p className="soft-kicker mb-3">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm text-slate-600 sm:text-base">{description}</p> : null}
    </Reveal>
  )
}

export default SectionHeading
