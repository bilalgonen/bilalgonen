import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { Home } from '../pages/Home'

describe('ProjectCard', () => {
  it.each(projects)('renders $name with demo and source links and tech tags', (project) => {
    render(<ProjectCard project={project} />)
    const card = screen.getByRole('article', { name: project.name })
    const demo = within(card).getByRole('link', { name: new RegExp(`${project.name} live demo`, 'i') })
    expect(demo).toHaveAttribute('href', project.demoUrl)
    expect(demo).toHaveAttribute('rel', expect.stringContaining('noopener'))
    expect(within(card).getByRole('link', { name: /source/i })).toHaveAttribute('href', project.sourceUrl)
    expect(within(card).getAllByRole('listitem').length).toBeGreaterThanOrEqual(project.tech.length)
  })
})

describe('projects data', () => {
  it('contains Recipe Box and DevToolkit', () => {
    expect(projects.map((p) => p.name)).toEqual(['Recipe Box', 'DevToolkit'])
  })
})

describe('Home', () => {
  it('places Projects immediately before Skills', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
    const ids = [...container.querySelectorAll('main > section[id]')].map((s) => s.id)
    expect(ids.indexOf('projects')).toBeGreaterThan(-1)
    expect(ids.indexOf('skills')).toBe(ids.indexOf('projects') + 1)
  })
})
