import { getIpfsUrl } from '../utils/ipfs';

// Dummy images, replace with your own or IPFS hashes
const images = [
  { src: '/logo.png', alt: 'Logo Lokal' },
  { src: getIpfsUrl('QmTzQ1NjV...'), alt: 'Contoh dari IPFS' }
];

export default function Gallery() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 16, margin: '2rem 0'
    }}>
      {images.map((img, idx) => (
        <div key={idx} style={{
          border: '1px solid var(--secondary)', borderRadius: 8, overflow: 'hidden'
        }}>
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: '100%', height: 180, objectFit: 'cover', background: '#fff' }}
          />
        </div>
      ))}
    </div>
  );
}
