import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-8 bg-blue-900 min-h-screen ">
      <Navbar/>
    </main>
  )
}
