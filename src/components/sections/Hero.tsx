import { profile } from '../../data/profile'
import { ButtonLink } from '../ui/ButtonLink'

export function Hero() {
  return (
    <section
      aria-labelledby='hero-title'
      className='relative overflow-hidden border-b border-slate-200 dark:border-slate-800'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,var(--color-brand-100),transparent)] opacity-70 dark:bg-[radial-gradient(60%_50%_at_70%_0%,var(--color-brand-900),transparent)] dark:opacity-100'
      />
      <div className='relative mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:py-24'>
        <div className='animate-fade-up'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300'>
            {profile.title}
          </p>
          <h1
            id='hero-title'
            className='text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white'
          >
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className='mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
            {profile.tagline}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <ButtonLink href='#projects' external={false}>
              View projects
            </ButtonLink>
            <ButtonLink href={profile.links.resume} variant='secondary'>
              Resume (PDF)
            </ButtonLink>
            <ButtonLink href={profile.links.github} variant='secondary'>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} variant='secondary'>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.youtube} variant='secondary'>
              YouTube
            </ButtonLink>
          </div>
        </div>
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={300}
          height={300}
          className='mx-auto h-48 w-48 rounded-2xl object-cover shadow-xl ring-4 ring-white md:h-64 md:w-64 dark:ring-slate-800'
        />
      </div>
      <dl className='relative mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 pb-10 sm:px-6 md:grid-cols-4'>
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className='rounded-xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/60'
          >
            <dt className='order-2 text-sm text-slate-500 dark:text-slate-400'>{s.label}</dt>
            <dd className='text-2xl font-bold text-slate-900 dark:text-white'>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
