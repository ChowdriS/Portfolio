import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { Source_Code_Pro } from 'next/font/google'; 
import Head from 'next/head'

const source_Code_Pro = Source_Code_Pro({
  subsets: ['latin'],
  // variable: '--font-source',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-light w-full min-h-screen dark:bg-dark`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
