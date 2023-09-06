import React from 'react'
import { Careers } from '../Careers/Careers'
import { Footer } from '../footer/Footer'
import { Jobs } from '../Jobs/Jobs'
import { Navbar } from '../Navbar/Navbar'
import { Landing } from './Landing'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <Jobs/>
        <Careers/>
        <Footer/>
    </div>
  )
}
