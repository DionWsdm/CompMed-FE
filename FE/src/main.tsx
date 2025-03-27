import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import router from './routes/Router.tsx'
import { RouterProvider } from 'react-router-dom'

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
