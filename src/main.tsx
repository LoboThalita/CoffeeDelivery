import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
import { Checkout } from './routes/checkout'
import { Order } from './routes/order'
import { RootLayout } from './root'
import { Index } from './routes/_index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
