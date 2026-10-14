import { MapPin, Briefcase, GraduationCap } from 'lucide-react'

const info = [
  { icon: MapPin, label: 'Location', value: 'Nigeria' },
  { icon: Briefcase, label: 'Experience', value: 'Self-Taught' },
  { icon: GraduationCap, label: 'Education', value: 'Ongoing' },
]

export default function About() {
  return (
    <section className="about container" id="about">
      <h2 className="section-title">About <span className="accent">Me</span></h2>
      <div className="underline-bar" />
      <p className="about-text">
        I'm Waris Moshood, a passionate and dedicated software developer with a
        strong interest in building web applications that solve real problems.
        I enjoy turning ideas into clean, efficient and scalable solutions
        using modern technologies.
      </p>

      <div className="about-cards">
        {info.map(({ icon: Icon, label, value }) => (
          <div className="glass-card about-card" key={label}>
            <Icon size={30} className="about-icon" />
            <div>
              <small>{label}</small>
              <p>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}