/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Slate from './pages/Slate';
import Work from './pages/Work';
import Method from './pages/Method';
import Lab from './pages/Lab';
import Collect from './pages/Collect';
import Spatial from './pages/Spatial';
import Inquire from './pages/Inquire';
import ProjectDetail from './pages/ProjectDetail';
import ProductionDesign from './pages/ProductionDesign';
import FineArt from './pages/FineArt';
import VisualDevelopment from './pages/VisualDevelopment';
import DataRoomGate from './pages/DataRoomGate';
import HellsKitchenDataRoom from './pages/HellsKitchenDataRoom';
import BadlanderDataRoom from './pages/BadlanderDataRoom';
import UGRPDataRoom from './pages/UGRPDataRoom';

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
            <Route path="/investment-opportunities" element={<Slate />} />
            <Route path="/disciplines" element={<Work />} />
            <Route path="/method" element={<Method />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/collect" element={<Navigate to="/fine-art" replace />} />
            <Route path="/spatial" element={<Spatial />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/production-design" element={<ProductionDesign />} />
            <Route path="/fine-art" element={<FineArt />} />
            <Route path="/visual-development" element={<VisualDevelopment />} />
            <Route path="/acnd-dataroom" element={<DataRoomGate />} />
            <Route path="/hells-kitchen-dataroom" element={<HellsKitchenDataRoom />} />
            <Route path="/badlander-dataroom" element={<BadlanderDataRoom />} />
            <Route path="/ugrp-dataroom" element={<UGRPDataRoom />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}
