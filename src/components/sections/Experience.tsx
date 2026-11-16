import { experience } from '../../data/experience'
import { Section } from '../layout/Section'

export function Experience() {
  return (
    <Section id='experience' title='Experience' eyebrow='Career'>
      <ol className='relative space-y-8 border-l border-slate-300 pl-6 dark:border-slate-700'>
        {experience.map((item) => (
          <li key={item.id} className='relative'>
            <span
              aria-hidden='true'
              className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-slate-50 dark:ring-slate-950 ${
                item.current ? 'bg-brand-500' : 'bg-slate-400 dark:bg-slate-600'
              }`}
            />
            <p className='text-sm font-medium text-brand-600 dark:text-brand-300'>{item.period}</p>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{item.role}</h3>
            <p className='text-slate-600 dark:text-slate-400'>
              {item.org}
              {item.location ? ` · ${item.location}` : ''}
            </p>
            <p className='mt-2 leading-relaxed text-slate-700 dark:text-slate-300'>{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
