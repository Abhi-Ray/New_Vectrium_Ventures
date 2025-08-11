import React from 'react'
import {Home} from '@/components/common/Home'
import { WobbleCardDemo } from "@/components/common/AITools";
import { FeaturesSectionDemo } from "@/components/common/Feature";
import { ThreeDMarqueeDemoSecond } from "@/components/common/CallToAction";
const page = () => {
  return (
    <div>
      <Home/>
      <WobbleCardDemo />
      <FeaturesSectionDemo />
      <ThreeDMarqueeDemoSecond />
    </div>
  )
}

export default page
