import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'recipe-box',
    name: 'Recipe Box',
    tagline: 'Decide what to cook, starting from what is in the fridge.',
    summary: [
      'Recipe Box is a fast, responsive web app for deciding what to cook. Search recipes by name, tag or ingredient, narrow them with cuisine, meal type and difficulty filters, then open a recipe to see timing, nutrition, an ingredient checklist and step-by-step instructions.',
      'Results update instantly as you type, every search is a shareable link, and favorites are saved in your browser. It works on phones and desktops, in light and dark mode, and is fully keyboard accessible.',
    ],
    highlights: [
      'Typed data access with TanStack Query',
      'URL-driven state: every search is a shareable link',
      'Infinite scrolling and instant search',
      'Accessibility and automated tests',
      'Edge deployment on Cloudflare Workers',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS 4',
      'TanStack Query',
      'React Router',
      'Vitest & Testing Library',
      'Cloudflare Workers',
    ],
    demoUrl: 'https://recipe.bilalgonen.workers.dev',
    sourceUrl: 'https://github.com/bilalgonen/recipe',
  },
  {
    id: 'dev-toolkit',
    name: 'DevToolkit',
    tagline: 'Six everyday developer utilities, 100% client-side.',
    summary: [
      'DevToolkit is a browser-based suite of six everyday developer utilities: a JSON formatter, a Base64/URL encoder, a regex tester, a JWT decoder, a color converter with WCAG contrast checks, and a SHA hash generator. Everything runs 100% client-side, so no data is ever uploaded.',
      'It uses a registry-driven architecture with lazy-loaded tools, a reusable accessible UI kit, a command palette and light/dark themes. Core logic is framework-free and covered by Vitest unit and component tests.',
    ],
    highlights: [
      'Registry-driven architecture with lazy-loaded tools',
      'Reusable accessible UI kit and command palette',
      'Framework-free core logic with unit and component tests',
      'No data ever leaves the browser',
    ],
    tech: [
      'React 19',
      'TypeScript (strict)',
      'Vite',
      'Tailwind CSS 4',
      'Zustand',
      'React Router',
      'Vitest',
      'Cloudflare Workers',
    ],
    demoUrl: 'https://devtoolkit.bilalgonen.workers.dev',
    sourceUrl: 'https://github.com/bilalgonen/dev-toolkit-react-typescript',
  },
  {
    id: 'rag-chatbot',
    name: 'RAG Chatbot',
    tagline: 'Ask questions of your own documents and see the sources.',
    summary: [
      'A retrieval-augmented generation chatbot in Python that answers questions from custom documents and returns the source passages with each answer.',
      'Document chunks are embedded with Sentence-Transformers and indexed in FAISS using cosine similarity, retrieving the top-k passages per query. Claude is prompted to answer only from the retrieved context and to say when the answer is not there, which reduces hallucination.',
    ],
    highlights: [
      'Semantic search: all-MiniLM-L6-v2 embeddings in a FAISS index',
      'FastAPI REST API with auto-generated Swagger docs',
      'Grounded answers that cite source passages',
      'API key kept in environment variables, out of code and git',
    ],
    tech: [
      'Python',
      'FastAPI',
      'FAISS',
      'Claude API',
      'Sentence-Transformers (all-MiniLM-L6-v2)',
      'Pydantic',
      'Uvicorn',
    ],
    sourceUrl: 'https://github.com/bilalgonen/rag-chatbot-fastapi-faiss',
  },
]
