import { useEffect, useState } from "react";
import "../styles/home.css";
import Counter from "../components/Counter";


const images = [
  "/images/hero.jpg",
  "/images/hero.jpg",
  "/images/hero.jpg",
  "/images/hero.jpg",
  "/images/hero.jpg",
  "/images/hero.jpg",
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };
  const [videoPlay, setVideoPlay] = useState(false);

const clients = [
  "/images/client1.png",
  "/images/client2.png",
  "/images/client3.png",
  "/images/client4.png",
  "/images/client5.png",
  "/images/client6.png",
  "/images/client7.png",
  "/images/client8.png",
  "/images/client9.png",
  "/images/client10.png",
];

const VISIBLE = 4;
const TOTAL = clients.length;

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) =>
      prev + 1 > TOTAL - VISIBLE ? 0 : prev + 1
    );
  }, 4500); // ⬅️ SLOW (4.5 seconds)

  return () => clearInterval(interval);
}, []);






  return (
    <div className="home">


      {/* HERO SLIDER */}
      <section className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay text */}
        <div className="hero-overlay">
          <h1>GLOBAL STEEL COMPANY</h1>
          <p>Heavy Steel Fabrication • PEB • Bridge Girders</p>
        </div>

        {/* Controls */}
        <button className="arrow left" onClick={prevSlide}>❮</button>
        <button className="arrow right" onClick={nextSlide}>❯</button>
      </section>

      {/* STATS SECTION */}
<section className="stats">
  <div className="stat-card">
    <h2>
      <Counter end={350} duration={1200} />
    </h2>
    <p>Projects Executed</p>
  </div>

  <div className="stat-card">
    <h2>
      <Counter end={25} duration={900} />
    </h2>
    <p>Industries Served</p>
  </div>

  <div className="stat-card">
    <h2>
      <Counter end={40000} duration={1500} />
    </h2>
    <p>Ton Capacity</p>
  </div>
</section>
{/* SERVICES SECTION */}
<section className="services-section">
  <h2 className="section-title">
    GSC <span>Services</span>
  </h2>

  <div className="services-cards">

    {/* CARD 1 */}
    <div className="service-card">
      <div className="service-image">
        <img src="/images/service1.jpg" alt="Railway Bridges" />
        <div className="image-overlay"></div>
      </div>
      <h3>Railway Bridges</h3>
      <p>
        GSC specializes in the fabrication and erection of Composite
        Steel Girders for ROBs and RUBs as per Indian Railways
        specifications.
      </p>
      <a href="#" className="read-more">Read More →</a>
    </div>

    {/* CARD 2 */}
    <div className="service-card">
      <div className="service-image">
        <img src="/images/service2.jpg" alt="Pre-Engineered Buildings" />
        <div className="image-overlay"></div>
      </div>
      <h3>Pre-Engineered Buildings</h3>
      <p>
        Pre-Engineered Buildings (PEBs) are the latest trend in India,
        offering lightweight structures with high flexibility.
      </p>
      <a href="#" className="read-more">Read More →</a>
    </div>

    {/* CARD 3 */}
    <div className="service-card">
      <div className="service-image">
        <img src="/images/service3.jpg" alt="Multi-Storied Buildings" />
        <div className="image-overlay"></div>
      </div>
      <h3>Multi-Storied Buildings</h3>
      <p>
        Steel framed construction provides speed, strength and
        flexibility for multi-storied building structures.
      </p>
      <a href="#" className="read-more">Read More →</a>
    </div>

  </div>
</section>

{/* WHY CHOOSE US SECTION */}
<section className="why-section">

  {/* LEFT IMAGE */}
  <div className="why-left">
    <img src="/images/hero.jpg" alt="Welding Work" />

    <div className="why-box">
      <h3>We Are Open For Opportunities!</h3>
      <p>
        Designed and cost-effective solutions for fabrication,
        erection of composite steel girders for ROBs, RUBs and FOBs,
        Pre-Engineered Buildings and Multi-Storied Buildings.
      </p>
      <a href="#" className="why-link">View Our Works</a>
    </div>
  </div>

  {/* RIGHT CONTENT */}
  <div className="why-right">
    <span className="why-tag">Why Choose Us</span>

    <h2>
      We Are Leader In Heavy Steel <br />
      Fabrication Industrial Market
    </h2>

    <p>
      The Company maintains a strong reputation for delivering
      customer designed and cost effective solutions for steel
      buildings that are manufactured to the highest quality
      standards, and a commitment to providing top class service
      to its customers.
    </p>

    {/* VIDEO CARD */}
<div className="video-card">
  {!videoPlay ? (
    <div
      className="video-thumb"
      onClick={() => setVideoPlay(true)}
    >
      <img src="/images/machinery.jpg" alt="Factory Video" />
      <div className="play-btn">▶</div>
    </div>
  ) : (
    <video
      src="/videos/factory.mp4"
      autoPlay
      controls
      playsInline
    />
  )}
</div>


  </div>

</section>

{/* RECENT PROJECTS */}
<section className="projects-section">
  <h2>Our Recent Projects</h2>

  <div className="projects-grid">
    <a href="/projects/southern-railway" className="project-card">
      <img src="/images/project1.jpg" alt="Southern Railway" />
      <span>Southern Railway, Kerala</span>
    </a>

    <a href="/projects/jwala-gutta" className="project-card">
      <img src="/images/project2.jpg" alt="Jwala Gutta Academy" />
      <span>Jwala Gutta Academy</span>
    </a>

    <a href="/projects/vrl" className="project-card">
      <img src="/images/project3.jpg" alt="VRL Logistics" />
      <span>VRL Logistics</span>
    </a>
  </div>
</section>

{/* QUOTE CTA */}
<section className="quote-section">
  <div className="quote-left">
    <h3>Get A Free Quote Today</h3>
    <p>
      We always bring good quality services with
      100% safety measures
    </p>
  </div>

  <button className="quote-btn">Get A Quote</button>
</section>

{/* CLIENT LOGO SLIDER */}
<section className="clients-section">
  <button
    className="slider-btn"
    onClick={() =>
      setIndex((prev) =>
        prev === 0 ? TOTAL - VISIBLE : prev - 1
      )
    }
  >
    ❮
  </button>

  <div className="clients-window">
    <div
      className="clients-slider"
      style={{
        transform: `translateX(-${index * 220}px)`,
      }}
    >
      {clients.map((logo, i) => (
        <img key={i} src={logo} alt="Client Logo" />
      ))}
    </div>
  </div>

  <button
    className="slider-btn"
    onClick={() =>
      setIndex((prev) =>
        prev + 1 > TOTAL - VISIBLE ? 0 : prev + 1
      )
    }
  >
    ❯
  </button>
</section>





    </div>
  );
}

export default Home;
