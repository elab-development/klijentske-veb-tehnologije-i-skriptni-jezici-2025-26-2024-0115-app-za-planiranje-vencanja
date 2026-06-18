import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getWeddingImages, type UnsplashImage } from "../api/Unsplash";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [dressImage, setDressImage] = useState<UnsplashImage | null>(null);
const [flowerImage, setFlowerImage] = useState<UnsplashImage | null>(null);
const [venueImage, setVenueImage] = useState<UnsplashImage | null>(null);


useEffect(() => {
 getWeddingImages("wedding dress").then((data) => {
  const random = Math.floor(Math.random() * data.length);
  setDressImage(data[random]);
});

  getWeddingImages("wedding flowers").then((data) => {
  const random = Math.floor(Math.random() * data.length);
  setFlowerImage(data[random]);
});

getWeddingImages("luxury wedding venue").then((data) => {
  const random = Math.floor(Math.random() * data.length);
  setVenueImage(data[random]);
});
}, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">HappyBride</p>
          <h1>Your perfect wedding is waiting for you</h1>
          <p>Everything you need in one place – vendors, plan and inspo.</p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/vendors")}>Vendors</button>
            <button onClick={() => navigate("/inspo")}>Inspo</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Everything you can do</h2>

        <div className="grid">
          <div className="card" onClick={() => navigate("/vendors")}>
            <span>💐</span>
            <h3>Vendors</h3>
            <p>Find venues, photographers, catering and decoration.</p>
          </div>

          <div className="card" onClick={() => navigate("/plan")}>
            <span>📅</span>
            <h3>Plan</h3>
            <p>Organize tasks, guests, budget and wedding timeline.</p>
          </div>

          <div className="card" onClick={() => navigate("/inspo")}>
            <span>✨</span>
            <h3>Inspo</h3>
            <p>Save beautiful ideas for dresses, flowers and decor.</p>
          </div>
        </div>
      </section>

      <section className="preview">
  <h2>Most popular</h2>

  <div className="preview-cards">

  {dressImage && (
    <div className="mini-card">
      <img src={dressImage.urls.small} alt="" />
      <div className="mini-card-text">
        <h3>Bridal Fashion</h3>
        <p>Elegant wedding dress inspiration</p>
      </div>
    </div>
  )}

  {flowerImage && (
    <div className="mini-card">
      <img src={flowerImage.urls.small} alt="" />
      <div className="mini-card-text">
        <h3>Wedding Flowers</h3>
        <p>Beautiful bouquets and floral decor</p>
      </div>
    </div>
  )}

  {venueImage && (
    <div className="mini-card">
      <img src={venueImage.urls.small} alt="" />
      <div className="mini-card-text">
        <h3>Dream Venues</h3>
        <p>Romantic locations for your big day</p>
      </div>
    </div>
  )}

</div>
</section>

      <section className="cta">
        <h2>Start planning today</h2>
        <button onClick={() => navigate("/plan")}>Open planner</button>
      </section>
    </div>
  );
}

export default Home;