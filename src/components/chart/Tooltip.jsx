
const Tooltip = ({ x, y, content }) => {
    return (
    <g style={{ pointerEvents: 'none' }}>
        <rect 
        x={x - 60} 
        y={y - 35} 
        width="120" 
        height="30" 
        rx="5" 
        fill="rgba(0, 0, 0, 0.85)" 
        />
        <text 
        x={x} 
        y={y - 15} 
        textAnchor="middle" 
        fill="white" 
        fontSize="12" 
        fontWeight="bold"
        >
        {content}
        </text>
    </g>
    );
};

export default Tooltip;