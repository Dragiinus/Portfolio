import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Portfolio de Melvin</title>
      </Head>

        <Header />
  
        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
    </div>
  )
}
