import type { Project } from '../types'
import { Badge } from './ui/Badge'
import { ButtonLink } from './ui/ButtonLink'

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.id}`
  return (
    <article
      aria-labelledby={titleId}
      className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900'
    >
      <h3 id={titleId} className='text-2xl font-bold text-slate-900 dark:text-white'>
        {project.name}
      </h3>
      <p className='mt-1 font-medium text-brand-600 dark:text-brand-300'>{project.tagline}</p>

      <div className='mt-4 space-y-3 leading-relaxed text-slate-700 dark:text-slate-300'>
        {project.summary.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ul className='mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400'>
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <ul aria-label={`${project.name} tech stack`} className='mt-5 flex flex-wrap gap-2'>
        {project.tech.map((t) => (
          <li key={t}>
            <Badge>{t}</Badge>
          </li>
        ))}
      </ul>

      <div className='mt-auto flex flex-wrap gap-3 pt-6'>
        <ButtonLink href={project.demoUrl} ariaLabel={`${project.name} live demo (opens in a new tab)`}>
          Live demo ↗
        </ButtonLink>
        <ButtonLink
          href={project.sourceUrl}
          variant='secondary'
          ariaLabel={`${project.name} source code on GitHub (opens in a new tab)`}
        >
          Source
        </ButtonLink>
      </div>
    </article>
  )
}
