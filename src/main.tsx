import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import './components/ui/global.css'

createRoot(document.getElementById('root')!).render(<App/>)
