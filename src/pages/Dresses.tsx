import { useState } from "react";
import "./Dresses.css";

interface Dress {
  id: number;
  name: string;
  style: string;
  price: number;
  image: string;
}

interface IDressManager {
  formatPrice(price: number): string;
  filterByStyle(dresses: Dress[], selectedStyle: string): Dress[];
}

class DressManager implements IDressManager{
  formatPrice(price: number): string {
    return `€${price}`;
  }

  filterByStyle(dresses: Dress[], selectedStyle: string): Dress[] {
    if (selectedStyle === "All") {
      return dresses;
    }

    return dresses.filter((dress) => dress.style === selectedStyle);
  }
}

const dresses: Dress[] = [
  {
    id: 1,
    name: "Rose Pearl Dress",
    style: "Princess",
    price: 1200,
    image: "/src/context/dresses15.jpg",
  },
  {
    id: 2,
    name: "Soft Lace Gown",
    style: "Romantic",
    price: 950,
    image: "/src/context/dresses6.jpg",
  },
  {
    id: 3,
    name: "Elegant Satin Dress",
    style: "Minimalist",
    price: 1100,
    image: "/src/context/dresses7.jpg",
  },
  {
    id: 4,
    name: "Blush Dream Gown",
    style: "Princess",
    price: 1500,
    image: "/src/context/dresses14.jpg",
  },
   {
    id: 5,
    name: "Cynthia Dress",
    style: "Princess",
    price: 9500,
    image: "/src/context/dresses13.jpg",
  }, {
    id: 6,
    name: "Serena Dress",
    style: "Princess",
    price: 16000,
    image: "/src/context/dresses12.jpg",
  }, {
    id: 7,
    name: "Ariana Dress",
    style: "Princess",
    price: 20000,
    image: "/src/context/dresses11.jpg",
  }, {
    id: 8,
    name: "Blue Arrow Dress",
    style: "Minimalist",
    price: 6200,
    image: "/src/context/dresses8.jpg",
  },
   {
    id: 9,
    name: "Yolanda Dress",
    style: "Minimalist",
    price: 12000,
    image: "/src/context/dresses9.jpg",
  }, {
    id: 10,
    name: "Rosalinda Dress",
    style: "Minimalist",
    price: 700,
    image: "/src/context/dresses10.jpg",
  }, {
    id: 11,
    name: "Violeta Dress",
    style: "Romantic",
    price: 4000,
    image: "/src/context/dresses5.jpg",
  }, {
    id: 12,
    name: "Gloria Dress",
    style: "Romantic",
    price: 5000,
    image: "/src/context/dresses4.jpg",
  }, {
    id: 13,
    name: "Sara Dress",
    style: "Romantic",
    price: 2000,
    image: "/src/context/dresses3.jpg",
  }, {
    id: 14,
    name: "Elizabeta Dress",
    style: "Romantic",
    price: 7000,
    image: "/src/context/dresses2.jpg",
  }, {
    id: 15,
    name: "The Dolls Dream Dress",
    style: "Romantic",
    price: 3200,
    image: "/src/context/dresses1.jpg",
  }
];

function Dresses() {
  const [selectedStyle, setSelectedStyle] = useState("All");

  const [favorites, setFavorites] = useState<Dress[]>(() => {
  const savedFavorites = localStorage.getItem("favoriteDresses");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
});

  const [message, setMessage] = useState("");
  const dressManager = new DressManager();

  const filteredDresses = dressManager.filterByStyle(dresses, selectedStyle);

  const addToFavorites = (dress: Dress) => {
  const alreadyExists = favorites.some((item) => item.id === dress.id);

  if (alreadyExists) {
    setMessage("This dress is already in favorites!");

   setTimeout(() => {
      setMessage("");
    }, 2500);

    return;
  }

  const updatedFavorites = [...favorites, dress];
  setFavorites(updatedFavorites);
  localStorage.setItem("favoriteDresses", JSON.stringify(updatedFavorites));
  setMessage("Dress added to favorites!");
  setTimeout(() => {
    setMessage("");
  }, 2500);
};

  return (
    <div className="dresses-page">
      <section className="dresses-hero">
        <h1>Wedding Dresses</h1>
        <p>Find the perfect dress for your special day.</p>
      </section>

      <p className="favorites-count">
        Favorite dresses: {favorites.length}
      </p>

      {message && (
  <div className="notification">
    {message}
  </div>
)}

      <div className="dress-filter">
        <button onClick={() => setSelectedStyle("All")}>All</button>
        <button onClick={() => setSelectedStyle("Princess")}>Princess</button>
        <button onClick={() => setSelectedStyle("Romantic")}>Romantic</button>
        <button onClick={() => setSelectedStyle("Minimalist")}>
          Minimalist
        </button>
      </div>

      <div className="dresses-grid">
        {filteredDresses.map((dress) => (
          <div className="dress-card" key={dress.id}>
            <img src={dress.image} alt={dress.name} />

            <div className="dress-info">
              <h3>{dress.name}</h3>
              <p>{dress.style}</p>
              <span>{dressManager.formatPrice(dress.price)}</span>
              <button onClick={() => addToFavorites(dress)}>
            Add to favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dresses;