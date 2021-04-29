import React from 'react'
import Education from '../components/Education/Education'
import Navigation from '../components/Navigation/Navigation'
import Skills from '../components/Skills/Skills'
import Experience from './Experience'
import Footer from './Footer'
import Me from './Me'
import Projects from './Projects'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Me/>
            <Skills/>
            <Education/>
            <Experience/>
            <Projects/>
            <Footer/>
        </div>
    )
}
