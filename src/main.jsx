import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router' // ou 'react-router-dom'
import HomePage from './pages/HomePage'
import ClientePage from './pages/ClientePage'
import AdminMain from './pages/AdminMain'
import SignIn from './pages/auth/Sign-in'
import SignUp from './pages/auth/Sign-up'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="admin" element={<AdminMain />} />
        <Route path="admin" element={<SignUp />} />
        <Route path="admin" element={<SignIn />} />
        <Route path="cliente" element={<ClientePage />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
