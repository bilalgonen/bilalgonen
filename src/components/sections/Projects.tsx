import { projects } from '../../data/projects'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ProjectCard'

export function Projects() {
  return (
    <Section id='projects' title='Projects' eyebrow='Selected work'>
      <p className='-mt-4 mb-8 max-w-2xl text-slate-600 dark:text-slate-400'>
        Production-style apps I built to practice what I do at work: typed data access, accessibility,
        automated tests and edge deployment.
      </p>
      <div className='grid gap-6 lg:grid-cols-2'>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
