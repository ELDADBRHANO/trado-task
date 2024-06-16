import './App.css'
import React, { useState } from 'react';
import AboutUsPage from './components/AboutUsPage/AboutUsPage'
import ImagesPage from './components/ImagesPage/ImagesPage';
import OpeningHoursPage from './components/OpeningHoursPage/OpeningHoursPage';
import LiveView from './components/LiveView/LiveView';
import { extractColorsFromImage } from './services/ExtractColor';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('about');
  const [liveViewContent, setLiveViewContent] = useState(null);
  const [primaryColor, setPrimaryColor] = useState('#ffffff');
  const [secondaryColor, setSecondaryColor] = useState('#000000');

  const updateLiveView = (content) => {
    setLiveViewContent(content);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const [primary, secondary] = await extractColorsFromImage(file);
        setPrimaryColor(primary);
        setSecondaryColor(secondary);
      } catch (error) {
        console.error('Failed to extract colors', error);
      }
    }
  };

  const renderEditor = () => {
    switch (selectedPage) {
      case 'about':
        return <AboutUsPage updateLiveView={updateLiveView} />;
      case 'images':
        return <ImagesPage updateLiveView={updateLiveView} />;
      case 'hours':
        return <OpeningHoursPage updateLiveView={updateLiveView} />;
      default:
        return null;
    }
  };

  return (
    <div id='container'>
      <div id='box'>

      <div id='ButtonsDiv'>
        <button className='buttons' onClick={() => setSelectedPage('about')}>About Us</button>
        <button className='buttons'onClick={() => setSelectedPage('images')}>Images</button>
        <button className='buttons' onClick={() => setSelectedPage('hours')}>Opening Hours</button>
      </div>
      <div>
        <div>
          {renderEditor()}
        </div>
        <div>
          <LiveView content={liveViewContent} />
        </div>
      </div>
      <br/>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
    </div>
      </div>
  );
};

export default App;
