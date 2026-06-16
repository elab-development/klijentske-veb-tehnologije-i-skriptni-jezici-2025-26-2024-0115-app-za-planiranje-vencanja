import { useParams, useNavigate } from "react-router-dom";
import "./VendorDetails.css";

function VendorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vendorData: Record<string, any> = {
    "elegant-moments": {
      name: "Elegant Moments",
      category: "Wedding Photographer",
      image: "/src/data/wphoto1.jpg",
      description:
        "Elegant Moments captures soft, romantic and timeless wedding memories. Their style is bright, natural and perfect for couples who want emotional and elegant photos.",
      price: "Starting from €800",
      location: "Belgrade, Serbia",
      phone: "+381 64 123 4567",
      email: "elegantmoments@gmail.com",
    },

    "dream-lens-studio": {
      name: "Dream Lens Studio",
      category: "Wedding Photographer",
      image: "/src/data/wphoto2.jpg",
      description:
        "Dream Lens Studio is focused on modern wedding photography with artistic details, emotional portraits and beautiful couple shots.",
      price: "Starting from €950",
      location: "Novi Sad, Serbia",
      phone: "+381 65 222 3344",
      email: "dreamlens@gmail.com",
    },

    "forever-memories": {
      name: "Forever Memories",
      category: "Wedding Photographer",
      image: "/src/data/wphoto3.jpg",
      description:
        "Forever Memories creates romantic wedding albums filled with natural moments, ceremony details and elegant portraits.",
      price: "Starting from €700",
      location: "Belgrade, Serbia",
      phone: "+381 63 555 7777",
      email: "forevermemories@gmail.com",
    },

    "rose-garden-estate": {
      name: "Rose Garden Estate",
      category: "Wedding Venue",
      image: "/src/data/weddingvenue1.jpg",
      description:
        "Rose Garden Estate is a beautiful outdoor venue surrounded by flowers, perfect for romantic ceremonies and elegant receptions.",
      price: "Starting from €2500",
      location: "Belgrade, Serbia",
      phone: "+381 64 888 1122",
      email: "rosegarden@gmail.com",
    },

    "lake-como": {
      name: "Lake Como",
      category: "Wedding Venue",
      image: "/src/data/weddingvenue2.jpg",
      description:
        "Lake Como offers a luxury destination-style wedding experience with breathtaking lake views and elegant decoration options.",
      price: "Starting from €5000",
      location: "Italy",
      phone: "+39 333 456 789",
      email: "lakecomo.weddings@gmail.com",
    },

    "sunset-lake-venue": {
      name: "Sunset Lake Venue",
      category: "Wedding Venue",
      image: "/src/data/weddingvenue3.jpg",
      description:
        "Sunset Lake Venue is a peaceful lakeside venue ideal for sunset ceremonies, romantic dinners and intimate celebrations.",
      price: "Starting from €3000",
      location: "Novi Sad, Serbia",
      phone: "+381 66 777 8899",
      email: "sunsetlake@gmail.com",
    },

    "bloom-&-bliss": {
      name: "Bloom & Bliss",
      category: "Florist",
      image: "/src/data/bridalbouquet1.jpg",
      description:
        "Bloom & Bliss designs soft pastel bridal bouquets, elegant centerpieces and romantic floral wedding decorations.",
      price: "Starting from €300",
      location: "Belgrade, Serbia",
      phone: "+381 64 333 2211",
      email: "bloombliss@gmail.com",
    },

    "petal-paradise": {
      name: "Petal Paradise",
      category: "Florist",
      image: "/src/data/bridalbuket4.jpg",
      description:
        "Petal Paradise creates colorful and luxurious floral arrangements for ceremonies, receptions and bridal styling.",
      price: "Starting from €350",
      location: "Novi Sad, Serbia",
      phone: "+381 65 444 2233",
      email: "petalparadise@gmail.com",
    },

    "white-rose-designs": {
      name: "White Rose Designs",
      category: "Florist",
      image: "/src/data/bridalbouquet3.jpg",
      description:
        "White Rose Designs specializes in classy white and blush floral decorations for elegant wedding celebrations.",
      price: "Starting from €400",
      location: "Belgrade, Serbia",
      phone: "+381 63 222 1100",
      email: "whiterose@gmail.com",
    },

    "beauty-by-emma": {
      name: "Beauty by Emma",
      category: "Makeup Artist",
      image: "/src/data/bridalmakeup1.jpg",
      description:
        "Beauty by Emma creates soft glam bridal makeup looks with glowing skin, natural tones and long-lasting finish.",
      price: "Starting from €120",
      location: "Belgrade, Serbia",
      phone: "+381 64 909 8080",
      email: "beautybyemma@gmail.com",
    },

    "glam-studio": {
      name: "Glam Studio",
      category: "Makeup Artist",
      image: "/src/data/bridalmakeup2.jpg",
      description:
        "Glam Studio is perfect for brides who want elegant, polished and photo-ready makeup for their special day.",
      price: "Starting from €150",
      location: "Novi Sad, Serbia",
      phone: "+381 65 707 6060",
      email: "glamstudio@gmail.com",
    },

    "bridal-glow": {
      name: "Bridal Glow",
      category: "Makeup Artist",
      image: "/src/data/bridalmakeup3.jpg",
      description:
        "Bridal Glow focuses on radiant bridal makeup, soft eye looks and timeless beauty for romantic weddings.",
      price: "Starting from €130",
      location: "Belgrade, Serbia",
      phone: "+381 63 505 4040",
      email: "bridalglow@gmail.com",
    },
  };

  const vendor = vendorData[id || ""];

  if (!vendor) {
    return (
      <div className="vendor-details-page">
        <h1>Vendor not found</h1>
        <button onClick={() => navigate("/vendors")}>Back to vendors</button>
      </div>
    );
  }

  return (
    <div className="vendor-details-page">
      <button className="back-button" onClick={() => navigate("/vendors")}>
        ← Back to vendors
      </button>

      <div className="vendor-details-card">
        <div className="vendor-image-box">
          <img src={vendor.image} alt={vendor.name} />
        </div>

        <div className="vendor-content">
          <p className="vendor-category">{vendor.category}</p>
          <h1>{vendor.name}</h1>

          <p className="vendor-description">{vendor.description}</p>

          <div className="vendor-info-grid">
            <div>
              <span>Price</span>
              <p>{vendor.price}</p>
            </div>

            <div>
              <span>Location</span>
              <p>{vendor.location}</p>
            </div>

            <div>
              <span>Phone</span>
              <p>{vendor.phone}</p>
            </div>

            <div>
              <span>Email</span>
              <p>{vendor.email}</p>
            </div>
          </div>

          <div className="contact-box">
            <h3>Contact this vendor</h3>
            <p>
              Send a message and ask about availability, wedding packages and
              personalized offers for your special day.
            </p>

            <button>Send Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorDetails;