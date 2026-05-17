import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './styles/global.css';
import { MOCK_DATA } from './utils/constants';
import BarChart from './components/chart/BarChart';
import RegionFilter from './components/filters/RegionFilter';
import CategoryFilter from './components/filters/CategoryFilter';
import Tracker from './components/Tracker';

function App() {
  const [selectedRegion, setSelectedRegion] = useState("Bütün şəhərlər üzrə");
  const [selectedCategory, setSelectedCategory] = useState("Bütün məhsullar");
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode effekti
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Optimallaşdırılmış dəyişmə funksiyaları
  const handleRegionChange = useCallback((val) => {
    setSelectedRegion(val);
  }, []);

  const handleCategoryChange = useCallback((val) => {
    setSelectedCategory(val);
  }, []);

  // Optimallaşdırılmış filtrasiya
  const filteredData = useMemo(() => {
    return MOCK_DATA.filter(item => {
      const matchesRegion = selectedRegion === "Bütün şəhərlər üzrə" || item.region === selectedRegion;
      const matchesCategory = selectedCategory === "Bütün məhsullar" || item.category === selectedCategory;
      return matchesRegion && matchesCategory;
    });
  }, [selectedRegion, selectedCategory]);

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '24px' }}>Sales Performance Analytics</h1>
        <button 
          onClick={() => setDarkMode(prev => !prev)}
          style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '20px', border: '1px solid var(--primary)', background: 'transparent', color: 'var(--primary)' }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main>
        <section className="filter-panel" style={{ display: 'flex', gap: '20px', padding: '20px', backgroundColor: 'var(--card-bg)', borderRadius: '12px', marginBottom: '20px' }}>
          <RegionFilter value={selectedRegion} onChange={handleRegionChange} />
          <CategoryFilter value={selectedCategory} onChange={handleCategoryChange} />
        </section>
        <Tracker />
        <div style={{ padding: '20px', backgroundColor: 'var(--card-bg)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ marginBottom: '20px' }}>{selectedRegion} - {selectedCategory} Üzrə Analiz</h3>
          {filteredData.length > 0 ? (
            <BarChart data={filteredData} />
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px' }}>Məlumat tapılmadı.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;