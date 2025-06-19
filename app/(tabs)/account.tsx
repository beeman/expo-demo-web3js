import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { GradientHeader } from '@/components/GradientHeader'
import React from 'react'
import { AccountDetailFeature } from '@/components/account/account-detail-feature'

export default function AccountScreen() {
  return (
    <ParallaxScrollView header={<GradientHeader title="Account" subtitle="Connect your Solana wallet and explore." />}>
      <AccountDetailFeature />
    </ParallaxScrollView>
  )
}
