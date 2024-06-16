import './AboutUsPage.css'
import React, { useState } from 'react';

const AboutUsPage = ({ updateLiveView }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');

  const handleUpdate = () => {
    updateLiveView({
      type: 'about',
      content: { name, description, website }
    });
  };

  return (
    <div id='userInputs'>
      <h2>About Us</h2>
      <input
        type="text"
        placeholder="Business"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleUpdate}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={handleUpdate}
      />
      <input
        type="url"
        placeholder="Website URL"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        onBlur={handleUpdate}
      />
    </div>
  );
};

export default AboutUsPage;
