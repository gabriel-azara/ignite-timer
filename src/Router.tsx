import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { Home } from './pages/home';
import { History } from './pages/history';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
