import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/services'
import Banner from './components/Banner/Banner'
import Bannertext from './components/BannerText/BannerText'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'



const App = () => {
  return (<main className='overflow-x-hidden '>


    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <Bannertext/>
<Blogs/>
<Footer/>
  </main>
)}

export default App