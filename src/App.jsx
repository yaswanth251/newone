import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import { sleep } from './utils';

const lazyWithDelay = (importFunc, delay) => {
  return lazy(() =>
    Promise.all([importFunc(), sleep(delay)]).then(([moduleExports]) => moduleExports)
  );
};

const Home = lazyWithDelay(() => import('./home'), 1000); // 3 seconds delay
const About = lazyWithDelay(() => import('./About'), 1000);
const Skills = lazyWithDelay(() => import('./Skills'), 1000);
const Projects = lazyWithDelay(() => import('./Projects'), 1000);
const Contact = lazyWithDelay(() => import('./Contact'), 1000);
const NoPage = lazyWithDelay(() => import('./NoPage'), 1000);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
