import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');

  function handleActivity(e) {
    setActivity(e.target.value);
  }
  function handleTime(e) {
    setTime(e.target.value);
  }

  return (
    <div>
      <h1>Welcome Home!</h1>
      <input
        type="text"
        value={activity}
        placeholder="activity?"
        onChange={handleActivity}
      />
      <input
        type="text"
        value={time}
        placeholder="time? eg: 10AM"
        onChange={handleTime}
      />

      <Link to={`/activity?activity=${activity}&time=${time}`}>Go!</Link>
    </div>
  );
}

export default Home;
