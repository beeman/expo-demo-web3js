import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { WalletFeature } from '@/components/wallet/WalletFeature'
import { GradientHeader } from '@/components/GradientHeader'
import React from 'react'
import { AccountDetailFeature } from '@/components/account/account-detail-feature'
import { PublicKey } from '@solana/web3.js'

const address = new PublicKey('BEEMANuMhmSwTukEUhBbosH5zHpnaTeno9atgCfc5hgi')

export default function HomeScreen() {
  return (
    <ParallaxScrollView header={<GradientHeader title="Wallet" subtitle="Connect your Solana wallet and explore." />}>
      <WalletFeature />
      <AccountDetailFeature address={address} />
    </ParallaxScrollView>
  )
}
