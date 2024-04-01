
"use client "
import { Navbar } from '@/components/shared/Navbar'
import { Sidebar } from 'lucide-react'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
    
  return (
    <main className="root">
        
        <Navbar/>

      <div className='root-countainer'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
       
    </main>
  )
}

export default Layout