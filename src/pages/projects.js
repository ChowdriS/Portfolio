import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sample from '../../public/images/projects/sample.png'


const FeaturedProjet = ({type,title,summary,img,link,github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-dark border-solid bg-light shadow-2xl p-4'>
                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto'/>
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='font-medium text-sky-700 text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 text-left w-full font-bold text-4xl'>{title}</h2>
                    </Link>
                    <p className='my-2 text-dark font-medium'>{summary}</p>
                    <div className='flex items-center mt-2'>
                        <Link href={github} className='w-10'><GithubIcon/></Link>
                        <h2 className='ml-4 rounded-lg text-light bg-dark p-2 px-6 text-lg font-semibold'>Visit here!</h2>
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
            <AnimatedText text="Imagination Trumps Knowledge!" className='text-5xl mb-8'/>
            <div className='grid grid-cols-12 gap-24'>

                <div className='col-span-12'>
                    <FeaturedProjet
                    title="ABC Application"
                    summary="A professional portfolio website using nextJS, Framer-motion, and Styled-components. It has smooth 
                    page transitions, cool background effects, unique design and it is mobile responsive."
                    type="Featured Projects"
                    img={sample}
                    link="/"
                    github="/"
                    />
                </div>
                <div className='col-span-6'>
                    Project-1
                </div>
                <div className='col-span-6'>
                    Project-2
                </div>
                <div className='col-span-12'>
                    <FeaturedProjet
                    title="ABC Application"
                    summary="A professional portfolio website using NextJS, Framer-motion, and Styled-components. It has smooth 
                    page transitions, cool background effects, unique design and it is mobile responsive."
                    type="Featured Projects"
                    img={sample}
                    link="/"
                    github="/"
                    />
                </div>
                <div className='col-span-6'>
                    Project-1
                </div>
                <div className='col-span-6'>
                    Project-2
                </div>

            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects