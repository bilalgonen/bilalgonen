import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { Header } from '../components/layout/Header'

describe('Header', () => {
  it('shows section links on Home including Projects and the CV link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#projects')
    expect(screen.getByRole('link', { name: 'Academic CV' })).toHaveAttribute('href', '/cv')
  })

  it('shows the same menu items on /cv', () => {
    render(
      <MemoryRouter initialEntries={['/cv']}>
        <Header />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#projects')
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument()
  })
})
