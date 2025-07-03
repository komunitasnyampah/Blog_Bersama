export default function Footer() {
  return (
    <footer style={{
      background: 'var(--secondary)', textAlign: 'center', padding: '1rem 0', marginTop: 40
    }}>
      <small>© {new Date().getFullYear()} Komunitas Nyampah. Berbasis masyarakat & lingkungan.</small>
    </footer>
  );
}
