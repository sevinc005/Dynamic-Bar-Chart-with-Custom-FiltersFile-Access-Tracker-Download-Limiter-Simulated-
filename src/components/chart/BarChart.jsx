import React, { memo, useState } from 'react';
import Tooltip from './Tooltip';

const BarChart = memo(({ data }) => {
  const [tooltip, setTooltip] = useState({ display: false, x: 0, y: 0, content: "" });

  const width = 800;
  const height = 400; 
  const paddingBottom = 70; 
  const paddingLeft = 60;
  const paddingRight = 40;
  const paddingTop = 30;
  
  // Datanı yoxlayırıq: əgər data yoxdursa boş qayıdırıq
  if (!data || data.length === 0) return <p style={{textAlign: 'center'}}>Məlumat yoxdur.</p>;

  const maxValue = Math.max(...data.map(d => d.value), 1);
  const chartHeight = height - paddingTop - paddingBottom;
  const chartWidth = width - paddingLeft - paddingRight;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {data.map((d, i) => {
          const barWidth = (chartWidth / data.length) * 0.6;
          const barHeight = (d.value / maxValue) * chartHeight;
          const x = paddingLeft + i * (chartWidth / data.length) + (chartWidth / data.length - barWidth) / 2;
          const y = height - paddingBottom - barHeight;

        
          const displayName = d.region || d.category || "Adsız"; 

          return (
            <g 
              key={d.id || i} 
              onMouseEnter={() => setTooltip({ 
                display: true, 
                x: x + barWidth / 2, 
                y: y - 10, 
                content: `${displayName}: ${d.value} AZN` 
              })}
              onMouseLeave={() => setTooltip({ ...tooltip, display: false })}
            >
              <rect 
                x={x} 
                y={y} 
                width={barWidth} 
                height={barHeight} 
                fill="var(--primary)" 
                rx="4"
                />
                <text 
                x={x + barWidth / 2} 
                y={height - paddingBottom + 30} 
                textAnchor="middle" 
                fontSize="14" 
                fill="var(--text-main)"
                style={{ fontWeight: '500' }}
                >
                {displayName}
                </text>
            </g>
            );
        })}

        <line 
            x1={paddingLeft} y1={height - paddingBottom} 
            x2={width - paddingRight} y2={height - paddingBottom} 
            stroke="var(--border-color)" 
            strokeWidth="2" 
        />

        {tooltip.display && (
    <Tooltip 
    x={tooltip.x} 
    y={tooltip.y} 
    content={tooltip.content} 
    />
)}
</svg>
    </div>
    );
});

export default BarChart;