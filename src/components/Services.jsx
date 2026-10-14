import { Monitor, Layout, Server, Plug, Smartphone } from 'lucide-react'

const services = [
  { icon: Monitor, title: 'Web Development', desc: 'Modern, responsive and fast websites for your business.' },
  { icon: Layout, title: 'Frontend Development', desc: 'Beautiful and interactive user interfaces with React & modern tools.' },
  { icon: Server, title: 'Backend Development', desc: 'Robust APIs and server-side solutions with Python & FastAPI.' },
  { icon: Plug, title: 'API Development', desc: 'Build and integrate secure REST APIs for your applications.' },
  { icon: Smartphone, title: 'Responsive Design', desc: 'Works perfectly on all devices and screen sizes.' },
]

export default function Services() {
  return (
    <section className="services container" id="services">
      <h2 className="section-title">What I <span className="accent">Do</span></h2>
      <div className="underline-bar" />
      <div className="services-list">
        {services.map(({ icon: Icon, title, desc }) => (
          <div className="glass-card service" key={title}>
            <div className="service-icon"><Icon size={22} /></div>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}