import Features from '@/components/Features'
import Guide from '@/components/Guide'
import Image from 'next/image'
import Camp from '@/components/Camp'
import Hero from '@/components/Hero'
import GetApp from '@/components/GetApp'
export default function Home() {
  return (
   <>
   <Hero />
   <Camp />
   <Guide />
   <Features/>
   <GetApp /> 

   </> 
  )
}
