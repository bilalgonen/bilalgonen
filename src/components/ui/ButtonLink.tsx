import type { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  ariaLabel?: string
}

const styles = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400',
  secondary:
    'border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800',
}

export function ButtonLink({ href, children, variant = 'primary', external = true, ariaLabel }: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
    </a>
  )
}
