import React from 'react'
import Layout from '../components/DimensionX/Layout'
import About from '../components/DimensionX/Sections/About'
import Contact from '../components/DimensionX/Sections/Contact'
import Home from '../components/DimensionX/Sections/Home'
import Rules from '../components/DimensionX/Sections/Rules'

const DimX = () => {
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

export default DimX