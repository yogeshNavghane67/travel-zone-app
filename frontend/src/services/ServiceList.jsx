import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Travel`,
      desc: `At Travel Zone, we believe that travel is a personal journey. That's why we offer customizable packages to ensure your trip reflects your unique interests and preferences. Trust us to handle the details while you focus on creating lasting memories. `,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Our team of experienced travel experts is dedicated to making your journey seamless and stress-free. We provide insider tips, local insights, and practical advice to enhance your travel experience.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Community and Connection',
      desc: `Join our travel community and connect with like-minded adventurers. Share your experiences, get inspired by others, and gain valuable insights to make the most of your travels.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList