import React from 'react';
import RegionFilter from './RegionFilter';
import CategoryFilter from './CategoryFilter';

const FilterPanel = ({ 
    selectedRegion, onRegionChange, 
    selectedCategory, onCategoryChange 
}) => {
    return (
    <section className="filter-panel" style={{ 
        marginBottom: '30px', padding: '20px', backgroundColor: 'var(--card-bg)', 
        borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)',
        display: 'flex', gap: '30px' 
    }}>
        <RegionFilter value={selectedRegion} onChange={onRegionChange} />
        <CategoryFilter value={selectedCategory} onChange={onCategoryChange} />
    </section>
    );
};

export default FilterPanel;