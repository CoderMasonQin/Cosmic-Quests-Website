"use client";
import { HashRouter as Router } from 'react-router-dom'
import { Navigate, Route, Routes } from 'react-router'
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from './page4';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path='/index' element={<Page1 />} />
        <Route path='/connect' element={<Page2 />} />
        <Route path='/game' element={<Page3 />} />
        <Route path='/end' element={<Page4 />} />
        <Route path='*' element={<Navigate to='/index' replace={true} />} />
      </Routes>
    </Router>
    
  );
}
