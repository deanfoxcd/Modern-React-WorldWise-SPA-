import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8000';

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert(`There was an error loading the data: ${err}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  console.log(cities);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>LIST</p>} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>LIST OF COUNTRIES URL</p>} />
          <Route path="form" element={<p>FORM</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
