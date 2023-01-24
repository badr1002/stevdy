import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeBesiness = dynamic(() => import('../components/home/besiness'))
const DynamicHomePlatform = dynamic(() => import('../components/home/platform'))
const DynamicHomeAdvancedCustomerServices = dynamic(() => import('../components/home/advancedCustomerServices'))
const DynamicHomeBestPlatform = dynamic(() => import('../components/home/bestPlatform'))
const DynamicHomeAccerelation = dynamic(() => import('../components/home/accerelation'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))


const Home: NextPageWithLayout = () => {
  return (
    <>        
      <DynamicHomeHero />
      <DynamicHomeBesiness />
      <DynamicHomePlatform/>
      <DynamicHomeAdvancedCustomerServices />
      <DynamicHomeBestPlatform />
      <DynamicHomeAccerelation />
      <DynamicHomeTestimonial />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
