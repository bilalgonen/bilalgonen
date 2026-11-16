import { Link } from 'react-router'

export function NotFound() {
  return (
    <main id='main' className='mx-auto max-w-5xl px-4 py-24 text-center sm:px-6'>
      <h1 className='text-4xl font-bold text-slate-900 dark:text-white'>Page not found</h1>
      <p className='mt-3 text-slate-600 dark:text-slate-400'>That page doesn&apos;t exist.</p>
      <Link to='/' className='mt-6 inline-block text-brand-600 underline dark:text-brand-300'>
        Back to home
      </Link>
    </main>
  )
}
