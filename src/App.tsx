/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Slate from './pages/Slate';
import Work from './pages/Work';
import Method from './pages/Method';
import Lab from './pages/Lab';
import Collect from './pages/Collect';
import Spatial from './pages/Spatial';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animateRing = () => {
      setRingPos(prev => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.12,
        y: prev.y + (cursorPos.y - prev.y) * 0.12
      }));
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

  return (
    <Router>
      <div className={`min-h-screen ${isHovering ? 'cursor-hover' : ''}`}>
        {/* Custom Cursor */}
        <div 
          id="cursor-dot" 
          style={{ left: cursorPos.x, top: cursorPos.y }}
        />
        <div 
          id="cursor-ring" 
          style={{ left: ringPos.x, top: ringPos.y }}
        />

        <Layout setIsHovering={setIsHovering}>
          <Routes>
            <Route path="/" element={<Home setIsHovering={setIsHovering} />} />
            <Route path="/about" element={<About />} />
            <Route path="/slate" element={<Slate />} />
            <Route path="/work" element={<Work />} />
            <Route path="/method" element={<Method />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/collect" element={<Collect />} />
            <Route path="/spatial" element={<Spatial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}
