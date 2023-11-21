import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import HomePageOne from 'pages/HomePageOne';
import ShopPage from 'pages/ShopPage';
import ProductsPage from 'pages/ProductsPage';
import CartPage from 'pages/CartPage';

const AppBar = lazy(() => import('./AppBar/AppBar'));

export const App = () => {
  return (
    <div className={css.main__container}>
      <AppBar />

      <Routes>
        <Route path='/' element={<HomePageOne />} index />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
};
