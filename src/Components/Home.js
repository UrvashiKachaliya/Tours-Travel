import React from 'react'
import Userslider from './Userslider'
import Info1 from './Info1'
import Cards from './Cards'
import Vacation from './Vacation'
import Nextadven from './Nextadven'
import Adventure from './Adventure'
import Footer from './Footer'
import Usernavbar from './Usernavbar'


export default function Home() {
  return (
    <div>
   <Usernavbar/>
    <Userslider/>
    <Info1/>
    <Cards/>
    <Vacation/>
    <Nextadven/>
    <Adventure/>
    <Footer/>
    </div>
  )
}
