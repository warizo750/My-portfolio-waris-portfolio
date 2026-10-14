import { ArrowRight, Mail, Github, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-text">
        <p className="hello">Hello, I'm</p>
        <h1 className="hero-name">Waris <span>Moshood</span></h1>
        <h2 className="hero-role">Software Developer &amp; Web Developer</h2>
        <p className="hero-desc">
          I build modern, responsive and functional web applications
          that help businesses turn ideas into digital experiences.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work <ArrowRight size={20} /></a>
          <a href="#contact" className="btn btn-outline">Contact Me <Mail size={20} /></a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/warizo750" target="_blank" rel="noreferrer">
            <Github size={25} />
            <span><b>GitHub</b><small>warizo750</small></span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=warizo750@gmail.com">
            <Mail size={25} />
            <span><b>Email</b><small>warizo750@gmail.com</small></span>
          </a>
          <a href="https://wa.me/2348065587922" target="_blank" rel="noreferrer">
            <MessageCircle size={25} />
            <span><b>WhatsApp</b><small>08065587922</small></span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame">
          <img src="/Waris.jpg" alt="Waris Moshood" />
        </div>
        <div className="motto">
          <div className="motto-bar" />
          <p>CODE<br />BUILD<br />IMPROVE</p>
          <span className="signature">Waris Moshood</span>
        </div>
      </div>
    </section>
  )
}