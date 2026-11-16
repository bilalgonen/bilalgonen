import { Hero } from '../components/sections/Hero'
import { Experience } from '../components/sections/Experience'
import { Certificates } from '../components/sections/Certificates'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import { Academic } from '../components/sections/Academic'
import { Education } from '../components/sections/Education'

export function Home() {
  return (
    <main id='main'>
      <Hero />
      <Experience />
      <Certificates />
      <Projects />
      <Skills />
      <Education />
      <Academic />
    </main>
  )
}
