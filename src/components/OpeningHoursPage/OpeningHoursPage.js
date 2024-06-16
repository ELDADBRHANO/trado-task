import React, { useState } from 'react';

const OpeningHoursPage = ({ updateLiveView }) => {
  const [hours, setHours] = useState([
    { days: 'Sunday - Wednesday', time: '10:00 - 17:00' },
    { days: 'Thursday - Saturday', time: '12:00 - 21:00' }
  ]);

  const handleHoursChange = (index, field, value) => {
    const newHours = [...hours];
    newHours[index][field] = value;
    setHours(newHours);
    updateLiveView({
      type: 'hours',
      content: newHours
    });
  };

  const addTimeFrame = () => {
    setHours([...hours, { days: '', time: '' }]);
  };

  return (
    <div>
      <h2>Opening Hours</h2>
      {hours.map((hour, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Days"
            value={hour.days}
            onChange={(e) => handleHoursChange(index, 'days', e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            value={hour.time}
            onChange={(e) => handleHoursChange(index, 'time', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addTimeFrame}>Add Time Frame</button>
    </div>
  );
};

export default OpeningHoursPage;
