import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import profilepic from '../../public/images/profile/developer-pic-2.jpg'

const about = () => {
  return (
    <>
    <Head>
        <title>Chowdri Sakthivel</title>
        <meta name="portfolio" content="description" />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='uppercase mb-4 text-lg text-dark/75 font-bold'>Biography</h2>
            <p className='font-medium'>I&#39;m Chowdri Sakthivel, a lifelong learner with a passion for coding, particularly in C++. 
I find joy in crafting solutions to intriguing problems. Beyond coding, I&#39;m an inquisitive mind nomad, constantly seeking new knowledge.
I&#39;m drawn to web development, creating web applications using frameworks like React and Next.js.
LeetCode is my playground, where I satisfy my curiosity for challenging problem-solving.</p>
                <p className='font-medium my-4'>My appetite for knowledge extends to science and technology. I&#39;m an avid reader, exploring scientific literature and insightful blogs. 
I also enjoy delving into scientific and conspiracy theory videos, always eager to uncover new perspectives and ideas. Always seeking to expand my horizons, 
I embrace every opportunity to connect with the vast landscape of knowledge.</p>
                <p className='font-medium'>While coding and learning drive me, music is my sanctuary. Spotify is my faithful companion, and I often lose myself in its harmonious tunes. 
I believe that music transcends boundaries, offering solace and inspiration in equal measure. Just as I approach coding challenges with zest and enthusiasm, I curate playlists with the same passion, aiming to craft the perfect soundtrack for every moment. 
Life, for me, is a symphony, and I&#39;m here to explore every note, whether in lines of code or the melodies of life&#39;s journey.</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                <Image src={profilepic} alt="profilepic" className="rounded-2xl w-full h-auto"/>
            </div>

        </div>
        </Layout>
    </main>
    </>
  )
}

export default about