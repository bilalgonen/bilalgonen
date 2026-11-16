import { skills } from '../../data/skills'
import { Section } from '../layout/Section'
import { Badge } from '../ui/Badge'

export function Skills() {
  return (
    <Section id='skills' title='Skills' eyebrow='Toolbox'>
      <div className='space-y-6'>
        {skills.map((group) => (
          <div key={group.id}>
            <h3 className='mb-3 text-lg font-semibold text-slate-900 dark:text-white'>{group.label}</h3>
            <ul className='flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
