export type UnsplashImage = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
};

export async function getWeddingImages(query: string) {
  const accessKey = "sIsuH3PoEwg2-pLuEVDRlYmJLT962JYbsvP_P3bPYyA";

  console.log("KEY:", accessKey);

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=20&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.log("UNSPLASH ERROR:", response.status, errorText);
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();
  return data.results;
}