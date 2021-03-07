import CreatePost from '../component/CreatePost'
import Head from 'next/head'
import Navbar from '../component/Navbar'
import Heading from '../component/Heading'
import Section from '../component/Section'
import News from '../component/News'
import Cities from '../component/Cities'
import Footer from '../component/Footer'

export default function Home() {

  

  return (
    <>
    <Head>
      <title>Notai IT</title>
      </Head>
  <Navbar />

  <Heading />

  <Section />

  <CreatePost />

  <News />

  <Cities />

  <Footer />
   </>
  )
}
