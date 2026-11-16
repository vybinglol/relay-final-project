import { Outlet } from 'react-router-dom'
import { Navigation4 } from '../components/blocks/navigation-4'

// MainLayout — sidebar nav on the left, page content on the right
export default function MainLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100svh', background: '#000' }}>
      {/* left sidebar nav */}
      <Navigation4 />

      {/* page content — offset by the 96px sidebar width on desktop */}
      <main style={{ flex: 1, marginLeft: '96px' }}>
        <Outlet />
      </main>
    </div>
  )
}
