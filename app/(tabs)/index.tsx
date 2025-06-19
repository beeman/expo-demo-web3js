import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { GradientHeader } from '@/components/GradientHeader'
import React from 'react'
import { DashboardFeature } from '@/components/dashboard/dashboard-feature'

export default function HomeScreen() {
  return (
    <ParallaxScrollView header={<GradientHeader title="Dashboard" subtitle="The starting point of your app." />}>
      <DashboardFeature />
    </ParallaxScrollView>
  )
}
