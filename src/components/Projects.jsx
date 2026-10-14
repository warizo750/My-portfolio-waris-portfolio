import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Garago',
    sub: 'Ride-hailing / Live Driver Tracking Platform',
    desc: 'Full-feature ride-hailing app with live driver location tracking and map integration.',
    tags: ['React', 'FastAPI', 'WebSocket', 'Leaflet'],
    images: [
      '/projects/garago-1.jpg',
      '/projects/garago-2.jpg',
      '/projects/garago-3.jpg',
      '/projects/garago-4.jpg',
    ],
  },
  {
    title: 'African Taste Restaurant',
    sub: 'Restaurant Ordering Platform',
    desc: 'Order your favorite meals online with real-time data and secure authentication.',
    tags: ['React', 'FastAPI', 'SQLite', 'MUI'],
    images: [
      '/projects/restaurant-1.jpg',
      '/projects/restaurant-2.jpg',
      '/projects/restaurant-3.jpg',
    ],
  },
  {
    title: 'Prime Bites',
    sub: 'Restaurant Website',
    desc: 'A modern and elegant restaurant website with menu, reservation and order system.',
    tags: ['Flask', 'HTML', 'CSS', 'JavaScript'],
    images: [
      '/projects/prime-bites-1.jpg',
      '/projects/prime-bites-2.jpg',
      '/projects/prime-bites-3.jpg',
    ],
  },
  {
    title: 'DripZone',
    sub: 'Clothing E-commerce Website',
    desc: 'Shop stylish clothes with a smooth and secure checkout experience.',
    tags: ['Flask', 'SQLite', 'HTML', 'CSS'],
    images: [
      '/projects/dripzone-1.jpg',
      '/projects/dripzone-2.jpg',
      '/projects/dripzone-3.jpg',
      '/projects/dripzone-4.jpg',
    ],
  },
]

/* ---------- Image Carousel ---------- */
function ImageCarousel({ images, title }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])

  // autoplay every 4 seconds (stops when hovering the card)
  useEffect(() => {
    if (paused || images.length <= 1) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [paused, next, images.length])

  // touch swipe support
  let touchX = null
  const onTouchStart = (e) => (touchX = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX === null) return
    const diff = e.changedTouches[0].clientX - touchX
    if (Math.abs(diff) > 40) diff < 0 ? next() : prev()
    touchX = null
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={img} src={img} alt={`${title} screenshot ${i + 1}`} draggable="false" />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prev} aria-label="previous image">
            <ChevronLeft size={18} />
          </button>
          <button className="carousel-btn next" onClick={next} aria-label="next image">
            <ChevronRight size={18} />
          </button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={i === index ? 'dot active' : 'dot'}
                onClick={() => setIndex(i)}
                aria-label={`go to image ${i + 1}`}
              />
            ))}
          </div>

          <span className="carousel-counter">{index + 1}/{images.length}</span>
        </>
      )}
    </div>
  )
}

/* ---------- Projects Section ---------- */
export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <div className="projects-head">
        <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
        <a href="#projects" className="view-all">View All Projects <ArrowRight size={15} /></a>
      </div>
      <div className="underline-bar" />

      <div className="projects-grid">
        {projects.map((p) => (
          <article className="glass-card project" key={p.title}>
            <ImageCarousel images={p.images} title={p.title} />
            <h3>{p.title}</h3>
            <small className="project-sub">{p.sub}</small>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            </article>
        ))}
      </div>
    </section>
  )
}