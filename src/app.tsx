import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import StarterPage from './pages/StarterPage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import ErrorPage from './pages/404';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </>
  );
}
