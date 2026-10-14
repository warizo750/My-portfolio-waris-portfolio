import { Github, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 Waris Moshood. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/warizo750" aria-label="GitHub"><Github size={30} />
          <span><b>GitHub</b></span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=warizo750@gmail.com" aria-label="Email"><Mail size={30} />
          <span><b>Email</b></span>
          </a>
          <a href="https://wa.me/2348065587922" aria-label="WhatsApp"><MessageCircle size={30} />
          <span><b>WhatsApp</b></span>
          </a>
        </div>
      </div>
    </footer>
  )
}