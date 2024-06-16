import React, { useState } from 'react';
import axios from 'axios';

const ImagesPage = ({ updateLiveView }) => {
  const [token, setToken] = useState('');
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${token}&q=${query}`);
      setImages(response.data.hits);
      updateLiveView({
        type: 'images',
        content: response.data.hits
      });
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  return (
    <div>
      <h2>Images</h2>
      <input
        type="text"
        placeholder="Pixabay Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <input
        type="text"
        placeholder="Query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchImages}>Get Images</button>
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} />
        ))}
      </div>
    </div>
  );
};

export default ImagesPage;
