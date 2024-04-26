import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@radix-ui/themes'
// import MobileDrawer from '@/components/MobileDrawer'

function App() {
  const [count, setCount] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Button onClick={() => setOpenDrawer(true)}>show drawer</Button>
        {/* <MobileDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <div style={{ color: 'black' }}>testeeee</div>
        </MobileDrawer> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
