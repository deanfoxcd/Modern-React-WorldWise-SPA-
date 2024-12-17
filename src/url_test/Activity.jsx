import { Link, useLocation } from 'react-router-dom';

const Activity = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activity_ = params.get('activity');
  const time = params.get('time');

  return (
    <div>
      <h1>Welcome to the Activity!</h1>
      <p>Activity: {activity_}</p>
      <p>Time: {time}</p>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Activity;
