import { useState } from 'react'
import './App.css'
import { Button } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

// import MobileDrawer from '@/components/MobileDrawer'

function App() {
  const [count, setCount] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <div>
        {/* <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button> */}
        <Button onClick={() => setOpenDrawer(true)}>show drawer</Button>
        {/* <MobileDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <div style={{ color: 'black' }}>testeeee</div>
        </MobileDrawer> */}
      </div>
    </div>
  )
}

export default App
