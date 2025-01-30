"use client"
import React from 'react'
import {motion} from 'framer-motion'
import GithubStats from '../github.stats'
function Github() {
  return (
    <section className='container mx-auto px-4 py-20'>
        <h2 className='text-3xl font-bold mb-12 text-center'>
            Github <span className='text-primary'> Activity</span>
        </h2>
        <motion.div
        initial = {{opacity: 0 , y: 20}}
        animate = {{opacity: 1 , y: 0}}
        transition={{duration:0.5}}
        >   
            <GithubStats username="abhinavbahadursingh"/>
        </motion.div>
    </section>
  )
}

export default Github
