import { Link } from 'react-router'
import { Section } from '../layout/Section'
import Positions from '../cv/Positions'
import AdvisingSummary from '../cv/AdvisingSummary'
import TeachingExperience from '../cv/TeachingExperience'

export function Academic() {
  return (
    <Section id='academic' title='Academic Background' eyebrow='Teaching & research'>
      <div className='cv-prose space-y-10'>
        <div>
          <h3 className='mb-3 text-lg font-semibold text-slate-900 dark:text-white'>Academic positions</h3>
          <Positions />
        </div>
        <div>
          <h3 className='mb-3 text-lg font-semibold text-slate-900 dark:text-white'>Advising</h3>
          <AdvisingSummary />
        </div>
        <details className='group rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900'>
          <summary className='cursor-pointer text-lg font-semibold text-slate-900 dark:text-white'>
            Teaching experience
          </summary>
          <div className='mt-4'>
            <TeachingExperience />
          </div>
        </details>
        <p>
          Looking for publications, awards and service? See the <Link to='/cv'>full Academic CV</Link>.
        </p>
      </div>
    </Section>
  )
}
