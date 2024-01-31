import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/Components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/Components/Icons'
import Bulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chowdri Sakthivel</title>
        <meta name="portfolio" content="description" />
      </Head>
      <main className='flex items-center justify-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
              <div className='w-1/2'>
                <Image src={profilePic} alt='Chowdri' className='w-full h-auto'/>
              </div>
              <div className='w-full h-full'>
              <AnimatedText text="Hi I am Chowdri!" className='!text-sky-700 !text-6xl'/>
              <h1 className='mx-auto py-2 text-4xl font-bold text-dark flex items-center justify-center '>Turning Vision Into Reality With Code</h1>
              <p className='text-justify'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/ChowdriSakthivel_Resume.pdf" target={'_blank'} className='mt-2 flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                 hover:border-dark hover:font-bold ml-[30%]'
                 >
                  Resume<LinkArrow className={`w-6 ml-1`}/></Link>
                <Link href="mailto:chowdrisakthivel@gmail.com" target={'_blank'}
                className='font-medium ml-4 text-dark underline text-xl capitalize'>
                  Contact</Link>
              </div>
              </div>
          </div>
        </Layout>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={Bulb} alt="bulb" className="w-full h-auto"/>
        </div>
      </main>
    </>
  )
}
