import { Phone, Mail, MessageCircle, Github, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <div className="glass-card contact-card">
        <div className="contact-left">
          <h2 className="section-title">Let's Work <span className="accent">Together</span></h2>
          <p>
            Have a project in mind? I'm available for new opportunities,
            collaborations and freelance work. Feel free to reach out!
          </p>
        </div>

        <div className="contact-items">
          <a href="tel:+2348065587922"><Phone size={25} /><span><small>Phone</small>08065587922</span></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=warizo750@gmail.com"><Mail size={25} /><span><small>Email</small>warizo750@gmail.com</span></a>
          <a href="https://wa.me/2348065587922"><MessageCircle size={25} /><span><small>WhatsApp</small>08065587922</span></a>
          <a href="https://github.com/warizo750"><Github size={25} /><span><small>GitHub</small>warizo750</span></a>
        </div>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=warizo750@gmail.com" className="btn btn-primary">
          Send Message <Send size={20} />
        </a>
      </div>
    </section>
  )
}