import React from 'react'
import Layout from '../components/AnalytIQ/Layout'
import About from '../components/AnalytIQ/Sections/About'
import Contact from '../components/AnalytIQ/Sections/Contact'
import Home from '../components/AnalytIQ/Sections/Home'
import Rules from '../components/AnalytIQ/Sections/Rules'

const AnalytIQ = () => {
  return (
    <div>
        <Layout>
            <Home />
            <About />
            <Rules />
            <Contact />
        </Layout>
    </div>
  )
}

export default AnalytIQ