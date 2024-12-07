import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Homepage</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}