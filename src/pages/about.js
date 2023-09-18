import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import profilepic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({value})=>{
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue,{duration:8000})
  const isInView = useInView(ref);
  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,motionValue,value])

  useEffect(()=>{
    springValue.on(`Change`,(latest)=>{
      if(ref.current && latest.fixed(0) <= value){
        ref.current.textContent = latest.fixed(0)
      console.log(latest)
      }
    })
  },[springValue,value])

  return (
    <span ref={ref}>{value}</span>
  )
}

const about = () => {
  return (
    <>
      <Head>
        <title>Chowdri Sakthivel</title>
        <meta name="portfolio" content="description" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-7' />
          <h2 className='uppercase mb-4 text-lg text-dark/75 font-bold'>Biography</h2>
          <div className='grid grid-cols-3 gap-16'>
            <div className='col-span-1 flex flex-col items-start justify-start'>
              <p className='font-medium text-justify'>Hi I&apos;m Chowdri Sakthivel, a lifelong learner with a passion for coding, particularly in C++. 
                I find joy in crafting solutions to intriguing problems. Beyond coding, I&apos;m an inquisitive mind nomad, constantly seeking new knowledge.
                I&apos;m drawn to web development, creating web applications using frameworks like React and Next.js.</p>
            </div>
            <div className='col-span-1 flex flex-col items-start justify-start'>
              <p className='font-medium text-justify'>My appetite for knowledge extends to science and technology. I&apos;m an avid reader, exploring scientific literature and insightful blogs. 
                I also enjoy delving into scientific and conspiracy theory videos, always eager to uncover new perspectives and ideas. Always seeking to expand my horizons, 
                I embrace every opportunity to connect with the vast landscape of knowledge.</p>
            </div>
            <div className='col-span-1 flex flex-col items-start justify-start'>
              <p className='font-medium text-justify'>While coding and learning drive me, music is my sanctuary. Spotify is my faithful companion, and I often lose myself in its harmonious tunes. 
                I believe that music transcends boundaries, offering solace and inspiration in equal measure. 
                Life, for me, is a symphony, and I&apos;m here to explore every note, whether in lines of code or the melodies of life&apos;s journey.</p>
            </div>
          </div>
          <div className='flex items-center justify-evenly mt-3'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>3+</span>
                <h2 className='mt-3 text-xl font-medium capitalize text-dark/75'>years of experience</h2>
              </div>
            <div className='relative rounded-2xl border-2 border-solid border-dark bg-light p-4 mt-4'>
              <div className='top-0 -right-3 -z-10 w-{102%} h-{103%} rounded-{2rem} bg-dark'>
              <Image src={profilepic} alt="profilepic" className="rounded-2xl w-full h-80" />
              </div>
            </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={10} />+
                </span>
                <h2 className=' mt-3 text-xl font-medium capitalize text-dark/75'>projects completed</h2>
              </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
