import Image from "next/image";
import { shop } from "./site-config";

const phoneDigits = shop.phone.replace(/[^\d+]/g, "");
const mapsQuery = [shop.address, shop.city].filter(Boolean).join(", ");
const mapsUrl = mapsQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}` : "";
const phoneUrl = phoneDigits ? `tel:${phoneDigits}` : "";
const smsUrl = phoneDigits ? `sms:${phoneDigits}` : "";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home">{shop.name}<span className="wordmark-dot">.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href="#contact">Contact us <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-image">
          <Image src={shop.logo} alt="" fill priority sizes="100vw" className="cover-image hero-logo-art" />
          <div className="hero-shade" />
        </div>
        <div className="hero-content container">
          <p className="eyebrow light">THE BARBER EXPERIENCE</p>
          <h1>Look sharp.<br /><em>Feel different.</em></h1>
          <p className="hero-subtitle">{shop.tagline} Traditional craftsmanship, modern style, and attention to every detail.</p>
          <div className="hero-actions">
            {mapsUrl ? <a className="button button-light" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a> : <a className="button button-light" href="#visit">Find our location <span aria-hidden="true">↗</span></a>}
            <a className="button button-outline" href="#gallery">See our work</a>
          </div>
        </div>
        <div className="hero-side-label">PRECISION IN EVERY CUT — RICHARD&apos;S BARBERSHOP</div>
      </section>

      <section className="intro-section container" id="about">
        <div>
          <p className="eyebrow">01 / OUR STORY</p>
          <h2>More than<br />just a <em>haircut.</em></h2>
        </div>
        <div className="intro-copy">
          <p className="lead">{shop.intro}</p>
          <p>Whether you&apos;re after a classic look or something new, every visit is about taking the time to get it right.</p>
          <span className="signature">— {shop.barberName}</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <p className="eyebrow">02 / THE SERVICES</p>
          <div className="section-heading"><h2>The finishing <em>touch.</em></h2><p>Explore Richard's services, prices, and estimated appointment times.</p></div>
          <div className="service-list">
            {shop.services.map((service, index) => (
              <div className="service-row" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <div><h3>{service.title}</h3><p>{service.duration}</p></div>
                <span className="service-price">${service.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section container" id="gallery">
        <p className="eyebrow">03 / THE WORK</p>
        <div className="section-heading"><h2>Fresh from<br />the <em>chair.</em></h2><p>Explore the haircut portfolio, finished looks, and videos from the chair.</p></div>
        <div className="gallery-grid">
          {shop.photos.map((photo, index) => (
            <div className="gallery-photo" key={photo.src}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 720px) 100vw, 50vw" className="cover-image" />
              <span className="gallery-count">{index + 1} / {shop.photos.length}</span>
            </div>
          ))}
        </div>
        <div className="video-gallery-heading">
          <p className="eyebrow">WATCH THE PROCESS</p>
          <h3>Behind the <em>cut.</em></h3>
          <p>See the work in motion.</p>
        </div>
        <div className="video-gallery">
          {shop.videos.map((video) => (
            <div className="video-card" key={video.src}>
              <video controls preload="metadata" playsInline aria-label={video.title}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="container visit-grid">
          <div>
            <p className="eyebrow light">04 / FIND US</p>
            <h2>Come on <em>in.</em></h2>
            <p className="visit-description">A great haircut starts with showing up. We&apos;d love to see you.</p>
            <div className="location-block"><span>LOCATION</span><p>{mapsQuery || "Address coming soon"}</p></div>
            {mapsUrl && <a className="button button-light" href={mapsUrl} target="_blank" rel="noopener noreferrer">Open Google Maps <span aria-hidden="true">↗</span></a>}
          </div>
          <div className="hours-panel"><h3>Business hours</h3>{shop.hours.map((item) => <div className="hours-row" key={item.day}><span>{item.day}</span><span>{item.time}</span></div>)}<p className="hours-note">Please confirm hours before visiting.</p></div>
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <p className="eyebrow">05 / GET IN TOUCH</p>
        <h2>Ready for a<br /><em>fresh look?</em></h2>
        <p>Have a question or want to check availability? Reach out.</p>
        <div className="contact-actions">
          {phoneUrl ? <a className="button button-dark" href={phoneUrl}>Call the shop ↗</a> : <span className="button button-muted">Phone number coming soon</span>}
          {smsUrl && <a className="button button-outline-dark" href={smsUrl}>Send a text ↗</a>}
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><a href="#home">{shop.name}<span className="wordmark-dot">.</span></a><span>Good cuts. Good company.</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
