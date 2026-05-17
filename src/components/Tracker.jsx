import React, { useState } from 'react';

const Tracker = () => {
    const limit = 5;
  // Performanslı (Lazy) useState
    const [downloadCount, setDownloadCount] = useState(() => {
    const savedCount = localStorage.getItem('download_count') || 0;
    return parseInt(savedCount);
    });

    const handleDownload = () => {
    if (downloadCount < limit) {
        const newCount = downloadCount + 1;
        setDownloadCount(newCount);
        localStorage.setItem('download_count', newCount);
        alert("Məlumatlar simulyasiya edilərək fayl kimi yükləndi!");
    }
    };

    return (
    <div style={{ 
        padding: '15px', 
        backgroundColor: 'var(--card-bg)', 
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '14px'
    }}>
        <p style={{ color: 'var(--text-main)' }}>
        Gündəlik simulyasiya limiti: <strong>{downloadCount} / {limit}</strong>
        </p> 
        <button 
        onClick={handleDownload}
        disabled={downloadCount >= limit}
        style={{
            padding: '8px 16px',
            backgroundColor: downloadCount >= limit ? '#ccc' : 'var(--primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: downloadCount >= limit ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s'
        }}
        >
        {downloadCount >= limit ? "Limit Dolub" : "Hesabatı Yüklə"}
        </button>

        {downloadCount >= limit && (
        <p style={{ color: '#ff7675', fontSize: '12px', marginTop: '8px', marginBottom: 0 }}>
            Maksimum yükləmə limitinə çatdınız. Giriş bloklandı.
        </p>
        )}
    </div>
    );
};

export default Tracker;