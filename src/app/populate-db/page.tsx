// app/populate-db/page.tsx
'use client'; // <-- client component
import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<string | null>(null);

  const handleUpload = async () => {
    console.log('Starting upload...');

    try {
      const res = await fetch('/api/populate-db', { method: 'POST' });
      const data = await res.json();

      console.log('API response:', data);

      if (data.result === 'success') {
        setStatus('Insertion successful ✅');
      } else {
        setStatus('Insertion failed ❌');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      setStatus('Insertion failed ❌');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Populate Database</h1>
      <button
        onClick={handleUpload}
        style={{
          padding: '0.5rem 1rem',
          marginTop: '1rem',
          cursor: 'pointer',
          backgroundColor: 'cyan',
        }}
      >
        Upload Dummy Data
      </button>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}
