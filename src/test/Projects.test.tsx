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
    const demo = within(card).queryByRole('link', { name: new RegExp(`${project.name} live demo`, 'i') })
    if (project.demoUrl) {
      expect(demo).toHaveAttribute('href', project.demoUrl)
      expect(demo).toHaveAttribute('rel', expect.stringContaining('noopener'))
    } else {
      expect(demo).toBeNull()
    }
    const source = within(card).queryByRole('link', { name: /source/i })
    if (project.sourceUrl) expect(source).toHaveAttribute('href', project.sourceUrl)
    else expect(source).toBeNull()
    expect(within(card).getAllByRole('listitem').length).toBeGreaterThanOrEqual(project.tech.length)
  })
})

describe('projects data', () => {
  it('contains Recipe Box, DevToolkit and RAG Chatbot', () => {
    expect(projects.map((p) => p.name)).toEqual(['Recipe Box', 'DevToolkit', 'RAG Chatbot'])
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
