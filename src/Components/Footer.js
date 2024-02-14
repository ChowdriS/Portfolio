import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()}&copy;All Rights Reserved!</span>
            <div className='flex items-center'>Crafted with <span className='text-rose-600 text-3xl px-1'>&hearts;</span>
                <span>by&nbsp;</span>
            <h2 className='text-sky-900 dark:text-primaryDark'>Chow3</h2>
            </div>
            <Link href={"mailto:chowdrisakthivel@gmail.com"} target='_blank' className='underline underline-offset-2 font-bold'>Say Hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer