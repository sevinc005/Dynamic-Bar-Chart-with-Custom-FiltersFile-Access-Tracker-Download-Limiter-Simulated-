import React, { memo } from 'react';
import { REGIONS } from '../../utils/constants';

const RegionFilter = memo(({ value, onChange }) => {
    console.log("RegionFilter render olundu");
    return (
    <div className="filter-group">
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Region:</label>
        <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--input-bg)', color: 'var(--text-main)' }}
        >
        <option value="Bütün şəhərlər üzrə">Bütün şəhərlər üzrə</option>
        {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
    </div>
    );
});

export default RegionFilter;