import type { Certificate } from '../types'

const credly = (path: string) => `https://www.credly.com/badges/${path}`

export const certificates: Certificate[] = [
  {
    id: 'ccar-p',
    code: 'CCAR-P',
    name: 'Claude Certified Architect - Professional',
    issuer: 'Anthropic',
    url: credly('f330aef1-cc7a-44a9-88b0-742efdd37569/public_url'),
    pdfUrl: '/claude-certified-architect-professional-Bilal-Gonen.pdf',
  },
  {
    id: 'ccdv-f',
    code: 'CCDV-F',
    name: 'Claude Certified Developer - Foundations',
    issuer: 'Anthropic',
    url: credly('08d5c5d1-377d-446f-bd2a-ac3b53457f50'),
    pdfUrl: '/claude-certified-developer-foundations-Bilal-Gonen.pdf',
  },
  {
    id: 'ccao-f',
    code: 'CCAO-F',
    name: 'Claude Certified Associate - Foundations',
    issuer: 'Anthropic',
    url: credly('42985329-0100-4e75-a4ab-837b956f7f4d'),
    pdfUrl: '/claude-certified-associate-foundations-Bilal-Gonen.pdf',
  },
  {
    id: 'az-104',
    code: 'AZ-104',
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    url: credly('f80d143c-29b9-4f48-bf47-09583db4c406/public_url'),
  },
  {
    id: 'az-305',
    code: 'AZ-305',
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    url: credly('e3975d6c-908d-462b-b18a-c2769b0df955/public_url'),
    examBadgeUrl: credly('96213a44-2982-4d30-94a4-4985e9f3c4ad/public_url'),
  },
  {
    id: 'az-400',
    code: 'AZ-400',
    name: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    url: credly('6f8ad368-f87a-4862-b9ea-dde8155afc42/public_url'),
    examBadgeUrl: credly('415c1c10-1942-416e-8bcf-d9ec3acb9555/public_url'),
  },
  {
    id: 'az-500',
    code: 'AZ-500',
    name: 'Microsoft Certified: Azure Security Engineer Associate',
    issuer: 'Microsoft',
    url: credly('41097817-7c62-4fb6-aaa0-59237a260ba7/public_url'),
  },
  {
    id: 'az-900',
    code: 'AZ-900',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    url: credly('911ba0f3-b2fe-4f59-b4b7-83ba8d440d67/public_url'),
  },
  {
    id: 'dp-900',
    code: 'DP-900',
    name: 'Microsoft Certified: Azure Data Fundamentals',
    issuer: 'Microsoft',
    url: credly('a4df5f84-17e1-4a6b-9007-741fdf7420e6/public_url'),
  },
  {
    id: 'sc-900',
    code: 'SC-900',
    name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    url: credly('8a13e27f-b78c-4f20-87b6-1659666db37d/public_url'),
  },
]

export const allBadgesUrl = 'https://www.credly.com/users/bilal-gonen.6e475eab/badges'
