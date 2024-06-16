import React from 'react';

const LiveView = ({ content }) => {
  if (!content) return null;

  switch (content.type) {
    case 'about':
      return (
        <div>
          <h1>{content.content.name}</h1>
          <p>{content.content.description}</p>
          <a href={content.content.website}>{content.content.website}</a>
        </div>
      );
    case 'images':
      return (
        <div>
          {content.content.map((image) => (
            <img key={image.id} src={image.webformatURL} alt={image.tags} />
          ))}
        </div>
      );
    case 'hours':
      return (
        <div>
          {content.content.map((hour, index) => (
            <div key={index}>
              <p>{hour.days}: {hour.time}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default LiveView;
