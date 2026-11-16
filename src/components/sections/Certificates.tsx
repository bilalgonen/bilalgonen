import { allBadgesUrl, certificates } from '../../data/certificates'
import { Section } from '../layout/Section'

const link =
  'text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-500 dark:text-brand-300'

export function Certificates() {
  return (
    <Section id='certificates' title='Certificates' eyebrow='Credentials'>
      <ul className='grid gap-4 sm:grid-cols-2'>
        {certificates.map((c) => (
          <li
            key={c.id}
            className='rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900'
          >
            <p className='font-mono text-xs font-semibold text-brand-600 dark:text-brand-300'>{c.code}</p>
            <p className='mt-1 font-semibold text-slate-900 dark:text-white'>{c.name}</p>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Issued by {c.issuer}</p>
            <p className='mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm'>
              <a className={link} href={c.url} target='_blank' rel='noopener noreferrer'>
                Credly badge
              </a>
              {c.pdfUrl && (
                <a className={link} href={c.pdfUrl} target='_blank' rel='noopener noreferrer'>
                  PDF
                </a>
              )}
              {c.examBadgeUrl && (
                <a className={link} href={c.examBadgeUrl} target='_blank' rel='noopener noreferrer'>
                  Exam badge
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
      <p className='mt-6 text-sm text-slate-600 dark:text-slate-400'>
        See all certificates on{' '}
        <a className={link} href={allBadgesUrl} target='_blank' rel='noopener noreferrer'>
          credly.com
        </a>
        .
      </p>
    </Section>
  )
}
