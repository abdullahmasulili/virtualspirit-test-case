import { useState } from 'react'
import AvatarGroup from './components/avatar/AvatarGroup'
import './App.css'
import avatars from './dummy/avatars'

function App() {
  return (
    <div className="App">
      <AvatarGroup avatars={avatars} maxLength={4} size={'lg'}/>
    </div>
  )
}

export default App
