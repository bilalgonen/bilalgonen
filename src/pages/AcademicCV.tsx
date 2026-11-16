import type { ReactNode } from 'react'
import { Section } from '../components/layout/Section'
import Positions from '../components/cv/Positions'
import TeachingExperience from '../components/cv/TeachingExperience'
import Advising from '../components/cv/AdvisingCV'
import Awards from '../components/cv/Awards'
import ServiceUniversity from '../components/cv/ServiceUniversity'
import ServiceDepartment from '../components/cv/ServiceDepartment'
import ServiceCommunity from '../components/cv/ServiceCommunity'
import ProfessionalActivities from '../components/cv/ProfessionalActivities'
import Publications from '../components/cv/Publications'
import { education } from '../data/education'

function Prose({ children }: { children: ReactNode }) {
  return <div className='cv-prose'>{children}</div>
}

export function AcademicCV() {
  return (
    <main id='main'>
      <div className='mx-auto max-w-5xl px-4 pt-12 sm:px-6'>
        <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white'>Academic CV</h1>
        <p className='mt-2 text-slate-600 dark:text-slate-400'>
          Bilal Gonen · Ph.D. in Computer Science and Engineering
        </p>
      </div>
      <Section id='cv-positions' title='Academic Positions'>
        <Prose><Positions /></Prose>
      </Section>
      <Section id='cv-education' title='Education'>
        <Prose>
          <ul>
            {education.map((e) => (
              <li key={e.id}>
                {e.degree}, {e.school} ({e.date})
              </li>
            ))}
          </ul>
        </Prose>
      </Section>
      <Section id='cv-teaching' title='Teaching Experience'>
        <Prose><TeachingExperience /></Prose>
      </Section>
      <Section id='cv-advising' title='Advising'>
        <Prose><Advising /></Prose>
      </Section>
      <Section id='cv-awards' title='Awards'>
        <Prose><Awards /></Prose>
      </Section>
      <Section id='cv-service-university' title='Service to University'>
        <Prose><ServiceUniversity /></Prose>
      </Section>
      <Section id='cv-service-department' title='Service to Department'>
        <Prose><ServiceDepartment /></Prose>
      </Section>
      <Section id='cv-service-community' title='Service to Community'>
        <Prose><ServiceCommunity /></Prose>
      </Section>
      <Section id='cv-activities' title='Professional Activities'>
        <Prose><ProfessionalActivities /></Prose>
      </Section>
      <Section id='cv-publications' title='Publications'>
        <Prose><Publications /></Prose>
      </Section>
    </main>
  )
}
