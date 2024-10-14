import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import {QueryClientProvider, QueryClient, QueryClient} from '@tanstack/react-query'*/
import App from './App.jsx'
import './index.css'
/*const queryClient = QueryClient();*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)

/*<QueryClientProvider client={queryClient}>
</QueryClientProvider>*/  