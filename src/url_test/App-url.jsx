import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Activity from './Activity';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  </BrowserRouter>
);

export default App;
