import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'nav scrolled' : 'nav'}>
      <nav className="nav-inner container">
        <a href="#home" className="logo">
          <span className="logo-mark">WM</span>
          <span className="logo-name">Waris Moshood</span>
        </a>

        <ul className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((l) => (
            <li key={l}>
              <a href={l === 'Home' ? '#home' : `#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-outline hire-btn">
          Hire Me <ArrowRight size={20} />
        </a>

        <button className="burger" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}