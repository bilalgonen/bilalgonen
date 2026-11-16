import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
}

export function Section({ id, title, eyebrow, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className='mx-auto w-full max-w-5xl px-4 py-12 sm:px-6'>
      {eyebrow && (
        <p className='mb-1 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300'>
          {eyebrow}
        </p>
      )}
      <h2
        id={`${id}-title`}
        className='mb-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white'
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
