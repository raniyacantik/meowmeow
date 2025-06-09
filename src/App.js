import { useEffect, useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
        const data = await response.json();
        const newPhotos = data.map((item, i) => ({
          id: i,
          thumbnailUrl: item.url,
          title: `Kucing ${i + 1}`,
        }));
        setPhotos(newPhotos);
      } catch (error) {
        console.error('Gagal mengambil gambar kucing:', error);
      }
    };
  
    fetchImages();
  }, []);
  
  return (
    <div>
      <h1>Galeri Foto</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} width="150" />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
