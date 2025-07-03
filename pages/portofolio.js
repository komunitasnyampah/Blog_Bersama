import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Transition from '../components/Transition'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Transition>
        <main style={{ maxWidth: 720, margin: '2rem auto', padding: '0 1rem' }}>
          <h1>Portofolio Komunitas</h1>
          <ul>
            <li>Kegiatan bersih-bersih pantai</li>
            <li>Workshop daur ulang sampah</li>
            <li>Kolaborasi dengan sekolah lingkungan</li>
            {/* Tambahkan list portofolio lain di sini */}
          </ul>
        </main>
      </Transition>
      <Footer />
    </>
  )
}
