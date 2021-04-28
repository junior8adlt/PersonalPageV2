import React from 'react'
import Education from '../components/Education/Education'
import Navigation from '../components/Navigation/Navigation'
import Skills from '../components/Skills/Skills'
import Me from './Me'

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Me/>
            <Skills/>
            <Education/>
        </div>
    )
}
