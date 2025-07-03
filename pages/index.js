import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Transition from '../components/Transition'

export default function Home() {
  return (
    <>
      <Navbar />
      <Transition>
        <main style={{ maxWidth: 720, margin: '2rem auto', padding: '0 1rem' }}>
          <h1>Selamat Datang di Komunitas Nyampah</h1>
          <p>
            Platform berbasis masyarakat & lingkungan. Edukasi, aksi, dan kolaborasi untuk bumi yang lebih baik!
          </p>
          <h2>Galeri Komunitas</h2>
          <Gallery />
        </main>
      </Transition>
      <Footer />
    </>
  )
}
