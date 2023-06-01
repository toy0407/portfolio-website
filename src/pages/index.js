import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../src/components/Navbar'
import Main from '../../src/components/Main'
import About from '../../src/components/About'
import Skills from '../../src/components/Skills'
import Contact from '../../src/components/Contact'
import Projects from '../../src/components/Projects'
import WorkExperience from '../../src/components/WorkExperience'
import SocialMediaIconsBanner from '@/components/micro/SocialMediaBanner'
import ScrollToTopButton from '@/components/micro/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='snap-y snap-mandatory'>
      <Head>
        <title>Suvro's Portfolio</title>
        <meta name="description" content="Suvro Bose Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <Navbar />

      <section><Main /></section>

      <section id="about" className='snap-start'><About /></section>
      <section id="skills" className='snap-center'><Skills /></section>
      <section id="projects" className='snap-start'><Projects /></section>
      {/* <WorkExperience/> */}
      {/* <Testimonials/> */}
      {/* <Collaborations/> */}
      <section id="contact" className='snap-center'><Contact /></section>
      <SocialMediaIconsBanner />
      <ScrollToTopButton />
    </div>

  )
}
