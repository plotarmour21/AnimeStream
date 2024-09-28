"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">AnimeStream</Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/browse">Browse</NavLink>
          <NavLink href="/my-list">My List</NavLink>
        </div>
        <Button variant="outline" className="hidden md:block">Sign In</Button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-700 py-2"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/browse">Browse</NavLink>
            <NavLink href="/my-list">My List</NavLink>
            <Button variant="outline" className="w-full">Sign In</Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white hover:text-gray-300 transition duration-200">
      {children}
    </Link>
  )
}