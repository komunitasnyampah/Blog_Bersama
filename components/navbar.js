import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'var(--primary)', padding: '1rem 2rem', color: '#fff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: 22 }}>
        <img src="/logo.png" alt="Logo" style={{ height: 40, verticalAlign: 'middle' }} /> Komunitas
      </div>
      <div>
        <Link href="/">Home</Link> | <Link href="/portfolio">Portofolio</Link>
      </div>
    </nav>
  );
}
