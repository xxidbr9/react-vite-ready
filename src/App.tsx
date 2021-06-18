import React, { useState } from 'react'
import Brand from '@components/atoms/Brand'
import Typography from '@components/atoms/Typography'
import Avatar from './components/atoms/Avatar'
import Navbar from './components/molecules/Navbar'

function App() {

  return (
    <div>
      <Brand />
      <Typography variant={48} weight={700}> Hello</Typography>
      <Avatar src="https://source.unsplash.com/random/2" initialName="N"/>
      <Navbar />
    </div>
  )
}

export default App
