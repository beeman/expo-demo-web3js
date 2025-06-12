import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { WalletFeature } from '@/components/wallet/WalletFeature'
import { GradientHeader } from '@/components/GradientHeader'

export default function HomeScreen() {
  return (
    <ParallaxScrollView header={<GradientHeader title="Wallet" subtitle="Connect your Solana wallet and explore." />}>
      <WalletFeature />
    </ParallaxScrollView>
  )
}
