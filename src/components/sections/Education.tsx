import { education } from '../../data/education'
import { Section } from '../layout/Section'

export function Education() {
  return (
    <Section id='education' title='Education' eyebrow='Academics'>
      <ul className='grid gap-4 md:grid-cols-3'>
        {education.map((e) => (
          <li
            key={e.id}
            className='rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900'
          >
            <p className='text-sm font-medium text-brand-600 dark:text-brand-300'>{e.date}</p>
            <h3 className='mt-1 font-semibold text-slate-900 dark:text-white'>{e.degree}</h3>
            <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>{e.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
