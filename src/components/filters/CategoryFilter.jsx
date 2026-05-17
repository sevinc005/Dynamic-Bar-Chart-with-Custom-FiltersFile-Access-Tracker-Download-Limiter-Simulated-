import React, { memo } from 'react';
import { CATEGORIES } from '../../utils/constants';

const CategoryFilter = memo(({ value, onChange }) => {
    console.log("CategoryFilter render olundu");
    return (
    <div className="filter-group">
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Kateqoriya:</label>
        <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--input-bg)', color: 'var(--text-main)' }}
        >
        <option value="Bütün məhsullar">Bütün məhsullar</option>
        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
    </div>
    );
});

export default CategoryFilter;