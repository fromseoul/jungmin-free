import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import FreeBoards from './pages/FreeBoards';
import FreeBoardDetail from './pages/FreeBoards/FreeBoardDetail';

function App() {
  return (
    <Suspense fallback={<div style={{ fontSize: 200 }}>test</div>}>
      <Routes>
        <Route path="/" element={<FreeBoards />} />
        <Route path=":id" element={<FreeBoardDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
