import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
// MeshLettering from ReactBits Pro
import MeshLettering from './components/react-bits/mesh-lettering'
// AstralShell from ReactBits Pro
import AstralShell from './components/react-bits/astral-shell'
// GradientASCIInd 
import GradientASCII from './components/GradientASCII'
// SpecularButton
import SpecularButton from './components/SpecularButton'
// layout and pages
import MainLayout from './layouts/MainLayout'
import FeedPage from './pages/FeedPage'
import GroupsPage from './pages/GroupsPage'
import CirclePage from './pages/CirclePage'
import ProfilePage from './pages/ProfilePage'
import PostPage from './pages/PostPage'

// shared font for all non-animated text
const font = "'Common Place Demo', system-ui, sans-serif"
// shared text shadow to stay readable over animated backgrounds
const shadow = '0 2px 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.9)'

// Landing page shown at "/"
function LandingPage() {
  // navigate pushes to the app when a button is clicked
  const navigate = useNavigate()

  return (
    <>
      {/* Part 1: hero with AstralShell */}
      {/* AstralShell with green palette */}
      <AstralShell colors={['#81C14B', '#2E933C']} backgroundColor="#000" style={{ height: '100svh', width: '100%' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '12px',
          padding: '0 24px',
        }}>

          {/* label */}
          <p style={{
            color: '#fff',
            fontSize: '30px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            margin: 0,
            fontFamily: font,
            textShadow: shadow,
          }}>
            Stay connected with Relay
          </p>

          {/* header */}
          <div style={{ width: '100%', maxWidth: '700px', height: '180px' }}>
            <MeshLettering
              text="Relay"
              colors={['#81C14B', '#2E933C']}
              fontSize={120}
              interactive={true}
            />
          </div>

          {/* tagline */}
          <p style={{
            color: '#fff',
            fontSize: '30px',
            lineHeight: '1.6',
            maxWidth: '380px',
            textAlign: 'center',
            margin: 0,
            fontFamily: font,
            textShadow: shadow,
          }}>
            Good things travel through good people.
          </p>

        </div>
      </AstralShell>

      {/* Part 2: GradientASCII + login/signup ── */}
      <div style={{ position: 'relative', height: '100svh', width: '100%', overflow: 'hidden' }}>

        {/* GradientASCII fills this section as background */}
        <div style={{ position: 'absolute', inset: 0 }}>
            {/* colors for ASCII */}
          <GradientASCII
            colors={['#204E4A', '#297045', '#2E933C', '#81C14B']}
            shape="rise"
          />
        </div>

        {/* centered content on top */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '32px',
          padding: '0 24px',
        }}>

          {/* section heading */}
          <h2 style={{
            color: '#fff',
            fontSize: '56px',
            fontWeight: 'normal',
            margin: 0,
            textAlign: 'center',
            fontFamily: font,
            textShadow: shadow,
          }}>
            Let's get started
          </h2>

          {/* login and signup both navigate to the feed screen */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <SpecularButton onClick={() => navigate('/feed')}>Log in</SpecularButton>
            <SpecularButton onClick={() => navigate('/feed')}>Sign up</SpecularButton>
          </div>

        </div>
      </div>
    </>
  )
}

// App — root component that owns all routes
function App() {
  return (
    <Routes>
      {/* landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* app screens — all share the sidebar nav via MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/feed"    element={<FeedPage />} />
        <Route path="/groups"  element={<GroupsPage />} />
        <Route path="/circle"  element={<CirclePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post"    element={<PostPage />} />
      </Route>
    </Routes>
  )
}

export default App
