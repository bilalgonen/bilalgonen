import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    id: 'humana',
    period: 'Jan 2023 – present',
    role: 'Lead Cloud Solutions Engineer',
    org: 'Humana',
    current: true,
    description:
      'Serve as Technical Lead for a full-stack project using ReactJS, node.js, typescript, tailwindcss, SQL server, terraform, Azure yaml pipelines, azure cognitive search service, Azure Service Bus, App Service Environment, Linux Web Apps, Key-vaults. Managing Postgresql database on Azure via Liquibase. Storing secrets in HashiCorp Vaults.',
  },
  {
    id: 'microsoft',
    period: 'Jul 2021 – Jan 2023',
    role: 'Senior Software Engineer',
    org: 'Microsoft Inc.',
    location: 'Atlanta, Georgia',
    description:
      'I developed build and release pipelines in Azure DevOps in classic and yaml pipelines. Used service principals in Azure Active Directory; Key Vaults to store keys and other secrets used by cloud apps and services. I worked on Azure Function Apps coded in Python to parse the call stack of crashes. Used python, unit tests, pytest, patch, mocking objects for API calls or reading external data.',
  },
  {
    id: 'professor',
    period: 'Aug 2011 – Aug 2021',
    role: 'Assistant Professor of Computer Science and Information Technology',
    org: 'University of Alaska, University of West Florida, University of Cincinnati',
    description: 'Assistant Professor at 3 universities.',
  },
  {
    id: 'powerdex',
    period: 'May 2009 – Aug 2010',
    role: 'Software engineer and database admin',
    org: 'PowerDEX Inc.',
    location: 'Reno, NV',
    description: 'MVC, Silverlight, .NET 4.0, AJAX, C#, MSSQL, MySQL, PHP, JavaScript, CSS.',
  },
  {
    id: 'testwave',
    period: 'May 2008 – Aug 2008',
    role: 'Web programmer',
    org: 'Testwave LLC',
    location: 'Reno, NV',
    description: 'Developed a database-driven system in ASP.NET 3.5, MSSQL server.',
  },
  {
    id: 'yourally',
    period: 'May 2007 – Aug 2007',
    role: 'Web programmer',
    org: 'Yourally Inc.',
    location: 'Reno, NV',
    description: 'PHP, MySQL, HTML, JavaScript, CSS, AJAX.',
  },
]
