import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Home/Header/Header'
import AboutChef from '../../components/Home/AboutChef/AboutChef'
import Guests from '../../components/Home/Guests/Guests'
import Blog from '../../components/Home/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Discover from '../../components/Home/Discover/Discover'

const Home = () => {
  return (
<>
<NavBar/>
<Header/>
<AboutChef/>
<Discover/>
<Guests/>
<Blog/>
<Footer/>
</>
  )
}

export default Home