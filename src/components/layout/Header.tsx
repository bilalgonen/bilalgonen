import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { ThemeToggle } from '../ui/ThemeToggle'
import { homeSections } from '../../data/navigation'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const active = useScrollSpy(onHome ? homeSections.map((s) => s.id) : [])

  const linkBase =
    'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-300'

  return (
    <header className='sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80'>
      <nav
        aria-label='Main'
        className='mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6'
      >
        <Link to='/' className='text-lg font-extrabold tracking-tight text-slate-900 dark:text-white'>
          Bilal<span className='text-brand-500'>.</span>Gonen
        </Link>

        <ul className='hidden items-center gap-1 lg:flex'>
          {homeSections.map((s) => (
              <li key={s.id}>
                <Link
                  to={{ pathname: '/', hash: s.id }}
                  aria-current={active === s.id ? 'true' : undefined}
                  className={`${linkBase} ${
                    active === s.id
                      ? 'text-brand-600 dark:text-brand-300'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          <li>
            <NavLink
              to='/cv'
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'text-brand-600 dark:text-brand-300' : 'text-slate-600 dark:text-slate-400'}`
              }
            >
              Academic CV
            </NavLink>
          </li>
        </ul>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <button
            type='button'
            className='inline-flex h-9 items-center rounded-lg border border-slate-300 px-3 text-sm font-medium lg:hidden dark:border-slate-700'
            aria-expanded={open}
            aria-controls='mobile-menu'
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id='mobile-menu'
          className='border-t border-slate-200 bg-white px-4 py-2 lg:hidden dark:border-slate-800 dark:bg-slate-950'
        >
          {homeSections.map((s) => (
              <li key={s.id}>
                <Link
                  to={{ pathname: '/', hash: s.id }}
                  onClick={() => setOpen(false)}
                  className={`block ${linkBase}`}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          <li>
            <Link to='/cv' onClick={() => setOpen(false)} className={`block ${linkBase}`}>
              Academic CV
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
