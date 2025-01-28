"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Github, Mail } from 'lucide-react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='container mx-auto px-4 pt-32 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
           <motion.div 
           initial={{opacity: 0 , x:-20}}
           animate={{opacity:1 , x:0}}
           transition={{duration:0.5}}
           >
                <h1 className='text-4xl md:txt-5xl font-bold mb-8'>
                    Hi, I'm <span className='text-primary'>Abhinav Bahadur Singh</span>
                </h1>
                <p className='text-xl md:text-2xl text-muted-foreground mb-8'>
                    Full Stack Web Developer, Android Developer & AI-ML Engineer
                </p>
                <div className='flex gap-4'>
                    {/* Contact Me Button */}
                    <Button variant={"default"} className='gap-2'>
                        <Mail className='w-4 h-4'/>
                        Contact Me
                    </Button>

                    {/* GitHub Button with Link */}
                    <a 
                        href="https://github.com/abhinavbahadursingh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button variant={"outline"} className='gap-2'>
                            <Github className='w-4 h-4'/>
                            GitHub
                        </Button>
                    </a>
                </div>
           </motion.div>

           <motion.div
           initial={{opacity: 0 , x:20}}
           animate={{opacity:1 , x:0}}
           transition={{duration:0.5}}
           className='flex justify-center'
           >
            <Image 
            src={"/hero.svg"}
            alt="Developer Illustration"
            width={500}
            height={500}
            priority
            />
            
           </motion.div>
        </div>
    </section>
  )
}

export default Hero
