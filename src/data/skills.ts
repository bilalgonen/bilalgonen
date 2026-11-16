import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages & Frameworks',
    items: [
      'TypeScript', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'PHP', 'Laravel', 'Livewire',
      'Java', 'Python', 'C#', 'C++', 'C', 'PowerShell', 'Bash', 'React Native', 'SwiftUI',
    ],
  },
  {
    id: 'backend',
    label: 'Back End & Data',
    items: [
      'NodeJS', 'Express', 'REST API', 'GraphQL', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB',
      'Google Firebase', 'Stripe payment integration', 'JSON', 'Tomcat', 'Postman',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: [
      'Azure DevOps (yaml pipelines, repos, service connections)', 'Azure Active Directory',
      'Azure Key Vaults', 'Service Principals', 'Azure App Services (Web App)',
      'Azure Function Apps', 'Docker', 'AWS', 'AWS Amplify', 'Google GCP', 'DigitalOcean',
      'Terraform', 'HashiCorp Vault', 'Liquibase', 'Kubernetes',
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    items: [
      'Claude Code', 'Claude Cowork', 'Antigravity', 'Cursor', 'Microsoft 365 Copilot (Premium)',
      'Gemini',
    ],
  },
]
