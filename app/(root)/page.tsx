"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Notes from './Notes/page';
const Home = () => {
  return (
    <Router>
      {/* Your other components */}
      <Notes/>
      {/* Rest of your app */}
    </Router>
  )
}

export default Home