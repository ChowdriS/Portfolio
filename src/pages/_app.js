import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';  // Import Montserrat correctly
import Head from 'next/head'

// Generate the Montserrat CSS rule
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-mont: 'Montserrat', sans-serif;
          }

          ${montserrat}  /* Apply the generated Montserrat CSS rule */
        `}
      </style>
      <main className={`font-mont bg-light w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
