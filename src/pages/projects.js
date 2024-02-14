import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Acro1 from '../../public/images/projects/Acro/1.png'
// import Acro2 from '../../public/images/projects/Acro/2.png'
// import Acro3 from '../../public/images/projects/Acro/3.png'
import sample from '../../public/images/projects/sample.png'
import promptify from '../../public/images/projects/promptify.png'
import herio from '../../public/images/projects/herio.png'
import synconvo from '../../public/images/projects/synconvo.png'


const FeaturedProjet = ({type,title,summary,img,link,github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-dark border-solid bg-light  dark:bg-dark dark:text-light dark:border-light shadow-2xl p-4'>
                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto'/>
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='font-medium text-sky-700 dark:text-primaryDark text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 text-left w-full font-bold text-3xl dark:text-light'>{title}</h2>
                    </Link>
                    <p className='my-2 text-dark font-medium dark:text-light/75'>{summary}</p>
                    <div className='flex items-center mt-2'>
                        <Link href={github} className='w-8'><GithubIcon/></Link>
                        <Link href={link} className='ml-4 rounded-lg text-light bg-dark p-1 px-2 text-lg font-semibold 
                         hover:bg-light hover:text-dark border-2 border-solid border-transparent
                         hover:border-dark hover:font-bold dark:text-dark dark:bg-light dark:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>
                            Visit here!
                        </Link>
                    </div>
                </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Chowdri Sakthivel</title>
            <meta name="portfolio" content="description" />
      </Head>
      <main className='flex flex-col items-center justify-center w-full mb-16'>
        <Layout className='pt-16'>
            <AnimatedText text="Inspiration Builds Knowledge!" className='text-5xl mb-8'/>
            <div className='grid grid-cols-12 gap-24'>


                <div className='col-span-12'>
                    <FeaturedProjet
                    title="Promptify - A Blog Application"
                    summary="Promptify is a blog application where you can share AI prompts easily. 
                    Built with NextAuth, Next.js, Tailwind, and MongoDB, it offers a user-friendly 
                    platform for posting and exploring prompts."
                    img={promptify} link="https://promptify-chowdris.vercel.app/"
                    github="https://github.com/ChowdriS/Promptify"
                    />
                </div>
                
                <div className='col-span-12'>
                    <FeaturedProjet
                    title="SynConvo - A ChatBot Application"
                    summary="SynConvo is a chatbot app created using FastApi,OpenAI API and Python.
                     It features a speech recognition system that converts speech to text.The chatbot is 
                     built by integrating with the ChatGPT API,providing a seamless conversational experience."
                    img={synconvo}
                    link="https://github.com/Aswinsrini/SyncConvo-react"
                    github="https://github.com/Aswinsrini/SyncConvo-react"
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProjet
                    title="Herio - A Music Player"
                    summary="Herio is a music player app created using Next.js,
                     Tailwind CSS, and the Spotify API. It lets you listen to music easily and enjoyably. 
                     With its cool design and useful features, Herio makes listening to music more fun."
                    img={herio}
                    link="https://herio.vercel.app/"
                    github="https://github.com/ChowdriS/herio"
                    />
                </div>

                <div className='col-span-12'>
                    <FeaturedProjet
                    title="Acro - Ecommerce Application"
                    summary="A E-commerce platform for electronic items, facilitating buying and selling,
                    boasting a sleek UI design. Developed using HTML, CSS, PHP, and MySQL, it offers
                    user-friendly navigation, and robust intractions for efficient operations"
                    img={Acro1}
                    link="https://github.com/ChowdriS/E-Commerce-Website"
                    github="https://github.com/ChowdriS/E-Commerce-Website"
                    />
                </div>
                {/* <h1 className='text-4xl font-bold my-1'>Images</h1>
                <div className=' col-span-12 border border-spacing-2 border-solid rounded-2xl border-black flex justify-around items-center'>
                    <div className=''>
                        <Image src={Acro2} alt="img1" className=' w-full rounded-lg h-auto'/>
                    </div>
                    <div className=''>
                        <Image src={Acro3} alt="img2" className='w-full rounded-lg h-autp'/>
                    </div>
                </div> */}
                <div className='col-span-12'>
                    <FeaturedProjet
                    title="Portfolio Application"
                    summary="A professional portfolio website using NextJS, Framer-motion, and Styled-components. It has smooth 
                    page transitions, cool background effects, unique design and it is mobile responsive."
                    type="Featured Projects"
                    img={sample}
                    link="/"
                    github="https://github.com/ChowdriS/Portfolio"
                    />
                </div>
                {/* <div className='col-span-6'>
                    Project-1
                </div>
                <div className='col-span-6'>
                    Project-2
                </div> */}

            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects